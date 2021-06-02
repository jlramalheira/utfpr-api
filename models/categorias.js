const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const Categorias = sequelize.define('categorias', {
    nome: {type: Sequelize.STRING},
    createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "created_at",
    },
    updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE,
        field: "updated_at",
    },
    deletedAt: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.DATE,
        field: "deleted_at",
    }    
});

module.exports = Categorias; 