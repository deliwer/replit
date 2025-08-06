import { createServer } from "http";
import { storage } from "./storage.js";
import { insertTradeInApplicationSchema, insertDeviceValuationSchema } from "../shared/schema";
import { z } from "zod";
export async function registerRoutes(app) {
    // Get device valuation
    app.get("/api/device-valuations", async (req, res) => {
        try {
            const { model, storage: storageSize, condition } = req.query;
            if (!model || !storageSize || !condition) {
                return res.status(400).json({ message: "Model, storage, and condition are required" });
            }
            const valuation = await storage.getDeviceValuation(model, storageSize, condition);
            if (!valuation) {
                return res.status(404).json({ message: "Valuation not found for this device" });
            }
            res.json(valuation);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
    // Create device valuation
    app.post("/api/device-valuations", async (req, res) => {
        try {
            const validatedData = insertDeviceValuationSchema.parse(req.body);
            const valuation = await storage.createDeviceValuation(validatedData);
            res.status(201).json(valuation);
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: "Invalid data", errors: error.errors });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    });
    // Submit trade-in application
    app.post("/api/trade-applications", async (req, res) => {
        try {
            const validatedData = insertTradeInApplicationSchema.parse(req.body);
            const application = await storage.createTradeInApplication(validatedData);
            res.status(201).json(application);
        }
        catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(400).json({ message: "Invalid data", errors: error.errors });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    });
    // Get all trade-in applications
    app.get("/api/trade-applications", async (req, res) => {
        try {
            const applications = await storage.getTradeInApplications();
            res.json(applications);
        }
        catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    });
    const httpServer = createServer(app);
    return httpServer;
}
