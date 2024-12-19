// src/routes/index.js
const express = require('express');
const router = express.Router();
const pool = require('../config/database');

// Products Routes
router.get('/products', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/products', async (req, res) => {
    try {
        const { title, description, price, categoryId } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO products (title, description, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, price, categoryId]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Categories Routes
router.get('/categories', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM categories');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/categories/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { rows } = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/categories', async (req, res) => {
    try {
        const { name, description } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Users Routes
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Normalde burada password kontrolü yapılmalı
        const token = 'sample-token'; // JWT token oluşturulmalı
        res.json({ token, user: rows[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const { rows } = await pool.query(
            'INSERT INTO users (email, password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
            [email, password, firstName, lastName]
        );
        res.status(201).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;