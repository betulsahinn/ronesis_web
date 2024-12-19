const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const morgan = require('morgan');
const schema = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
const { authMiddleware } = require('./middleware/auth');
const pool = require('./config/database');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(authMiddleware);

// Apollo Server setup
const startApolloServer = async () => {
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        context: ({ req }) => ({
            user: req.user,
            pool
        })
    });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
        console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
    });
};

startApolloServer().catch(err => {
    console.error('Failed to start server:', err);
});