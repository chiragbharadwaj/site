all: media/css/bootstrap.min.css media/css/font-awesome.min.css media/css/katex.min.css media/css/styles.css
	jekyll build

serve: all
	jekyll serve --baseurl ""

clean: media/css/styles.css
	rm -rf _site
