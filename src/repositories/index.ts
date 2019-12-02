import { Pool } from 'pg';

export const connectionPool: Pool = new Pool({
    user: process.env['DAIRYLAND_USERNAME'],
    host: process.env['DAIRYLAND_HOST'],
    database: process.env['DAIRYLAND_DATABASE'],
    password: process.env['DAIRYLAND_PASSWORD'],
    port: 5432,
    max: 5,
});