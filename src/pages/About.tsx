import FadeUp from "@/components/FadeUp";
import mariaColor from "@/assets/maria-color.webp";
import { Helmet } from "react-helmet-async";

const About = () => (
  <>
    <Helmet>
      <title>About Maria Belitskaya — AQ Coaching</title>
      <meta name="description" content="ICF ACC Certified Executive Coach with 20 years of corporate experience at Levi's, The North Face, and Nike. Based in Barcelona, working globally." />
      <meta property="og:title" content="About Maria Belitskaya — AQ Coaching" />
      <link rel="canonical" href="https://aqcoach.com/about" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Maria Belitskaya",
        jobTitle: "Executive Coach",
        url: "https://aqcoach.com/about",
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "ICF ACC" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Center for Executive Coaching" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "EQ-i 2.0 Certified" },
        ],
      })}</script>
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-4xl">
        <FadeUp>
          <h1 className="font-display text-center mb-16">About <em className="gold-italic">me</em></h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <img src={mariaPortrait} alt="Maria Belitskaya portrait" className="w-full aspect-[3/4] object-cover" />
            <img src={mariaPortrait} alt="Maria Belitskaya coaching session" className="w-full aspect-[3/4] object-cover object-top" style={{ filter: "brightness(0.9)" }} />
            <img src={mariaPortrait} alt="Maria Belitskaya speaking" className="w-full aspect-[3/4] object-cover" style={{ filter: "contrast(1.1)" }} />
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="space-y-6 text-warm-grey leading-relaxed">
            <p>Hi! I'm Maria, an <strong className="text-foreground font-normal">ICF ACC Certified Executive Coach</strong>.</p>
            <p>I work with leaders, entrepreneurs, and expats around the world, helping them strengthen their leadership, soft skills, and emotional intelligence. My clients are ambitious, open to new opportunities and global change, and seeking success, career growth, and balance in life.</p>
            <p>I bring nearly 20 years of international corporate experience in marketing and creative leadership across retail, sports, and fashion. As a Marketing Director at Levi's, I had the opportunity to manage a region of 32 markets and an amazing team of 10 people, which gave me valuable insights. Being part of The North Face Creative team EMEA taught me a lot about cross-regional collaboration between the continents. I worked with brands like Quiksilver, Nike, New Era.</p>
            <p>I lived and worked in 4 countries, so I've personally experienced what it feels like to arrive in a new country, start a new job, and adapt to a new culture.</p>
            <p>I first experienced the impact of coaching as a client — it helped me grow as a leader and navigate critical transitions with clarity and confidence. Today, I see that same transformation in my clients every day. Coaching empowers them to lead with confidence, grow in their roles, scale their businesses, improve communication, strengthen relationships, and boost team performance.</p>
            <p>I deliver the coaching in English and Russian. Based in Barcelona, working globally.</p>
          </div>
        </FadeUp>

        <div className="section-divider my-20" />

        <FadeUp>
          <h2 className="font-display text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {["ICF ACC Certified Coach", "Center for Executive Coaching (CEC)", "EQ-i 2.0 Certified"].map((cert) => (
              <div key={cert} className="bg-surface border border-surface-border p-8">
                <p className="text-foreground font-display text-lg">{cert}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="section-divider my-20" />

        <FadeUp>
          <h3 className="text-center text-warm-grey text-sm uppercase tracking-widest mb-8">Trusted by</h3>
          <div className="flex items-center justify-center gap-16 opacity-50">
            <span className="font-body text-xl tracking-wider text-warm-grey">Viatris</span>
            <span className="font-body text-xl tracking-wider text-warm-grey">CareerMinds</span>
          </div>
        </FadeUp>
      </div>
    </section>
  </>
);

export default About;
