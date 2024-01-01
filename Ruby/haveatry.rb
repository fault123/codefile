require 'erb'
template="text to be generated:<%= x %>"
erb_object=ERB.new(template)
x=5
puts erb_object.result(binding())
