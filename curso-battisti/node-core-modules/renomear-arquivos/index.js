const fs = require('fs')

fs.rename('arquivo.txt', 'ovo.txt', function(err){
    if (err){
        console.log(err);
    }
})