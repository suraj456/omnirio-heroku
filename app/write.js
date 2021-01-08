
const fs = require('fs');

module.exports = {
    
    writeFile(source, data){
        return new Promise((resolve, reject)=>{
            try{
                fs.writeFile(source, JSON.stringify(data), (err) => {
                    if (err) reject(err);
                    resolve(data)
                });
            }
            catch(err){
                reject(err)
            }
        })
    }
}

