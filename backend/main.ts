import {Hono, csrf, cors, home, BACKHOST, FRONTHOST} from "./deps.ts"

const app = new Hono()
app.use(csrf({ origin: [BACKHOST], }))
app.use(cors({ origin: [FRONTHOST], }))

app.route('/', home)

// Deno.listen({ port:8000}) //todo: check later, itis not clear vs frontend
Deno.serve(app.fetch);
