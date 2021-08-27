const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, './../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// console.log(bcryptjs.hashSync('0303456', 10))

const controlador = {

    findByEmail: function (text){
        let user = users.find(oneUser => oneUser.email === text);
        return user;
    },

    login: (req,res) =>{

        // res.render('./login');
        return res.render('/')
    },

    loginProcess: (req, res) => {
        console.log("todo marcha bien... o no?")
        let userToLogin = controlador.findByEmail(req.body.email);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword){
                // return res.redirect('/user/profile');
                return res.redirect('/');
            }
            return res.redirect('/', {
                errors: {
                    email: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            });
        }

        return res.render('/', {
            errors: {
                email: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        })
    },

    registro: (req,res) =>{
        res.render('./registro');
    }
};

module.exports= controlador;

