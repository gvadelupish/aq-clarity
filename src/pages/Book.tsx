import { useState, FormEvent } from "react";
import FadeUp from "@/components/FadeUp";
import { Helmet } from "react-helmet-async";

const Book = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Book a Session — AQ Coaching</title>
        <meta name="description" content="Book a complimentary 30-minute discovery call with Maria Belitskaya, ICF Certified Executive Coach." />
        <meta property="og:title" content="Book a Session — AQ Coaching" />
        <meta property="og:url" content="https://aqcoach.com/book" />
        <link rel="canonical" href="https://aqcoach.com/book" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://aqcoach.com/" },
            { "@type": "ListItem", position: 2, name: "Book a Session", item: "https://aqcoach.com/book" },
          ],
        })}</script>
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-2xl text-center">
          <FadeUp>
            <h1 className="font-display mb-6">Book a <em className="gold-italic">session</em></h1>
            <p className="text-warm-grey mb-10">Get in touch with a short description of your request and we will book a 30 min complimentary discovery call.</p>
          </FadeUp>

          <FadeUp delay={0.15}>
            {submitted ? (
              <p className="text-foreground font-display text-xl">Thank you! We'll be in touch soon.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm text-warm-grey mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-input border border-surface-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-warm-grey mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-input border border-surface-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-warm-grey mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-input border border-surface-border px-4 py-3 text-foreground text-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-primary-foreground uppercase tracking-widest text-xs font-body font-medium px-10 py-4 hover:bg-gold-hover transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </section>
    </>
  );
};

export default Book;
