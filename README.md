# About A starting place for working with a SQL database via NodeJS.  # Structure * `knexfile.js` contains data about where our database is, and how to connect to it.  * `migrations/` contains files that tell knex how to create and destroy our database schema.  * `example.js` is an example of how to use knex to connect and query a database.

# Usage
* Install Dependencies: `npm install`
* Define Schema: `npm run migrate`
* Destroy Schema: `npm run rollback`
* Run Example: `npm run start`
* Create migration for new table: `npx knex migrate:make YOUR_TABLE_NAME`

