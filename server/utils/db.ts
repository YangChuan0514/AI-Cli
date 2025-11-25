import { createPool, Pool } from 'mysql2/promise'

function hasEnv() {
  return (
    !!process.env.DB_HOST &&
    !!process.env.DB_USER &&
    !!process.env.DB_PASSWORD &&
    !!process.env.DB_NAME
  )
}

export function getPool(): Pool | null {
  if (!hasEnv()) return null
  return createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
}
