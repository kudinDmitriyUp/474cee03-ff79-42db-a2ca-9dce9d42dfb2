"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import MetricCardFour from '@/components/sections/metrics/MetricCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Zap, Bell, Users, BarChart3, Shield, TrendingUp, Heart, Building2, Clock, Mail, Twitter, Linkedin, Facebook, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108478977-6zm5ccr5.jpg"
          logoAlt="FireHub Logo"
          brandName="FireHub"
          button={{
            text: "Get Started",
            href: "https://app.firehub.io"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="FireHub"
          description="Real-time fire safety monitoring and rapid emergency response for modern buildings"
          buttons={[
            {
              text: "Start Free Trial",
              href: "https://app.firehub.io/trial"
            },
            {
              text: "Schedule Demo",
              href: "#contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108479541-ps4uxa33.jpg"
          imageAlt="FireHub fire safety monitoring dashboard"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Advanced Fire Safety Technology That Works When It Matters Most"
          features={[
            {
              icon: Zap,
              title: "Instant Detection",
              description: "AI-powered smoke and heat detection systems that identify fire hazards in seconds, not minutes"
            },
            {
              icon: Bell,
              title: "Instant Alerts",
              description: "Multi-channel notifications to occupants, emergency services, and property managers in real-time"
            },
            {
              icon: Users,
              title: "Coordinated Response",
              description: "Unified emergency coordination dashboard connecting firefighters, building staff, and emergency teams"
            },
            {
              icon: BarChart3,
              title: "Smart Analytics",
              description: "Data-driven insights to optimize fire safety protocols and prevent incidents before they happen"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardEight
          title="How FireHub Protects Your Building"
          description="From detection to response, every step is optimized for safety and speed"
          tag="Our Process"
          tagIcon={Shield}
          features={[
            {
              id: 1,
              title: "Detection",
              description: "Advanced sensors and AI detect smoke, heat, and fire signatures with 99.2% accuracy",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108480079-jc2xkht5.jpg"
            },
            {
              id: 2,
              title: "Alert",
              description: "Immediate notifications sent to occupants, emergency services, and property management teams",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108480610-r5rv49ds.jpg"
            },
            {
              id: 3,
              title: "Coordinate",
              description: "Emergency coordinators use unified dashboard to manage response and evacuations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108481070-g8r8vo47.jpg"
            },
            {
              id: 4,
              title: "Optimize",
              description: "Post-incident analytics improve protocols and prevent future occurrences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108481738-orp9fe9k.jpg"
            }
          ]}
          textboxLayout="default"
          buttons={[
            {
              text: "Learn More",
              href: "#contact"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFour
          title="Proven Impact on Fire Safety"
          description="FireHub is protecting buildings and saving lives across the country"
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              icon: Heart,
              title: "Lives Saved",
              value: "12,400+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108482317-apird9c3.jpg"
            },
            {
              id: "2",
              icon: Building2,
              title: "Properties Protected",
              value: "85,000+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108482867-8l7lxeqf.jpg"
            },
            {
              id: "3",
              icon: Clock,
              title: "Avg Response Time",
              value: "47 seconds",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108483377-2bmz2d4h.jpg"
            },
            {
              id: "4",
              icon: Users,
              title: "Active Users",
              value: "240K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108483875-e2ocw1gp.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Industry Leaders and Emergency Services"
          description="Join thousands of organizations using FireHub for mission-critical fire safety"
          tag="Partners"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108484530-u9h17nmw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108485024-q2q3hlpa.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108485658-96n4dzk7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108486144-dl9c9ngp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108486654-b4uj8bjm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108487324-betozrwz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108487952-umnxzj4l.jpg"
          ]}
          textboxLayout="default"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Fire Safety Professionals Say"
          description="Hear from the experts protecting communities with FireHub"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Chief Robert Martinez",
              role: "Fire Chief",
              testimonial: "FireHub has revolutionized how we respond to emergencies. The coordination dashboard gets our teams to the scene faster and more organized than ever before.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108490880-p0bvi7on.jpg"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Building Manager",
              testimonial: "We reduced false alarms by 94% and response times dropped dramatically. The analytics help us stay ahead of potential issues.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108491596-8o090aax.jpg"
            },
            {
              id: "3",
              name: "James Wilson",
              role: "Emergency Coordinator",
              testimonial: "The real-time data from FireHub allows us to dispatch resources more efficiently. Every second counts in emergencies.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108492277-6lmc682p.jpg"
            },
            {
              id: "4",
              name: "Michelle Zhang",
              role: "Property Owner",
              testimonial: "Insurance costs decreased and tenant safety increased. FireHub paid for itself in the first year through reduced premiums.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108492999-v5kg8ufw.jpg"
            },
            {
              id: "5",
              name: "David Thompson",
              role: "Fire Safety Inspector",
              testimonial: "This is the future of fire safety compliance. Audits are now data-driven and buildings stay safer year-round.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108493818-45n5f5q1.jpg"
            },
            {
              id: "6",
              name: "Lisa Anderson",
              role: "Facilities Manager",
              testimonial: "Critical infrastructure protection has never been easier. Our hospital staff can focus on patient care while FireHub protects the building.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108494535-rtom1ie5.jpg"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about FireHub fire safety monitoring"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How does FireHub detect fires differently from traditional systems?",
              content: "FireHub uses AI-powered multi-sensor arrays that analyze smoke, heat, and air quality patterns in real-time. This means we detect fires faster and with fewer false alarms than conventional systems, with 99.2% accuracy."
            },
            {
              id: "2",
              title: "Can FireHub integrate with our existing fire safety infrastructure?",
              content: "Yes. FireHub is designed to work alongside existing fire suppression systems, alarm systems, and emergency protocols. Our API allows seamless integration with your current technology stack."
            },
            {
              id: "3",
              title: "What happens when a fire is detected?",
              content: "FireHub simultaneously: (1) alerts all occupants via multiple channels, (2) notifies emergency services with exact location data, (3) unlocks coordination dashboard for building staff, and (4) activates automated safety protocols."
            },
            {
              id: "4",
              title: "How is my building data protected?",
              content: "FireHub uses military-grade encryption, HIPAA-compliant data handling, regular third-party security audits, and ISO 27001 certification. Your safety data is stored on secure, redundant servers with 99.99% uptime."
            },
            {
              id: "5",
              title: "What kind of support does FireHub provide?",
              content: "We offer 24/7 emergency support, dedicated onboarding specialists, quarterly safety training, monthly coordination drills, and proactive system monitoring. Enterprise clients receive dedicated account managers."
            },
            {
              id: "6",
              title: "How much does FireHub cost?",
              content: "FireHub pricing starts at $299/month for small buildings and scales based on size, features, and integration requirements. Most customers see ROI within 12 months through reduced insurance premiums and incident prevention."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Updated"
          title="Get Early Access to FireHub Premium Features"
          description="Join the growing community of safety professionals using FireHub. Subscribe for exclusive updates, safety tips, and new feature announcements."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zM4fOy9cqxgTNTBAZnIPKH5wN/uploaded-1764108495238-okp6s0yj.jpg"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Get Started"
          termsText="We respect your privacy. Unsubscribe anytime. Read our privacy policy for details."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="FireHub"
          copyrightText="© FireHub Inc. 2025. Protecting Buildings. Saving Lives."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "#features"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                },
                {
                  label: "Security",
                  href: "#security"
                },
                {
                  label: "Status",
                  href: "https://status.firehub.io"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Blog",
                  href: "https://blog.firehub.io"
                },
                {
                  label: "Careers",
                  href: "https://careers.firehub.io"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "/privacy"
                },
                {
                  label: "Terms of Service",
                  href: "/terms"
                },
                {
                  label: "Compliance",
                  href: "#compliance"
                },
                {
                  label: "Certifications",
                  href: "#certifications"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Documentation",
                  href: "https://docs.firehub.io"
                },
                {
                  label: "API Reference",
                  href: "https://api.firehub.io"
                },
                {
                  label: "Support",
                  href: "https://support.firehub.io"
                },
                {
                  label: "Community",
                  href: "https://community.firehub.io"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/firehubapp",
              ariaLabel: "FireHub Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/firehub",
              ariaLabel: "FireHub LinkedIn"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/firehubapp",
              ariaLabel: "FireHub Facebook"
            },
            {
              icon: Globe,
              href: "https://firehub.io",
              ariaLabel: "FireHub Website"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}