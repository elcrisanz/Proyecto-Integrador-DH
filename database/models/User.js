module.exports = (sequelize, DataTypes) => {
    let alias = "users";
    let cols = {
        id: {
            type: DataTypes.INTEGER(6),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(95),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(95),
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT(95),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(95),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(200),
            defaultValue: 'rukhaAvatar.jpg',
            allowNull: false
        },
        admin: {
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false
        }

    };
    let config = {
        tableName: "user",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    User.associate = function (models) {
        User.hasMany(models.sales, {
            as: "sales",
            foreignKey: "id_user"
        })
    }
    return User
};