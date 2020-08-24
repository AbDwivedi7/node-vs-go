require('dotenv').config();

const password = process.env.PASSWORD;
console.log(password, "password");

module.exports  = {
    url: 'mongodb+srv://abdwivedi:'+password+'@testing.si9qg.mongodb.net/test?retryWrites=true&w=majority'
}
