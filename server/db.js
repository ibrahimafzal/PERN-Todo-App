const Pool = require("pg").Pool;

const pool = new Pool({
    user: "testuser",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: 'todo'
});


module.exports = pool;