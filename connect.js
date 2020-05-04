
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
        encrypt: true,
        trustServerCertificate: true,
        requestTimeout: 5000
    }
    
    
};

const connection = new Connection(config)

connection.connect(
    function(err) {
    if (err) {
        console.log("DB unavailable, Error:");
        throw err;
    }
    else
    {
        console.log("connected");
        createDatabase();
        // closeConnection();
    }
});

function createDatabase() {
    console.log("he's trying")

    const request = new Request(
        'CREATE TABLE creators( creator VARCHAR(255) NOT NULL, hashedpass VARCHAR(255) NOT NULL, PRIMARY KEY (creator));',
        (err, rowCount) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('Created Table')
            }
        }
    );
    connection.execSql(request);
    // return process.exit(0);

}





