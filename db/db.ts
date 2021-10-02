import { knex } from 'knex'
import { knexfile } from '../source/knexfile';


const db = knex(knexfile.development);
module.exports = db;
