const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
    Query: queries,
    Mutation: mutations,
    Product: {
        category: async (parent) => {
            return null;
        }
    },
    Category: {
        products: async (parent) => {
            return [];
        }
    }
};

module.exports = resolvers;