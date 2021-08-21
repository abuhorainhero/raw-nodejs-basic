const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/stream_buffer.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
});

console.log('Abu Horain');
