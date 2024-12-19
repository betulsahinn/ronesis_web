const queries = {
    products: async (_, { limit = 10, offset = 0 }) => {
        return [];
    },
    product: async (_, { id }) => {
        return null;
    },
    categories: async () => {
        return [];
    },
    category: async (_, { id }) => {
        return null;
    },
    me: async (_, __, { user }) => {
        return null;
    }
};

module.exports = queries;