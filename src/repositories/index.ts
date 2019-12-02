import { Pool } from 'pg';

export const connectionPool: Pool = new Pool({
    user: 'postgres',
    host: 'justinm9six.coyddtgg9nce.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'Password!1',
    port: 5432,
    max: 5,
});