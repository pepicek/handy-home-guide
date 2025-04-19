
import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  serviceType: z.string().min(1, {
    message: "Please select a service type.",
  }),
  date: z.date({
    required_error: "Please select a date for your consultation.",
  }),
  timeSlot: z.string().min(1, {
    message: "Please select a time slot.",
  }),
  message: z.string().optional(),
});

export type ConsultationFormData = z.infer<typeof formSchema>;

export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const serviceTypes = [
  "Plumbing",
  "Electrical",
  "HVAC",
  "Landscaping",
  "Cleaning",
  "Handyman",
  "Painting",
  "Renovation",
  "Roofing",
  "Other",
];
