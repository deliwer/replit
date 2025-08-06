import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export const users = pgTable("users", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
});
export const tradeInApplications = pgTable("trade_in_applications", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    email: text("email"),
    iphoneModel: text("iphone_model").notNull(),
    storage: text("storage"),
    condition: text("condition").notNull(),
    tradeOption: text("trade_option").notNull(),
    pickupLocation: text("pickup_location").notNull(),
    comments: text("comments"),
    estimatedValue: integer("estimated_value"),
    status: text("status").notNull().default("pending"),
    createdAt: timestamp("created_at").defaultNow(),
});
export const deviceValuations = pgTable("device_valuations", {
    id: varchar("id").primaryKey().default(sql `gen_random_uuid()`),
    model: text("model").notNull(),
    storage: text("storage").notNull(),
    condition: text("condition").notNull(),
    marketValue: integer("market_value").notNull(),
    tradeValue: integer("trade_value").notNull(),
    bonusValue: integer("bonus_value").notNull(),
    totalValue: integer("total_value").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});
export const insertUserSchema = createInsertSchema(users).pick({
    username: true,
    password: true,
});
export const insertTradeInApplicationSchema = createInsertSchema(tradeInApplications).omit({
    id: true,
    createdAt: true,
});
export const insertDeviceValuationSchema = createInsertSchema(deviceValuations).omit({
    id: true,
    createdAt: true,
});
