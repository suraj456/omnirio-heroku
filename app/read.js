const fs = require('fs');

module.exports = {

    readFile(source){
       return new Promise((resolve, reject)=>{         
        try{
            fs.readFile(source, (err, data) => {
                if (err) reject(err);
                resolve(JSON.parse(data));
            }); 
        } catch(err){
            reject(err)
        }        
       })
    }

}




