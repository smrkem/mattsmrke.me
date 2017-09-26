BUCKET = www.mattsmrke.me

deploy:
	echo "Copying bundle.js to bucket $(BUCKET)"
	aws s3 cp dist/ s3://$(BUCKET)/ --recursive
