import { type User, type InsertUser, type TradeInApplication, type InsertTradeInApplication, type DeviceValuation, type InsertDeviceValuation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createTradeInApplication(application: InsertTradeInApplication): Promise<TradeInApplication>;
  getTradeInApplications(): Promise<TradeInApplication[]>;
  getDeviceValuation(model: string, storage: string, condition: string): Promise<DeviceValuation | undefined>;
  createDeviceValuation(valuation: InsertDeviceValuation): Promise<DeviceValuation>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private tradeInApplications: Map<string, TradeInApplication>;
  private deviceValuations: Map<string, DeviceValuation>;

  constructor() {
    this.users = new Map();
    this.tradeInApplications = new Map();
    this.deviceValuations = new Map();
    
    // Initialize with some device valuations
    this.initializeDeviceValuations();
  }

  private initializeDeviceValuations() {
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
      const valuation: DeviceValuation = {
        id,
        ...val,
        createdAt: new Date(),
      };
      const key = `${val.model}-${val.storage}-${val.condition}`;
      this.deviceValuations.set(key, valuation);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createTradeInApplication(insertApplication: InsertTradeInApplication): Promise<TradeInApplication> {
    const id = randomUUID();
    const application: TradeInApplication = {
      ...insertApplication,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.tradeInApplications.set(id, application);
    return application;
  }

  async getTradeInApplications(): Promise<TradeInApplication[]> {
    return Array.from(this.tradeInApplications.values());
  }

  async getDeviceValuation(model: string, storage: string, condition: string): Promise<DeviceValuation | undefined> {
    const key = `${model}-${storage}-${condition}`;
    return this.deviceValuations.get(key);
  }

  async createDeviceValuation(insertValuation: InsertDeviceValuation): Promise<DeviceValuation> {
    const id = randomUUID();
    const valuation: DeviceValuation = {
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
