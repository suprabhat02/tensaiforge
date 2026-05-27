import Image from "next/image";
import { BlogCTABanner } from "@/components/sections/blog/blog-cta-banner";
import { BlogFAQ } from "@/components/ui/blog-faq";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { post: BlogPost };

export function MobileAppDevelopmentBlog({ post }: Props) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-3 font-display text-base font-bold uppercase tracking-widest text-red-400">
          Key Takeaways
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Mobile app development costs $20,000–$300,000+ in 2026 depending on platform and complexity.",
            "React Native achieves 85–95% code reuse across iOS and Android — reducing cost by 30–50% vs native.",
            "Starting with an MVP reduces initial investment by 60–70% and dramatically de-risks the project.",
            "Time-to-market is 40% faster with cross-platform vs maintaining two separate native codebases.",
            "The App Store and Play Store review process adds 1–2 weeks to every launch timeline.",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold">
                ✓
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Section 1 */}
      <section
        id="cost-overview"
        aria-labelledby="h2-cost-mob"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost-mob"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Mobile App Development Cost at a Glance
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Mobile app development costs in 2026 range from{" "}
          <strong className="text-white">$20,000 for a focused MVP</strong> to
          <strong className="text-white"> $300,000+</strong> for a complex
          consumer app with custom animations, offline sync, payments, and deep
          third-party integrations. The platform choice — iOS, Android, or
          cross-platform React Native — is the single largest variable in that
          range.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {["App Complexity", "Cost Range", "Timeline", "Example"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-white"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Simple MVP",
                  "$20,000 – $50,000",
                  "8–12 weeks",
                  "Auth, 5–8 screens, REST API, push notifications",
                ],
                [
                  "Mid-Complexity",
                  "$50,000 – $130,000",
                  "16–24 weeks",
                  "Payments, offline sync, maps, user profiles",
                ],
                [
                  "Feature-Rich Consumer App",
                  "$130,000 – $300,000",
                  "24–48 weeks",
                  "Real-time features, complex UX, video/audio",
                ],
                [
                  "Enterprise Mobile App",
                  "$200,000 – $500,000+",
                  "32–72 weeks",
                  "MDM, SSO, compliance, custom hardware integration",
                ],
              ].map(([complexity, cost, time, eg]) => (
                <tr
                  key={complexity}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {complexity}
                  </td>
                  <td className="px-4 py-3 font-mono font-semibold text-red-400">
                    {cost}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{time}</td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    {eg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="ios-android-rn"
        aria-labelledby="h2-platforms"
        className="scroll-mt-24"
      >
        <h2
          id="h2-platforms"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          iOS vs Android vs React Native: The Real Trade-offs
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Choosing between native and cross-platform development is not just a
          cost decision — it affects performance ceiling, developer pool, App
          Store compliance complexity, and long-term maintainability.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {["Factor", "Native iOS", "Native Android", "React Native"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-semibold text-white"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                ["Initial Cost", "High", "High", "Medium (30–50% less)"],
                [
                  "Performance",
                  "Best-in-class",
                  "Best-in-class",
                  "Near-native (New Arch)",
                ],
                ["Code Reuse", "0%", "0%", "85–95%"],
                [
                  "Team Size Needed",
                  "2 iOS devs",
                  "2 Android devs",
                  "2 RN devs for both",
                ],
                ["Hiring Pool", "Smaller", "Larger", "Largest (React devs)"],
                [
                  "Best For",
                  "Premium iOS-first",
                  "Android-first markets",
                  "Most startups & scale-ups",
                ],
              ].map(([factor, ios, android, rn]) => (
                <tr
                  key={factor}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">{factor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{ios}</td>
                  <td className="px-4 py-3 text-muted-foreground">{android}</td>
                  <td className="px-4 py-3 text-red-400 font-medium">{rn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Inline image */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=900&q=75"
          alt="Mobile app developer testing a React Native application on multiple iOS and Android devices simultaneously"
          width={900}
          height={500}
          className="h-56 w-full object-cover sm:h-72"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          Cross-platform React Native development: one codebase, every device,
          near-native performance.
        </figcaption>
      </figure>

      {/* Section 3 */}
      <section
        id="cost-factors"
        aria-labelledby="h2-factors-mob"
        className="scroll-mt-24"
      >
        <h2
          id="h2-factors-mob"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          8 Factors That Drive Mobile App Development Cost
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              title: "Platform Choice",
              body: "iOS-only is cheaper than Android-only. Both natively doubles cost. React Native for both costs ~40–50% more than a single platform build.",
            },
            {
              n: "2",
              title: "UI/UX Design Complexity",
              body: "Custom animations, gesture-based navigation, and complex state transitions add significant design and development time. Simple list-based UIs are much cheaper.",
            },
            {
              n: "3",
              title: "Backend Complexity",
              body: "Apps that talk to existing APIs are cheaper to build than apps requiring a new backend. Real-time features (chat, live location, collaborative editing) add significant backend cost.",
            },
            {
              n: "4",
              title: "Third-Party Integrations",
              body: "Stripe (payments), Mapbox/Google Maps, social login, push notifications — each integration adds 8–24 engineering hours, more for poorly documented SDKs.",
            },
            {
              n: "5",
              title: "Offline Functionality",
              body: "Apps that work without internet require local data storage, sync conflict resolution, and background sync logic. This is one of the most underestimated cost items.",
            },
            {
              n: "6",
              title: "User Authentication and Security",
              body: "Biometric auth, end-to-end encryption, and app shielding each add engineering time. Healthcare and fintech apps have stricter compliance requirements.",
            },
            {
              n: "7",
              title: "App Store Compliance",
              body: "Apple App Store review guidelines are strict — especially around privacy labels, in-app purchases, and health data handling. Budget for 1–3 rounds of revision.",
            },
            {
              n: "8",
              title: "Post-Launch Maintenance",
              body: "OS updates break apps. iOS 19 and Android 16 will each require compatibility updates. Budget 15–20% of build cost annually for maintenance.",
            },
          ].map(({ n, title, body }) => (
            <li key={n} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/15 font-mono text-sm font-bold text-red-400">
                {n}
              </span>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-white">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section 4 */}
      <section id="stages" aria-labelledby="h2-stages" className="scroll-mt-24">
        <h2
          id="h2-stages"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Stages of Mobile App Development
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Mobile app development follows a structured process. Each stage has
          defined deliverables, and skipping any of them reliably increases cost
          and timeline.
        </p>
        <div className="space-y-3">
          {[
            {
              stage: "Discovery & Research",
              weeks: "1–2 weeks",
              output:
                "User personas, feature list, technical requirements, project roadmap",
            },
            {
              stage: "UI/UX Design",
              weeks: "2–4 weeks",
              output:
                "User flows, wireframes, high-fidelity Figma prototype, design system",
            },
            {
              stage: "Development Sprints",
              weeks: "6–20 weeks",
              output: "Working app builds, API integrations, automated tests",
            },
            {
              stage: "QA & Testing",
              weeks: "2–4 weeks",
              output:
                "Manual testing on 15+ devices, automated regression suite, performance profiling",
            },
            {
              stage: "App Store Submission",
              weeks: "1–2 weeks",
              output:
                "Store listings, screenshots, compliance review, staged rollout plan",
            },
            {
              stage: "Post-Launch Iteration",
              weeks: "Ongoing",
              output:
                "Crash reports, user feedback, feature releases, OS compatibility updates",
            },
          ].map(({ stage, weeks, output }) => (
            <div
              key={stage}
              className="flex gap-4 rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <div className="min-w-[130px]">
                <p className="font-display text-sm font-semibold text-white">
                  {stage}
                </p>
                <p className="font-mono text-xs text-red-400">{weeks}</p>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {output}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section
        id="rn-vs-flutter"
        aria-labelledby="h2-rnflutter"
        className="scroll-mt-24"
      >
        <h2
          id="h2-rnflutter"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          React Native vs Flutter: A Real Comparison
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          React Native and Flutter are both excellent cross-platform frameworks
          in 2026. The decision depends on your existing engineering skills and
          long-term product direction.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              fw: "React Native",
              pros: [
                "Leverages your existing React/JS team",
                "Huge ecosystem (npm, React libraries)",
                "Better for apps sharing logic with a web codebase",
                "Lower hiring cost — React devs are everywhere",
              ],
              cons: [
                "Bridge overhead in some edge cases",
                "Expo limitations for very hardware-specific features",
              ],
            },
            {
              fw: "Flutter (Dart)",
              pros: [
                "Consistent pixel-perfect UI across platforms",
                "Excellent performance even on lower-end devices",
                "Google-backed, well-maintained",
              ],
              cons: [
                "Dart is a niche skill — harder to hire",
                "Less ecosystem maturity vs npm",
                "Separate codebase from your web product",
              ],
            },
          ].map(({ fw, pros, cons }) => (
            <div
              key={fw}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <h3 className="mb-3 font-display text-base font-bold text-white">
                {fw}
              </h3>
              <p className="mb-1.5 font-mono text-xs text-green-400 uppercase tracking-wider">
                Pros
              </p>
              <ul className="mb-3 space-y-1">
                {pros.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-green-400">+</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mb-1.5 font-mono text-xs text-red-400 uppercase tracking-wider">
                Cons
              </p>
              <ul className="space-y-1">
                {cons.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-red-400">−</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <BlogCTABanner
        headline="Building a Mobile App in 2026?"
        body="TensaiForge builds React Native apps with native-level performance, App Store compliance built-in, and AI-accelerated development timelines. Let's scope your project."
        href="/services/mobile-app-development/"
        cta="Get Your Mobile App Estimate"
        variant="mid"
      />

      {/* Section 6 */}
      <section
        id="mvp-strategy"
        aria-labelledby="h2-mvp-mob"
        className="scroll-mt-24"
      >
        <h2
          id="h2-mvp-mob"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          MVP First: Why Smart Teams Start Small
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          The most successful mobile apps launched with far fewer features than
          their founders originally planned. Instagram launched with filters and
          a feed. Uber launched in one city with a single car type. Airbnb
          launched with only hosts manually photographed by the founders.
        </p>
        <blockquote className="mb-5 rounded-xl border-l-4 border-red-500 bg-red-500/5 py-4 pl-5 pr-4">
          <p className="text-sm italic leading-relaxed text-white/80">
            "Build something 100 people love, not something 1 million people
            kind of like." — Paul Graham, Y Combinator
          </p>
        </blockquote>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A focused MVP at $30,000–$50,000 that validates product-market fit is
          a far better investment than a $200,000 feature-complete app that
          discovers it built the wrong thing post-launch. Design the feature cut
          ruthlessly. Your users will tell you what to build next.
        </p>
      </section>

      {/* Section 7 */}
      <section
        id="reduce-costs"
        aria-labelledby="h2-reduce"
        className="scroll-mt-24"
      >
        <h2
          id="h2-reduce"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How to Reduce Mobile App Development Costs Without Cutting Quality
        </h2>
        <ul className="space-y-3">
          {[
            {
              title: "Use React Native instead of native",
              body: "85–95% code reuse between iOS and Android. The same feature built natively twice costs 60–80% more.",
            },
            {
              title: "Invest in design before development",
              body: "Figma prototypes cost $3,000–$8,000. Discovering UX problems in design is 10× cheaper than discovering them in code.",
            },
            {
              title: "Use proven third-party services",
              body: "Stripe for payments, Clerk for auth, AWS Amplify for push notifications — don't build what already exists.",
            },
            {
              title: "Ship to TestFlight/Play Beta first",
              body: "Real user testing before App Store submission prevents expensive post-launch crash reports.",
            },
            {
              title: "Plan your feature roadmap in releases",
              body: "v1.0 → v1.1 → v2.0 with clear scope per release prevents scope creep from inflating a single build.",
            },
          ].map(({ title, body }) => (
            <li
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <h3 className="mb-1 font-display text-sm font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="h2-faq-mob" className="scroll-mt-24">
        <h2
          id="h2-faq-mob"
          className="mb-6 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <BlogFAQ items={post.faqs} />
      </section>

      {/* Bottom CTA */}
      <BlogCTABanner
        headline="Ship a Mobile App Your Users Will Love"
        body="TensaiForge builds iOS and Android apps with React Native — fast delivery, native performance, and App Store compliance from day one. Talk to our mobile team."
        href="/services/mobile-app-development/"
        cta="Start Your Mobile Project"
        variant="bottom"
      />
    </div>
  );
}
