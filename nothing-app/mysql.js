const mysql = require('mysql');

// Connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
  port: 3306,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

// Perform MySQL operations...

// Close the MySQL connection
connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL connection:', err);
  }
  console.log('MySQL connection closed.');
});
