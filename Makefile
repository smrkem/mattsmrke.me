BUCKET = www.mattsmrke.me

deploy:
	echo "Copying bundle.js to bucket $(BUCKET)"
	aws s3 cp dist/app/bundle.js s3://$(BUCKET)/app/bundle.js
