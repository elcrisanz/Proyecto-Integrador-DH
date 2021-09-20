module.exports = (sequelize, DataTypes) => {
    let alias = "sales";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            }
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
        order_number: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        date: DataTypes.DATE

    };
    let config = {
        tableName: "sale",
        timestamps: false
    }
    const Sale = sequelize.define(alias, cols, config);
    Sale.associate = function (models) {
        Sale.belongsTo(models.users, {
            as: "user",
            foreignKey: "id_user"
        })
    }

    return Sale
}