var fs = require('fs')
var dvbtee = require('../')

var parser = new dvbtee.Parser

parser.on('data', function(data) {
  console.log('\ntable data:\n', data)
})

fs.readFile('sample.ts', function(err, buf) {

    console.log('pushing ' + buf.length + ' bytes')

    parser.feed(buf, buf.length, function(err, status) {

      if (err)
          console.log(err)
      else
          console.log('complete: status = ' + status)
    })
})
