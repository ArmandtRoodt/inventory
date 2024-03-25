const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./bicycleShop.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS inventory (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      price REAL NOT NULL
    )`);
    db.run(`INSERT INTO inventory (name, quantity, price) VALUES ('Mountain Bike', 10, 299.99)`);
});

db.close();