CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
  stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);

INSERT INTO products (name, description, price, stock)
SELECT 'Mechanical Keyboard', 'Compact mechanical keyboard for developers.', 79.99, 25
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Mechanical Keyboard');

INSERT INTO products (name, description, price, stock)
SELECT 'Wireless Mouse', 'Ergonomic wireless mouse.', 39.99, 40
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Wireless Mouse');

INSERT INTO products (name, description, price, stock)
SELECT 'USB-C Hub', 'Multi-port USB-C hub for laptops.', 49.99, 30
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'USB-C Hub');
