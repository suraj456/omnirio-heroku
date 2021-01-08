const ctr = require('./controller')

module.exports = (app)=>{
    app.route('/users').get(ctr.getUsers)
    app.route('/users/update').post(ctr.updateUser)

}