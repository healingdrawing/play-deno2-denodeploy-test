import { Hono } from "../../deps.ts"

const app = new Hono()

app.get('/api/data', async (c) => {
  console.log("incoming call from frontend")
  return await c.json({ message: 'Hello from Hono!' })
})

export default app
