const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, './../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// console.log(bcryptjs.hashSync('0303456', 10))

const controlador = {

    findByEmail: function (text) {
        let user = users.find(oneUser => oneUser.email === text);
        return user;
    },

    login: (req, res) => {

        // res.render('./login');
        return res.render('/')
    },

    loginProcess: (req, res) => {
        let userToLogin = controlador.findByEmail(req.body.mail);

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email,{maxAge: 1000 * 120})
                }
                // return res.redirect('/user/profile');
                console.log("el login salio bien")
                

                return res.redirect('/');
            }

            console.log("la pass esta mal")
            return res.redirect('/');
            // return res.render('/', {
            //     errors: {
            //         email: {
            //             msg: 'Las credenciales son invalidas'
            //         }
            //     }
            // });
        }

        console.log("el mail no existe")
        return res.redirect('/')
        // return res.render('/', {
        //     errors: {
        //         email: {
        //             msg: 'El mail ingresado no existe en la base de datos'
        //         }
        //     }
        // });
    },

    registro: (req, res) => {
        res.render('./registro');
    },

    profile: (req, res) => {
        res.render('./profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },
};

module.exports = controlador;

