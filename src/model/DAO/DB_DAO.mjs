//const sqlite3 = require('sqlite3').verbose();
import sqlite3 from 'sqlite3';


export class DB_DAO {

    constructor() {
        const filepath = "pomodoreDB";
        this.db = new sqlite3.Database(filepath, (error) => {
            if (error) {
              return console.error(error.message);
            }
          });
    }

    createTable(query) {
        this.db.run(query, (error) => {
            if (error) {
                console.error('Error creating table:', error.message);
            } else {
                console.log('Table created successfully');
            }
        });
        this.closeDatabase();
    }

    insert(query, ...values) {
        this.db.run(query, values, (error) => {
            if (error) {
                console.error('Error inserting :', error.message);
            } else {
                console.log('User inserted successfully');
            }
        });
        this.closeDatabase();
    }

    getAll(query, callback) {
        this.db.all(query, (error, rows) => {
            if (error) {
                console.error('Error retrieving:', error.message);
            } else {
                const allData = rows;
                callback(allData);
            }
        });
        this.closeDatabase();
    }

    getByID(query, callback) {
        this.db.all(query, (error, rows) => {
            if (error) {
                console.error('Error retrieving:', error.message);
            } else {
                callback(rows);
            }
        });
        this.closeDatabase();
    }

    update(query, ...data) {
        this.db.run(query, data,  (error) => {
            if (error) {
                console.error('Error updating:', error.message);
            } else {
                console.log('User updated successfully');
            }
        });
        this.closeDatabase();
    }

    delete(query, id) {
        this.db.run(query, [id], (error) => {
            if (error) {
                console.error('Error deleting :', error.message);
            } else {
                console.log('Deleted successfully');
            }
        });
        this.closeDatabase();
    }

    closeDatabase() {
        this.db.close((error) => {
            if (error) {
                console.error('Error closing database:', error.message);
            } else {
                console.log('Database closed successfully');
            }
        });
    }
}
