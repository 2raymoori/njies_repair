import {db} from "@/db"
import {Query} from "pg";
import {customersTable} from "@/db/schema";
import {eq} from "drizzle-orm";

export async function getCustomers (id: number) {
    const customer = await db.select()
        .from(customersTable)
        .where(eq(customersTable.id,id))

    return customer[0];
}


