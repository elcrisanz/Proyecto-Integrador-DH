let db = require ('../../database/models');
const Op = db.Sequelize.Op;

const controlador = {
    
    productList: (req, res) => {
        let category1=0;
        let category2=0;
        let category3=0;
        let category4 = 0;
        let totalAmount = 0;
        let lastProduct;

        db.products.findAll()
            .then(function (products){
                for (product of products){
                    if (product.id_category==1){
                        category1 = category1+1;
                    } else if (product.id_category==2){
                        category2 = category2+1;
                    } else if (product.id_category==3){
                        category3 = category3+1;
                    } else if (product.id_category==4){
                        category4 = category4+1;
                    }
                }
                for (product of products) {
                    totalAmount = totalAmount + Number(product.price)
                }
                lastProduct = products.pop();
            
                return res.status(200).json({
                data: {    
                    count: products.length,
                    countByCategories: {
                        category1: category1,
                        category2: category2,
                        category3: category3,
                        category4: category4
                    },
                    products: products,
                    lastProduct: lastProduct,
                    totalAmount: totalAmount,
                    status: 200
                }
            });
        })
    },

    oneProduct: (req, res) => {
        db.products.findByPk(req.params.id)
            .then(function (product){
                return res.status(200).json({
                data: product,
                status:200
            });
        })
    },

    usersList: (req, res) => {
        db.users.findAll()
            .then(function (users){
                return res.status(200).json({
                data: {    
                    count: users.length,
                    users: users,
                    status: 200
                }
            });
        })
    },

    oneUser: (req, res) => {
        db.users.findByPk(req.params.id)
            .then(function (users){
                return res.status(200).json({
                data: {
                    id:users.id,
                    name: users.name,
                    last_name: users.last_name,
                    email: users.email,
                    avatar:users.avatar,
                    admin: users.admin
                },
                status:200
            });
        })
    },

    categories: (req,res) => {
        db.categories.findAll()
        .then(function (categories){
            return res.status(200).json({
            data:{    
                count: categories.length,
                category: categories,
                status: 200
            }
            })    
        })
    }
};

module.exports = controlador;