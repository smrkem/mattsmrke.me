FROM ruby:2.3.1

RUN apt-get update -yqq \
  && apt-get install -yqq --no-install-recommends \
  mysql-client nodejs \
  && apt-get -q clean \
  && rm -rf /var/lib/apt/lists

# Pre-install gems with native extensions
RUN gem install nokogiri -v "1.7.1"

WORKDIR /usr/src/app
COPY Gemfile* ./
RUN bundle install
COPY . .

CMD bash -c "rm -f /tmp/puma.pid && rails server -b 0.0.0.0 -P /tmp/puma.pid"
