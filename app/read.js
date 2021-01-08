const fs = require('fs');


module.exports = {

    readFile(source){
       return new Promise((resolve, reject)=>{         
        try{
            fs.readFile(source, (err, data) => {
                if (err) reject(err);
                resolve(JSON.parse(data));
            });
            // csv.parseFile(source, { headers: true })
            // .on('data', function(record) {
            // records.push(record);
            // })
            // .on('end', function() {
            //     resolve(records);
            // })   
        } catch(err){
            reject(err)
        }        
       })
    }

}




