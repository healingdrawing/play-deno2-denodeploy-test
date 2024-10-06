import {csrf, cors, BACKHOST, FRONTHOST, Hono, home} from "./deps.ts"


const app = new Hono()
app.use(csrf({ origin: [BACKHOST, FRONTHOST], }))
app.use(cors({ origin: [BACKHOST, FRONTHOST], }))

app.route('/', home)

// Deno.listen({ port:8000}) //todo: check later, itis not clear vs frontend
Deno.serve(app.fetch);
