import ContactDetails from '@/components/sections/contact-details';
import ContactForm from '@/components/sections/contact-form';

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
