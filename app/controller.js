const reader = require('./read');
const writer = require('./write');
const path = require('path');
const source = path.resolve(__dirname + '\\assets\\users.json')

const ErrorResponse = {
    status : 500,
    message : 'Error Occured at source',
    results : null
}

const Response = {
    status : 200,
    message : 'Success',
    results : null
}

module.exports = {
    getUsers : (req, res, next)=> {
        reader.readFile(source).then((data)=>{
            console.log(data, 'read stream......')
            if(data) {
                Response.results = data
            }
            res.send(Response)
        }).catch(()=>{
            res.send(ErrorResponse)
        })
    },
    
    updateUser : (req, res, next)=> {
        writer.writeFile(source, req.body).then((data)=>{
            console.log(data, 'write stream......')
            if(data) {
                Response.results = data
            }
            res.send(Response)
        }).catch(()=>{
            res.send(ErrorResponse)
        })
    },
}