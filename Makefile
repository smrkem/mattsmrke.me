BUCKET = www.mattsmrke.me

deploy:
	echo "Copying bundle.js to bucket $(BUCKET)"
	aws s3 sync static s3://$(BUCKET) --delete
