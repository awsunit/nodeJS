// // const mysql = require('mysql');

// var config = 
// {
//     host: 'learningrph.database.windows.net',
//     user: 'mesa',
//     password: 'AntiMamaSlapping88',
//     database: 'Hound',
//     // port: 3306,
//     // ssl: true
// };

// const conn = new mysql.createConnection(config);

// conn.connect(
//     function(err) {
//         if (err) {
//             console.log("DB unavailable, Error:");
//             throw err;
//         }
//         else
//         {
//             console.log("connected");
//             queryDatabase();
//         }
//     }
// );

// function queryDatabase(){
//     conn.query('DROP TABLE IF EXISTS inventory;', function (err, results, fields) { 
//          if (err) throw err; 
//          console.log('Dropped inventory table if existed.');
//      })
//       conn.query('CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);', 
//            function (err, results, fields) {
//                if (err) throw err;
//          console.log('Created inventory table.');
//      })
//     conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['banana', 150], 
//            function (err, results, fields) {
//                if (err) throw err;
//          else console.log('Inserted ' + results.affectedRows + ' row(s).');
//         })
//     conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['orange', 154], 
//            function (err, results, fields) {
//                if (err) throw err;
//          console.log('Inserted ' + results.affectedRows + ' row(s).');
//         })
//     conn.query('INSERT INTO inventory (name, quantity) VALUES (?, ?);', ['apple', 100], 
//      function (err, results, fields) {
//                if (err) throw err;
//          console.log('Inserted ' + results.affectedRows + ' row(s).');
//         })
//     conn.end(function (err) { 
//      if (err) throw err;
//      else  console.log('Done.') 
//      });
// };
const { Connection, Request } = require("tedious")

const config = {
    authentication: {
        options: {
            userName: "mesa",
            password: "AntiMamaSlapping88"
        },
        type: "default"
    },
    server: "learningrph.database.windows.net",
    options: {
        database: "Hound",
        encrypt: true
    }
};

const connection = new Connection(config)

connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        createDatabase();
    }
});

function createDatabase() {
    console.log("he's trying")
}




