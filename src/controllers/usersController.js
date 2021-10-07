const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { ENGINE_METHOD_ALL } = require('constants');



let db = require('../../database/models')
let allUsers;
    db.users.findAll().then(function (users) {
    allUsers = users
})

// console.log(bcryptjs.hashSync('0303456', 10))

const controlador = {


    login: (req, res) => {
        //console.log(req.cookies);
        return res.redirect('./perfil')
    },

    loginProcess: (req, res) => {
        let userToLogin;
        allUsers.forEach(element => {
            if (element.email == req.body.mail) {
                userToLogin = element
            }            
        });
        
        if (userToLogin) {
            let isOkThePassword;
            if (userToLogin.password == req.body.password) {
                isOkThePassword = userToLogin.password
            }
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
    userStore: async (req, res) => {
        let usuarioNuevo;
        await db.users.create({
            name: req.body.name,
            last_name: req.body.lastName,
            password: bcryptjs.hashSync(req.body.password,10),
            email: req.body.email,
            avatar: req.file.filename
        }).then(user => {
            usuarioNuevo = user
        })
        // let idNuevo = 0;
        
        // for (let e of users) {
        //     if (idNuevo < e.id) {
        //         idNuevo = e.id;
        //     }
        // }
        // idNuevo++;

        // let usuarioNuevo = {
        //     id: idNuevo,
        //     name: req.body.name,
        //     lastName: req.body.lastName,
        //     password: bcryptjs.hashSync(req.body.password,10),
        //     email: req.body.email,
        //     avatar: req.file.filename
        // }
        req.session.userLogged = usuarioNuevo;
        
        // users.push(usuarioNuevo);

        // fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        res.redirect('./login')

    },

};

module.exports = controlador;

