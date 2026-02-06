import { integer, pgTable, varchar,serial, boolean, timestamp, text  } from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";


export const customersTable = pgTable("customers",{
    id: serial("id").primaryKey(),
    firstName: varchar("firstName").notNull(),
    lastName: varchar("lastName").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2"),
    city: varchar("city").notNull(),
    state: varchar("state",{length:2}).notNull(),
    zip: varchar("zip",{length:10}).notNull(),
    notes: text("notes"),
    active: boolean("active").notNull().default(true),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow().$onUpdate(()=>new Date())
})

export const ticketTable = pgTable("tickets",{
    id: serial("id").primaryKey(),
    customerId: integer().notNull().references(()=>customersTable.id),
    description: text("description").notNull() ,
    title: varchar("title").notNull(),
    completed: boolean("completed").notNull().default(false),
    tech: varchar("tech").notNull().default("new-ticket@example.com"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(()=>new Date())
})

export const customersRelations = relations(customersTable,
    ({many})=>({ticketTable:many(ticketTable)})
)
export const ticketsRelations = relations(ticketTable,
    ({one})=>({
        customersTable: one(customersTable,{
        fields: [ticketTable.customerId], references:[customersTable.id]
        }
        )} ))