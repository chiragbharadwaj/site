all: media/css/bootstrap.min.css media/css/font-awesome.min.css media/css/katex.min.css media/css/styles.css
	jekyll build
	jekyll serve

media/css/bootstrap.css: _less/bootstrap/bootstrap.less
	lessc $< $@

media/css/font-awesome.css: _less/font-awesome/font-awesome.less
	lessc $< $@

media/css/katex.css: _less/katex/katex.less
	lessc $< $@

media/css/styles.css: _less/styles.less
	lessc $< $@

media/css/bootstrap.min.css: media/css/bootstrap.css
	cleancss --skip-rebase -o $@ $<
	rm media/css/bootstrap.css

media/css/font-awesome.min.css: media/css/font-awesome.css
	cleancss --skip-rebase -o $@ $<
	rm media/css/font-awesome.css

media/css/katex.min.css: media/css/katex.css
	cleancss --skip-rebase -o $@ $<
	rm media/css/katex.css

clean: media/css/styles.css
	rm     media/css/styles.css
	rm -rf _site