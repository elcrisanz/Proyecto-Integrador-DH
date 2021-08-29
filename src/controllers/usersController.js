const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { ENGINE_METHOD_ALL } = require('constants');


const usersFilePath = path.join(__dirname, './../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

// console.log(bcryptjs.hashSync('0303456', 10))

const controlador = {

    findByEmail: function (text) {
        let user = users.find(oneUser => oneUser.email === text);
        return user;
    },

    login: (req, res) => {
        //console.log(req.cookies);
        return res.render('/')
    },

    loginProcess: (req, res) => {
        let userToLogin = controlador.findByEmail(req.body.mail);
        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                // delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.mail,{maxAge: 1000 * 120})
                }
                // return res.redirect('/user/profile');
                console.log("el login salio bien")
                
                return res.redirect('./perfil');
                // + req.session.userLogged.id, {usuarioLogueado: req.session}
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
        console.log(req.cookies.userEmail);

        res.render('./users/perfil', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        console.log("Se deslogueo exitosamente")
        return res.redirect('/');
    },
    userStore: (req, res) => {
        let idNuevo = 0;
        
        for (let e of users) {
            if (idNuevo < e.id) {
                idNuevo = e.id;
            }
        }
        idNuevo++;

        let usuarioNuevo = {
            id: idNuevo,
            name: req.body.name,
            lastName: req.body.lastName,
            password: bcryptjs.hashSync(req.body.password,10),
            email: req.body.email,
            image: req.file.filename
        }
        req.session.userLogged=usuarioNuevo;
        users.push(usuarioNuevo);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('./perfil')

    },

};

module.exports = controlador;

