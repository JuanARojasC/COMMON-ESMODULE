const games = require('../data/games');

const getAllGames = () => games;
const getGameById = (id) => games.find(game => game.id === parseInt(id));

module.exports = {
    getAllGames,
    getGameById
};