// Settings that tell knex how to connect
// to the database

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  migrations: {
    directory: './migrations',
  },
  useNullAsDefault: true,
};
