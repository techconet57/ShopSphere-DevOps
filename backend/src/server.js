const express = require('express');
const { Pool } = require('pg');
const { createClient } = require('redis');

const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = createClient({ url: process.env.REDIS_URL });
redis.on('error', err => console.error('Redis error:', err.message));

async function start() {
  await redis.connect();
  app.get('/api/health', async (_req, res) => {
    try {
      await pool.query('SELECT 1');
      await redis.ping();
      res.json({ status: 'UP', service: 'shopsphere-backend' });
    } catch (err) {
      res.status(503).json({ status: 'DOWN', error: err.message });
    }
  });

  app.get('/api/products', async (_req, res) => {
    try {
      const result = await pool.query(
        'SELECT id, name, description, price, stock FROM products ORDER BY id'
      );
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: 'Unable to load products' });
    }
  });

  app.get('/api/products/:id', async (req, res) => {
    try {
      const result = await pool.query(
        'SELECT id, name, description, price, stock FROM products WHERE id = $1',
        [req.params.id]
      );
      if (!result.rows.length) return res.status(404).json({ error: 'Product not found' });
      res.json(result.rows[0]);
    } catch {
      res.status(500).json({ error: 'Unable to load product' });
    }
  });

  app.get('/api/health/db', async (_req, res) => {
    await pool.query('SELECT 1');
    res.json({ database: 'UP' });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, '0.0.0.0', () => console.log(`ShopSphere API listening on ${port}`));
}

start().catch(err => {
  console.error('Startup failed:', err);
  process.exit(1);
});
