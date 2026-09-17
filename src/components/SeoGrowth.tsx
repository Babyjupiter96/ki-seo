"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLeadForm } from "@/components/lead-form/context";

const services = [
  "Technical SEO",
  "Local SEO",
  "Google Business Profile Optimization",
  "Keyword Strategy",
  "Content Strategy",
  "Website Optimization",
  "Authority Building",
  "Conversion Optimization",
];

const chartPath =
  "M0,86 C 40,84 60,80 90,74 C 130,66 150,68 190,56 C 230,44 250,50 290,36 C 330,22 350,26 400,8";

export function SeoGrowth() {
  const { open } = useLeadForm();

  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="SEO & Digital Growth"
              title={
                <>
                  If Nobody Finds You, It Doesn&apos;t Matter
                  <br className="hidden md:block" /> How Good You Are.
                </>
              }
              description="Ki builds search visibility the same way it evaluates a property — methodically, and with a clear read on where the value actually is."
            />

            <RevealGroup className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service}
                  variants={revealItemVariants}
                  className="flex items-center gap-3 border-b border-line py-3 text-[15px] text-paper/85"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {service}
                </motion.div>
              ))}
            </RevealGroup>

            <Reveal delay={0.15} className="mt-10">
              <MagneticButton onClick={() => open("grow")} variant="signal" trackId="grow_your_visibility_seo">
                Grow Your Visibility
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative rounded-3xl border border-line-strong bg-ink-2 p-8 md:p-10">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                  Search Visibility Index
                </p>
                <span className="rounded-full border border-line-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-stone-dark">
                  Illustrative
                </span>
              </div>

              <div className="relative mt-8 h-52 w-full">
                <svg
                  viewBox="0 0 400 100"
                  fill="none"
                  className="h-full w-full overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="seo-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {[20, 40, 60, 80].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      x2="400"
                      y1={y}
                      y2={y}
                      stroke="rgba(245,243,236,0.06)"
                      strokeWidth="1"
                    />
                  ))}

                  <motion.path
                    d={`${chartPath} L400,100 L0,100 Z`}
                    fill="url(#seo-fill)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />

                  <motion.path
                    d={chartPath}
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-stone-dark">
                <span>Month 1</span>
                <span>Month 6</span>
                <span>Month 12</span>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-stone-dark">
                Conceptual representation of how organic visibility compounds over a
                sustained SEO program. Actual results vary by market and are shared
                with clients directly.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
