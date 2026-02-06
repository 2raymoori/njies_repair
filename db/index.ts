 import {drizzle} from "drizzle-orm/neon-http"
 import {neon } from "@neondatabase/serverless";
import {config} from "dotenv"

 config({path: ".env.local"})
const db_url = process.env.DATABASE_URL!
 const sql = neon(db_url) //neon(process.env.DATABASE_URL!)
 const db = drizzle(sql,{logger:true})

 export {db}