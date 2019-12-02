import { Pool } from 'pg';

export const connectionPool: Pool = new Pool({
    user: process.env['postgres'],
    host: process.env['justinm9six.coyddtgg9nce.us-east-1.rds.amazonaws.com'],
    database: process.env['postgres'],
    password: process.env['Password!1'],
    port: 5432,
    max: 5,
});