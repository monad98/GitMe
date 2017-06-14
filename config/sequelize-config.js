module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "pool": {
      "maxConnections": 5,
      "minConnections": 1,
      "maxIdleTime": 10000
    }
  },
  "test": {
    "username": "monad",
    "password": "9A?*&?nYPs",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "pool": {
      "maxConnections": 5,
      "minConnections": 1,
      "maxIdleTime": 10000
    }
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql",
    "pool": {
      "maxConnections": 5,
      "minConnections": 1,
      "maxIdleTime": 10000
    }
  }
}