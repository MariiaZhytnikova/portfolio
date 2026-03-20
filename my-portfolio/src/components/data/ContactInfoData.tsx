
// src/components/data/Contacts.tsx
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfo {
  icon: React.ElementType;
  text: string;
  href: string;
  color?: string; // <-- allow any string
}
export const contactInfo: ContactInfo[] = [
  { icon: Mail, text: "allusio@gmail.com", href: "mailto:allusio@gmail.com", color: "purple" },
  { icon: Phone, text: "+358 465 760 200", href: "tel:+358465760200", color: "orange" },
  { icon: MapPin, text: "Helsinki, Finland", href: "#", color: "purple" },
];