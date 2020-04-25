
// Libraries
const knex = require('knex')
const connectionSettings = require('./knexfile');

// Creating database connection
const database = knex(connectionSettings);


async function getAllUsers() {
  return await database
    .table('users')
    .select();

}


async function createNewUser(name, pswd) {
  return await database
    .table('users')
    .insert({ name, pswd });
}


async function doExample() {
  const newUser = await createNewUser('phillip', 'pshmoney'); 
  const users = await getAllUsers();

  console.log({ users });

  // Because the database is still connected, the program won't
  // exit unless we tell it to explicitly.
  process.exit();
}

doExample();

