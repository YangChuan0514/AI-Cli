import { getPool } from '../utils/db'

export default defineEventHandler(async () => {
  const pool = getPool()
  if (!pool) {
    throw createError({ statusCode: 501, statusMessage: 'DB not configured' })
  }
  const [rows] = await pool.query('SELECT 1 AS ok')
  return { rows }
})
