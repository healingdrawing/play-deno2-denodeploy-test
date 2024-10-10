import {Hono, csrf, cors, home} from "./deps.ts"

const app = new Hono()
app.use(csrf({ origin: ['http://localhost:8000'], }))
app.use(cors({ origin: ['http://localhost:3000'], }))

app.route('/', home)

// Deno.listen({ port:8000}) //todo: check later, itis not clear vs frontend
Deno.serve(app.fetch);
