const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");
const Categorias = require("./categorias")

const Produtos = sequelize.define('produtos', {
    nome: {type: Sequelize.STRING},
    preco: {type: Sequelize.STRING},
    descricao: {type: Sequelize.STRING},
    img: {type: Sequelize.STRING},

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

Categorias.hasMany(Produtos, {as: 'produtos'})
Produtos.belongsTo(Categorias, {as: 'categoria'})

module.exports = Produtos; 