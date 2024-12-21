# Source:  Michael Bach
# Example: https://talk.jekyllrb.com/t/how-to-set-lastmod-to-file-modified-date/8609/3
module Jekyll
  class LastModifiedTag < Liquid::Tag
    def initialize(tag_name, path, tokens)
      super
      @path = path
    end

    def render(context)
      # Pipe parameter through Liquid to make additional replacements possible
      url = Liquid::Template.parse(@path).render context
	  
      # Adds the site source, so that it also works with a custom one
      site_source = context.registers[:site].config['source']
      file_path = site_source + '/' + url
      
      # Ensure it works even if the file does not exist (yet), for tags
      begin
        File.mtime(file_path.strip!).strftime('%d %b %Y')
      rescue
        ""
      end
    end
  end
end

Liquid::Template.register_tag('last_modified', Jekyll::LastModifiedTag)
