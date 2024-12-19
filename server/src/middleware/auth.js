const jwt = require('jsonwebtoken');
const pool = require('../config/database');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.replace('Bearer ', '');

        if (token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [decoded.userId]);
            req.user = rows[0];
        }

        next();
    } catch (error) {
        next(error);
    }
};

module.exports = { authMiddleware };