import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const cards=sqliteTable('cards',{token:text('token').primaryKey(),stamps:integer('stamps').notNull().default(0),cycle:integer('cycle').notNull().default(1),version:integer('version').notNull().default(0),created:text('created').notNull()});
export const events=sqliteTable('events',{id:text('id').primaryKey(),card:text('card').notNull().references(()=>cards.token),cycle:integer('cycle').notNull(),kind:text('kind').notNull(),reward:text('reward'),receipt:text('receipt').unique(),actor:text('actor').notNull(),created:text('created').notNull()},t=>[uniqueIndex('one_redemption_per_cycle').on(t.card,t.cycle).where(sql`${t.kind} = 'redeem'`)]);
export const staff=sqliteTable('staff',{email:text('email').primaryKey(),userId:text('user_id').unique(),created:text('created').notNull()});
