import { connection } from "../config/database.js";

// types 
export interface Company {
  id: number;
  name: string;
  apiKey?: string;
}

// querys
export async function findByApiKey(apiKey: string) {
  const result = await connection.query<Company, [string]>(
    `SELECT * FROM companies WHERE "apiKey"=$1`,
    [apiKey]
  );

  return result.rows[0];
}
