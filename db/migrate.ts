import {db} from "@/db/index";
import {migrate} from "drizzle-orm/neon-http/migrator"
const main =async ()=>{
    try {
        await migrate(db,{
            migrationsFolder: "./db/migrations"
        })
        console.log("migrated successfully.")
    }catch (e) {
        console.log(e)
        process.exit(1)
    }
}

main()