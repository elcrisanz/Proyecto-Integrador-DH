module.exports = (sequelize, DataTypes) => {
    let alias = "products_measures";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            references: {
                model: "products",
                key: "id"
            }
        },
        id_measure: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            references: {
                model: "measures",
                key: "id"
            }
        },
        stock: {
            type: DataTypes.INTEGER(6),
            allowNull: false    
        },

    };
    let config = {
        tableName: "product_measure",
        timestamps: false
    }
    const ProductMeasure = sequelize.define(alias, cols, config);
    ProductMeasure.associate = function (models) {
        ProductMeasure.belongsTo(models.products, {
            foreignKey: "id_product",
        }),
        ProductMeasure.belongsTo(models.measures, {
            foreignKey: "id_measure",
        })
    }

    return ProductMeasure;
}