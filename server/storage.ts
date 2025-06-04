import { z } from "zod";
import { insertBookingSchema, insertTestimonialSchema } from "../shared/schema";
import { users, bookings, testimonials, type User, type InsertUser, type Booking, type InsertBooking, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, any>;
  private bookings: Map<number, any>;
  private testimonials: Map<number, any>;
  private currentUserId: number;
  private currentBookingId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.testimonials = new Map();
    this.currentUserId = 1;
    this.currentBookingId = 1;
    this.currentTestimonialId = 1;
    this.seedTestimonials();
  }

  private seedTestimonials() {
    const sampleTestimonials = [
      {
        name: "Marcus Johnson",
        initials: "MJ",
        title: "Regular Client",
        content: "Best barbershop in town! The attention to detail and professionalism is unmatched. Always leave feeling fresh and confident.",
        rating: 5
      },
      {
        name: "David Rodriguez",
        initials: "DR",
        title: "Business Professional",
        content: "Fresh Line Barbers transformed my look completely. The skills and expertise here are top-tier. Highly recommend!",
        rating: 5
      },
      {
        name: "Tyler Chen",
        initials: "TC",
        title: "Local Entrepreneur",
        content: "Exceptional service every time. The environment is clean, professional, and the results speak for themselves.",
        rating: 5
      }
    ];
    sampleTestimonials.forEach((testimonial) => {
      this.createTestimonial(testimonial);
    });
  }

  async getUser(id: number) {
    return this.users.get(id);
  }

  async getUserByUsername(username: string) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: { username: string; password: string }) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBooking(insertBooking: z.infer<typeof insertBookingSchema>) {
    const id = this.currentBookingId++;
    const booking = {
      ...insertBooking,
      id,
      notes: insertBooking.notes || null,
      createdAt: new Date()
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookings() {
    return Array.from(this.bookings.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBooking(id: number) {
    return this.bookings.get(id);
  }

  async getTestimonials() {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: z.infer<typeof insertTestimonialSchema>) {
    const id = this.currentTestimonialId++;
    const testimonial = {
      ...insertTestimonial,
      id,
      rating: insertTestimonial.rating || 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
