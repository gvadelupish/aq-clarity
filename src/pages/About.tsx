import FadeUp from "@/components/FadeUp";
import mariaColor from "@/assets/maria-color.webp";
import certIcf from "@/assets/cert-icf.webp";
import certCec from "@/assets/cert-cec.webp";
import certEqi from "@/assets/cert-eqi.png";
import certLeading from "@/assets/cert-leading-groups.png";
import logoViatris from "@/assets/logo-viatris.png";
import logoCareerminds from "@/assets/logo-careerminds.png";
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
      <div className="container-narrow">
        <FadeUp>
          <h1 className="font-display text-center mb-16">About <em className="gold-italic">me</em></h1>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeUp delay={0.2}>
            <div className="space-y-6 text-warm-grey leading-relaxed">
              <p className="text-xl md:text-2xl text-foreground leading-snug">
                Hi! I'm Maria, an <em className="gold-italic">ICF ACC Certified Executive Coach</em>.
              </p>
              <p>I work with leaders, entrepreneurs, and expats around the world, helping them strengthen their leadership, soft skills, and emotional intelligence. My clients are ambitious, open to new opportunities and global change, and seeking success, career growth, and balance in life.</p>
              <p>I bring nearly 20 years of international corporate experience in marketing and creative leadership across retail, sports, and fashion. As a Marketing Director at Levi's, I had the opportunity to manage a region of 32 markets and an amazing team of 10 people, which gave me valuable insights. Being part of The North Face Creative team EMEA taught me a lot about cross-regional collaboration between the continents. I worked with brands like Quiksilver, Nike, New Era.</p>
              <p>I lived and worked in 4 countries, so I've personally experienced what it feels like to arrive in a new country, start a new job, and adapt to a new culture.</p>
              <p>I first experienced the impact of coaching as a client — it helped me grow as a leader and navigate critical transitions with clarity and confidence. Today, I see that same transformation in my clients every day. Coaching empowers them to lead with confidence, grow in their roles, scale their businesses, improve communication, strengthen relationships, and boost team performance.</p>
              <p>I deliver the coaching in English and Russian. Based in Barcelona, working globally.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="md:order-last">
              <img src={mariaColor} alt="Maria Belitskaya portrait" className="w-full aspect-[3/4] object-cover" />
            </div>
          </FadeUp>
        </div>

        <div className="section-divider my-20" />

        {/* Certificates */}
        <FadeUp>
          <h2 className="font-display text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-surface border border-surface-border h-56 flex items-center justify-center p-4">
              <img src={certIcf} alt="ICF Associate Certified Coach certificate for Maria Belitskaya" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-surface border border-surface-border h-56 flex items-center justify-center p-4">
              <img src={certCec} alt="Center for Executive Coaching certificate for Maria Belitskaya" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-surface border border-surface-border h-56 flex items-center justify-center p-4">
              <img src={certEqi} alt="EQ-i 2.0 and EQ 360 Certification for Maria Belitskaya" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-surface border border-surface-border h-56 flex items-center justify-center p-4">
              <img src={certLeading} alt="Mischief Makers Leading Groups Facilitation certificate for Maria Belitskaya" loading="lazy" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </FadeUp>

        <div className="section-divider my-20" />

        {/* Trusted by */}
        <FadeUp>
          <h3 className="text-center text-warm-grey text-sm uppercase tracking-widest mb-10">Trusted by</h3>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <img src={logoViatris} alt="Viatris logo" loading="lazy" className="h-10 object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity" />
            <img src={logoCareerminds} alt="Careerminds logo" loading="lazy" className="h-10 object-contain brightness-0 invert opacity-50 hover:opacity-80 transition-opacity" />
          </div>
        </FadeUp>
      </div>
    </section>
  </>
);

export default About;
