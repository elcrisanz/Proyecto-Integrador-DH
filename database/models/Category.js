'use strict'
module.exports = (sequelize, DataTypes) => {
    let alias = "categories";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    };
    let config = {
        tableName: "category",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function (models) {
        Category.hasMany(models.products, {
            as: "products",
            foreignKey: "id_category"
        })
    }
    
    return Category;
}