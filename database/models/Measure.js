'use strict'
module.exports = (sequelize, DataTypes) => {
    let alias = "measures";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: DataTypes.STRING(85),
            allowNull: false
        }
    };
    let config = {
        tableName: "measure",
        timestamps: false
    }
    const Measure = sequelize.define(alias, cols, config);
    Measure.associate = function (models) {
        Measure.belongsToMany(models.products, {
            as: "products",
            through: "product_measure",
            foreignKey: "id_measure",
            otherKey: "id_product",
            timestamps: false
        })
    }
    
    return Measure;
}