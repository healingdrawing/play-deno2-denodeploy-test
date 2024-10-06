import { Hono } from "../../deps.ts"
import data from "../../data.json" with { type: "json" };
console.log(data)

const app = new Hono()

app.get('/api/dinosaurs', async (c) => {
  console.log("incoming call from frontend to list")
  return await c.json(data)
})

app.get('/api/dinosaurs/:dinosaur', async (c) => {
  console.log("incoming call from frontend to list item")
  const dino = c.req.param('dinosaur') 
  const dinosaur = data.find((item) =>
    item.name.toLowerCase() === dino.toLowerCase()
  );
  return await c.json(dinosaur)
})

export default app
