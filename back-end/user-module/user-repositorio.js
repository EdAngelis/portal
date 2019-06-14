const bcrypt = require('bcrypt');
const config = require('./user-config');
const userSchema = require('./user-model');

exports.registerUser = async (data) => {
    
    const senhaHash = bcrypt.hashSync(data.password, config.salt);
    data.password = senhaHash
    const newUser = new userSchema (data);
    await newUser.save()
     .then( async data => {
       console.log(data)
      }).catch(error =>{
          console.log(error)
      });
      
        
}