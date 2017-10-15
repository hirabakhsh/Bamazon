/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS bamazon;

/* Create database */
CREATE DATABASE bamazon;
USE bamazon;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Xbox One", "Games", 299, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Xbox One Controller", "Games", 69, 20);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "XBL Gold 12 Month", "Games", 59, 12);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Titanfall 2", "Games", 59, 15);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Minecraft", "Games", 19, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Echo Dot", "Home", 79, 10);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Keurig 2.0", "Home", 120, 15);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "iPhone X", "Cell Phones", 999, 4);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "iPhone 8", "Cell Phones", 699, 8);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Lightning Cable", "Cell Phones", 20, 50);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Micro USB Cable", "Cell Phones", 5, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Samsung Galaxy 8", "Cell Phones", 599, 30);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Bose Headphones", "Audio", 299, 12);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES (NULL, "Klipsch ProMedia 2.1", "Audio", 159, 15);
