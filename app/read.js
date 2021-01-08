const fs = require('fs');

module.exports = {

    readFile(source){
       return new Promise((resolve, reject)=>{         
        try{
            fs.readFile(source, (err, data) => {
                if (err) reject(err);
                let res = data ? JSON.parse(data) : null
                resolve(res);
            }); 
        } catch(err){
            reject(err)
        }        
       })
    }

}




