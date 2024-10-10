import { loadSync, dprint } from "./deps.ts";
// loadSync({ export: true })
console.log("loadSync",loadSync({ export: true, envPath: "../.env" }))

/** back-end host. In dev mode placed in `.env` file */
export const BACKHOST:string = get_env_variable("BACKHOST", true)
/** front-end host. In dev mode placed in `.env` file */
export const FRONTHOST:string = get_env_variable("FRONTHOST", true)

/**
 * Checks if an environment variable exists and logs it. If it does not exist
 * or is empty, throws error.
 * @param name The name of the environment variable to check.
 * @param check_url If true, checks if the value of the environment variable is
 * a valid url. If it is not, throws error.
 * @returns The value of the environment variable.
 */
export function get_env_variable(name:string, check_url:boolean = false) {
  const raw = Deno.env.get(name)
  if (raw === undefined || raw === ""){
    console.log(dprint("ENV ERROR", `${name} is undefined`))
    throw new Error(`ENV ERROR: ${name} is undefined`)
  } 
  console.log(dprint(name, raw))
  
  try{
    if(check_url){ new URL(raw) }
    return raw
  }catch{
    console.log(dprint("ENV ERROR", `${name} url is incorrect`))
    throw new Error(`ENV ERROR: ${name} url is incorrect`)
  }
}
