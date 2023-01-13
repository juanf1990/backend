import pg from "pg";

const connectionString = process.env.POSTGRES_CONNECTION_URL;

if (undefined === connectionString) {
  throw new Error("POSTGRES_CONNECTION_URL is not defined");
}

export const query = new pg.Pool({
  connectionString: connectionString,
});

// const { Pool } = pkg
// export const pool = new Pool({
// connectionString: process.env.POSTGRES_CONNECTION_URL })

// export default function query (text, params) { return pool.query(text, params)
// }
