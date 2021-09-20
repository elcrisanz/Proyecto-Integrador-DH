const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
    let alias = "products";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false        
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false     
        },
        image: {
            type: DataTypes.STRING(200),
            defaultValue: 'rukhaAvatar.jpg',
            allowNull: false
        },

    };
    let config = {
        tableName: "product",
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.categories, {
            as: "category",
            foreignKey: "id_category"
        });
        Product.belongsToMany(models.measures, {
            as: "measures",
            through: "product_measure",
            foreignKey: "id_product",
            otherKey: "id_measure",
            timestamps: false
        })
    }

    return Product;
}