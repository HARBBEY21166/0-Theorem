
import ContactDetails from '@/components/sections/contact-details';
import ContactForm from '@/components/sections/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: "Let's build the future, together. Get in touch with Zero Theorem to discuss your project idea and unlock its potential.",
};

export default function ContactPage() {
  return (
    <div className="contact-page-gradient">
      <div className="container mx-auto px-4 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
