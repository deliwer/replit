import { randomUUID } from "crypto";
export class MemStorage {
    users;
    tradeInApplications;
    deviceValuations;
    constructor() {
        this.users = new Map();
        this.tradeInApplications = new Map();
        this.deviceValuations = new Map();
        // Initialize with some device valuations
        this.initializeDeviceValuations();
    }
    initializeDeviceValuations() {
        const valuations = [
            { model: "iPhone 15 Pro Max", storage: "256GB", condition: "excellent", marketValue: 4800, tradeValue: 2400, bonusValue: 960, totalValue: 3360 },
            { model: "iPhone 15 Pro Max", storage: "256GB", condition: "good", marketValue: 4200, tradeValue: 2100, bonusValue: 840, totalValue: 2940 },
            { model: "iPhone 15 Pro", storage: "256GB", condition: "excellent", marketValue: 4200, tradeValue: 2100, bonusValue: 840, totalValue: 2940 },
            { model: "iPhone 15 Pro", storage: "256GB", condition: "good", marketValue: 3600, tradeValue: 1800, bonusValue: 720, totalValue: 2520 },
            { model: "iPhone 15", storage: "128GB", condition: "excellent", marketValue: 3000, tradeValue: 1500, bonusValue: 600, totalValue: 2100 },
            { model: "iPhone 15", storage: "128GB", condition: "good", marketValue: 2400, tradeValue: 1200, bonusValue: 480, totalValue: 1680 },
            { model: "iPhone 14 Pro Max", storage: "256GB", condition: "excellent", marketValue: 3600, tradeValue: 1800, bonusValue: 720, totalValue: 2520 },
            { model: "iPhone 14 Pro Max", storage: "256GB", condition: "good", marketValue: 3000, tradeValue: 1500, bonusValue: 600, totalValue: 2100 },
            { model: "iPhone 14 Pro", storage: "256GB", condition: "excellent", marketValue: 3000, tradeValue: 1500, bonusValue: 600, totalValue: 2100 },
            { model: "iPhone 14 Pro", storage: "256GB", condition: "good", marketValue: 2400, tradeValue: 1200, bonusValue: 480, totalValue: 1680 },
        ];
        valuations.forEach(val => {
            const id = randomUUID();
            const valuation = {
                id,
                ...val,
                createdAt: new Date(),
            };
            const key = `${val.model}-${val.storage}-${val.condition}`;
            this.deviceValuations.set(key, valuation);
        });
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
    }
    async createUser(insertUser) {
        const id = randomUUID();
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    async createTradeInApplication(insertApplication) {
        const id = randomUUID();
        const application = {
            ...insertApplication,
            id,
            status: "pending",
            createdAt: new Date(),
            email: insertApplication.email ?? null,
            storage: insertApplication.storage ?? null,
            comments: insertApplication.comments ?? null,
            estimatedValue: insertApplication.estimatedValue ?? null,
        };
        this.tradeInApplications.set(id, application);
        return application;
    }
    async getTradeInApplications() {
        return Array.from(this.tradeInApplications.values());
    }
    async getDeviceValuation(model, storage, condition) {
        const key = `${model}-${storage}-${condition}`;
        return this.deviceValuations.get(key);
    }
    async createDeviceValuation(insertValuation) {
        const id = randomUUID();
        const valuation = {
            ...insertValuation,
            id,
            createdAt: new Date(),
        };
        const key = `${insertValuation.model}-${insertValuation.storage}-${insertValuation.condition}`;
        this.deviceValuations.set(key, valuation);
        return valuation;
    }
}
export const storage = new MemStorage();
