import FadeUp from "@/components/FadeUp";
import mariaBw from "@/assets/maria-bw.webp";
import serviceIndividuals from "@/assets/service-individuals.jpg";
import serviceOrganisations from "@/assets/service-organisations.jpg";
import serviceEntrepreneurs from "@/assets/service-entrepreneurs.jpg";
import serviceExpats from "@/assets/service-expats.jpg";
import serviceEq from "@/assets/service-eq.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";
import badgeIcf from "@/assets/badge-icf-acc.webp";
import badgeCec from "@/assets/badge-cec.webp";
import badgeEqi from "@/assets/badge-eqi.png";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  { title: "Executive & Leadership Coaching", image: serviceOrganisations, desc: "1:1 coaching, leadership programmes, and team coaching for organisations developing modern leaders and building future-focused company culture. Supports high-stakes communication, difficult conversations, stakeholder management, decision-making under pressure, and leading across cross-cultural environments. EQ-i 2.0 used where relevant." },
  { title: "Career & Personal Coaching", image: serviceIndividuals, desc: "Coaching for individuals at a career crossroads or experiencing lack of clarity, misalignment, or burnout. Clarify priorities, identify obstacles, and turn insight into a clear direction with concrete next steps. Typically structured over 10 sessions across 6–8 months." },
  { title: "Mentoring", image: serviceEntrepreneurs, desc: "Direct, experience-based input based on 19 years of leadership with Levi's, The North Face, Quiksilver, Nike, and New Era. Focus on managing creative teams, building brands, growing a creative business, and navigating a career in the creative industry." },
  { title: "Strategy Session", image: serviceStrategy, desc: "A focused 2-hour working session to address one specific challenge or define direction. For companies: annual alignment workshops. For individuals: stepping back to structure thinking across personal or professional directions. You leave with clarity and a concrete action plan." },
  { title: "EQ-i 2.0 / EQ 360", image: serviceEq, desc: "Psychometric assessment measuring 15 emotional intelligence competencies: stress management, decision-making, communication, and relationships. Includes detailed report and debrief to interpret results in your context. Gain clarity on strengths and zones of growth." },
];

const testimonials = [
  { quote: "The EQ-i debrief helped me see certain things in a new light and gave me insights on my communication and leadership style. Coaching with Maria really helped me with both strategic thinking on organisational change and operational business challenges, but most importantly gave me a space to learn about myself and reflect.", name: "Ignacio", title: "General Manager, Pharmaceutical" },
  { quote: "I'm glad I chose Maria for my Leadership Development Program. She helped me gain confidence, work on my communication style across cultures and stakeholder management. Now when I have a complex situation, I think: 'What would Maria ask me?'", name: "Mei Lin", title: "Executive Director, Consumer Insights" },
  { quote: "Transitioning from a regional to a global role brought a unique set of challenges, especially in understanding and navigating interpersonal dynamics across different cultures. Maria supported me through these complexities. Her coaching not only helped me to fine-tune my interpersonal skills but also boosted my confidence and gave me a clear framework for planning and achieving my goals.", name: "Alice", title: "Global Digital Marketing, FMCG" },
  { quote: "Thank you so much for helping me reframe my priorities. While answering some of your questions, I caught myself thinking in new ways and exploring unfamiliar approaches. You helped shift my focus away from typical overachievement and toward actually choosing myself.", name: "Kate", title: "Marketing Director Fashion & Beauty, Influencer" },
];

const Index = () => (
  <>
    <Helmet>
      <title>AQ Coaching — Executive Coaching for Modern Leaders</title>
      <meta name="description" content="Strategic, results-driven coaching for founders, executives, and changemakers. Elevate your leadership with clarity, confidence, and emotional intelligence." />
      <meta property="og:title" content="AQ Coaching — Executive Coaching for Modern Leaders" />
      <meta property="og:description" content="Strategic coaching for founders, executives, and changemakers." />
      <meta property="og:url" content="https://aqcoach.com" />
      <link rel="canonical" href="https://aqcoach.com" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "AQ Coaching",
        url: "https://aqcoach.com",
        description: "Executive coaching for modern leaders",
        address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
        founder: { "@type": "Person", name: "Maria Belitskaya" },
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="section-padding flex items-center justify-center text-center min-h-[80vh]">
      <div className="container-narrow max-w-3xl">
        <FadeUp>
          <h1 className="font-display">
            Coaching For <em className="gold-italic">Modern</em> Leaders
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p className="mt-8 text-warm-grey max-w-2xl mx-auto leading-relaxed">
            Strategic, results-driven coaching for founders, executives, and changemakers. Elevate your leadership with clarity, confidence, and emotional intelligence. Unlock new perspectives that accelerate your growth.
          </p>
        </FadeUp>
      </div>
    </section>


    {/* Intro */}
    <section className="section-padding">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
        <FadeUp>
          <h2 className="font-display">Hi, I am <em className="gold-italic">Maria</em></h2>
          <p className="mt-8 text-warm-grey leading-relaxed">
            I'm an Executive Coach ICF. I help leaders elevate how they think, communicate, and perform — so they can drive real results. My background is in leading Marketing for global brands like Levi's, and The North Face — shaping strategy, teams, and campaigns across the regions.
          </p>
          <p className="mt-4 text-warm-grey leading-relaxed">
            As a seasoned expat, I know what it's like to lead through change and navigate different cultures. That experience, combined with corporate leadership and coaching, inspired me to create AQ — a space where modern leaders grow through clarity, emotional intelligence, and self-awareness.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <img
            src={mariaBw}
            alt="Maria Belitskaya, Executive Coach, in black and white portrait wearing pinstripe blazer"
            className="w-full object-cover aspect-[3/4]"
          />
        </FadeUp>
      </div>
    </section>


    {/* Feeling stuck */}
    <section className="section-padding">
      <div className="container-narrow max-w-[700px] mx-auto text-center">
        <FadeUp>
          <h2 className="font-display mb-8">Feeling stuck?</h2>
          <p className="text-warm-grey leading-relaxed">
            Not sure how to move forward in your career, define the North Star for your business, navigate tough conversations, or manage diverse team dynamics — all while staying productive and balancing life and work?
          </p>
          <p className="mt-4 text-warm-grey leading-relaxed">
            Need a thinking partner who's been there? You're in the right place. Coaching helps you build the clarity to make smart decisions, the emotional intelligence to lead people, and the adaptability to grow with your business. It brings you to the next level. Faster.
          </p>
          
          <a
            href="https://aqcoachcom.as.me/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-gold text-primary-foreground uppercase tracking-widest text-xs font-body font-medium px-10 py-4 hover:bg-gold-hover transition-colors"
          >
            Book discovery call
          </a>
        </FadeUp>
      </div>
    </section>


    {/* Services */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="font-display text-center mb-16">Services</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <div className="relative aspect-[3/4] overflow-hidden group cursor-default">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-foreground text-xl mb-2">{s.title}</h3>
                  <p className="text-warm-grey text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>


    {/* Testimonials */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="font-display text-center mb-16">What clients say</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="bg-surface border border-surface-border p-8 h-full flex flex-col">
                <p className="font-display italic text-foreground leading-relaxed flex-1">"{t.quote}"</p>
                <p className="mt-6 text-warm-grey text-sm font-body">
                  — {t.name}, <span className="text-warm-grey/70">{t.title}</span>
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>


    {/* Certification Badges */}
    <section className="section-padding">
      <div className="container-narrow">
        <FadeUp>
          <h3 className="text-center text-warm-grey text-sm uppercase tracking-widest mb-12">Certified by</h3>
          <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
            <img src={badgeIcf} alt="ICF Associate Certified Coach badge" loading="lazy" className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src={badgeCec} alt="Center for Executive Coaching seal" loading="lazy" className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            <img src={badgeEqi} alt="EQ-i 2.0 Certified badge" loading="lazy" className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </FadeUp>
      </div>
    </section>


    {/* CTA */}
    <section className="section-padding text-center">
      <div className="container-narrow">
        <FadeUp>
          <h2 className="font-display mb-6">Ready to grow?</h2>
          <p className="text-warm-grey mb-10 max-w-lg mx-auto">Take the first step. Book a complimentary discovery call and let's explore how coaching can help you move forward.</p>
          <Link
            to="/book"
            className="inline-block bg-gold text-primary-foreground uppercase tracking-widest text-xs font-body font-medium px-10 py-4 hover:bg-gold-hover transition-colors"
          >
            Book a session
          </Link>
        </FadeUp>
      </div>
    </section>
  </>
);

export default Index;
