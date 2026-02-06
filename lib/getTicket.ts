import { ticketTable} from "@/db/schema";
import {db} from "@/db";
import {eq} from "drizzle-orm";

export const getTicket = async(id:number)=>{
    const ticket = await db.select()
        .from(ticketTable)
        .where(eq(ticketTable.id,id))
    return ticket[0];
}

