const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../../models/product');

const mutations = {
    createProduct: async (_, { input }, { user }) => {
        if (!user || user.role !== 'ADMIN') {
            throw new Error('Not authorized');
        }
        return await Product.create(input);
    },

    updateProduct: async (_, { id, input }, { user }) => {
        if (!user || user.role !== 'ADMIN') {
            throw new Error('Not authorized');
        }
        return await Product.update(id, input);
    },

    deleteProduct: async (_, { id }, { user }) => {
        if (!user || user.role !== 'ADMIN') {
            throw new Error('Not authorized');
        }
        return await Product.delete(id);
    },

    signup: async (_, { input }, { pool }) => {
        const { email, password, first_name, last_name } = input;
        const hashedPassword = await bcrypt.hash(password, 10);

        const { rows } = await pool.query(
            `INSERT INTO users (email, password, first_name, last_name) 
       VALUES ($1, $2, $3, $4) 
       RETURNING id, email, first_name, last_name, role`,
            [email, hashedPassword, first_name, last_name]
        );

        const user = rows[0];
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return { token, user };
    },

    login: async (_, { email, password }, { pool }) => {
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = rows[0];

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return {
            token,
            user: {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
            }
        };
    }
};

module.exports = mutations;