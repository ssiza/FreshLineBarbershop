import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const services = [
  "Haircut - $25",
  "Beard Trim - $15", 
  "Line-up - $10",
  "Full Grooming Package - $40"
];

export default function BookingSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      notes: ""
    }
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/bookings"] });
      toast({
        title: "Booking Confirmed!",
        description: "We'll contact you shortly to confirm your appointment details.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertBooking) => {
    createBookingMutation.mutate(data);
  };

  return (
    <section id="booking" className="py-24 px-6 bg-background-custom">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Book Your <span className="text-secondary-custom">Appointment</span>
          </h2>
          <p className="text-xl text-accent-custom max-w-2xl mx-auto">
            Schedule your next cut with Fresh Line Barbers. Choose your preferred service and time.
          </p>
        </div>

        <div className="bg-primary-custom p-8 md:p-12 rounded-2xl border border-neutral-custom/20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-custom font-poppins font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Enter your full name"
                          className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-custom font-poppins font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-custom font-poppins font-medium">Preferred Date</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="date"
                          className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent-custom font-poppins font-medium">Preferred Time</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom">
                            <SelectValue placeholder="Select time..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-accent-custom font-poppins font-medium">Service Selection</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom">
                          <SelectValue placeholder="Choose your service..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-accent-custom font-poppins font-medium">Special Requests (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        placeholder="Any specific requests or preferences..."
                        className="bg-background-custom border-neutral-custom/30 text-white focus:border-secondary-custom h-24 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={createBookingMutation.isPending}
                  className="bg-secondary-custom hover:bg-yellow-500 text-primary-custom font-poppins font-semibold py-4 px-12 text-lg rounded-lg transition-all duration-300 gold-glow hover:shadow-xl"
                >
                  {createBookingMutation.isPending ? "Booking..." : "Confirm Booking"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
