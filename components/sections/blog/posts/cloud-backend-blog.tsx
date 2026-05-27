import Image from "next/image";
import { BlogCTABanner } from "@/components/sections/blog/blog-cta-banner";
import { BlogFAQ } from "@/components/ui/blog-faq";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { post: BlogPost };

export function CloudBackendBlog({ post }: Props) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-3 font-display text-base font-bold uppercase tracking-widest text-red-400">
          Key Takeaways
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "Cloud backend development costs $30,000–$200,000+ for initial build; ongoing infrastructure runs $500–$10,000/month.",
            "Start with a modular monolith — microservices are only justified at significant scale or team size.",
            "Serverless (AWS Lambda) reduces infrastructure cost by 40–70% for bursty, event-driven workloads.",
            "The most common cause of cloud bill shock is unoptimised development/staging environments running 24/7.",
            "Security-first design is cheaper to build in from day one than to retrofit after a breach.",
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
        id="what-is-cloud-backend"
        aria-labelledby="h2-what-cloud"
        className="scroll-mt-24"
      >
        <h2
          id="h2-what-cloud"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          What Is Cloud Backend Development?
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Cloud backend development is the design, build, and operation of the
          server-side infrastructure that powers your application — APIs,
          databases, authentication, file storage, job processing, real-time
          communication, and everything users don't see but entirely depend on.
        </p>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          In 2026, "cloud backend" means infrastructure that lives on AWS, GCP,
          or Azure — elastic, globally distributed, and managed rather than
          running on a fixed server. This shifts the cost model from capital
          expenditure (buy servers) to operational expenditure (pay for what you
          use) — and changes the engineering requirements considerably.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              icon: "🔌",
              title: "REST & GraphQL APIs",
              body: "The communication layer between frontend and backend, and between services.",
            },
            {
              icon: "🗄️",
              title: "Databases & Data Stores",
              body: "Relational (PostgreSQL), document (MongoDB), key-value (Redis), vector (Pinecone).",
            },
            {
              icon: "⚙️",
              title: "Background Jobs & Queues",
              body: "Async processing, scheduled tasks, event-driven pipelines.",
            },
            {
              icon: "🔐",
              title: "Auth & Identity",
              body: "JWT sessions, OAuth providers, RBAC, API key management.",
            },
            {
              icon: "📁",
              title: "File Storage & CDN",
              body: "S3/GCS for assets, CloudFront/Cloudflare for global delivery.",
            },
            {
              icon: "📊",
              title: "Observability",
              body: "Logs, metrics, traces — know what your system is doing in real time.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <p className="mb-1 text-xl">{icon}</p>
              <p className="mb-0.5 font-display text-sm font-semibold text-white">
                {title}
              </p>
              <p className="text-xs text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="cost-breakdown"
        aria-labelledby="h2-cloud-cost"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cloud-cost"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Cloud Backend Cost Breakdown
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Cloud backend costs split into two buckets: the one-time build cost
          and the ongoing infrastructure cost. Both scale with complexity and
          traffic volume.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {[
                  "System Type",
                  "Build Cost",
                  "Monthly Infra",
                  "Key Cost Drivers",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Simple REST API + DB",
                  "$30,000 – $60,000",
                  "$200 – $800",
                  "Database size, request volume",
                ],
                [
                  "Multi-service SaaS Backend",
                  "$60,000 – $130,000",
                  "$800 – $3,000",
                  "Service count, data processing",
                ],
                [
                  "Real-Time Event Platform",
                  "$100,000 – $200,000",
                  "$2,000 – $8,000",
                  "WebSocket connections, event throughput",
                ],
                [
                  "Enterprise Microservices",
                  "$180,000 – $400,000+",
                  "$5,000 – $20,000+",
                  "Service mesh, compliance, multi-region",
                ],
              ].map(([type, build, monthly, drivers]) => (
                <tr
                  key={type}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">{type}</td>
                  <td className="px-4 py-3 font-mono font-semibold text-red-400">
                    {build}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{monthly}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {drivers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Inline image */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=75"
          alt="Data center server racks representing cloud infrastructure running a scalable backend system"
          width={900}
          height={500}
          className="h-56 w-full object-cover sm:h-72"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          Modern cloud infrastructure: elastic, globally distributed, and
          pay-as-you-scale.
        </figcaption>
      </figure>

      {/* Section 3 */}
      <section
        id="architecture-patterns"
        aria-labelledby="h2-arch-cloud"
        className="scroll-mt-24"
      >
        <h2
          id="h2-arch-cloud"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Architecture Patterns in 2026
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Backend architecture is not a binary choice. It's a spectrum — and
          where you sit on it should be driven by your team size, traffic
          patterns, and operational maturity.
        </p>
        <div className="space-y-4">
          {[
            {
              name: "Modular Monolith",
              when: "0 to $5M ARR, teams under 15 engineers",
              why: "Simple to deploy, debug, and iterate. A well-structured monolith with clear module boundaries scales to tens of millions of users. Instagram, Shopify, and GitHub all started here.",
            },
            {
              name: "Serverless Functions",
              when: "Event-driven workloads, variable traffic, early-stage startups",
              why: "Zero server management, automatic scaling, and pay-per-execution pricing. 40–70% cheaper than always-on containers for bursty workloads.",
            },
            {
              name: "Microservices",
              when: "Multiple independent teams, distinct scaling requirements, $5M+ ARR",
              why: "Each service deploys independently. But distributed systems require distributed tracing, service mesh, and significantly higher operational maturity. Don't start here.",
            },
            {
              name: "Event-Driven Architecture",
              when: "Real-time features, async processing, audit trails",
              why: "Kafka or AWS SQS/SNS for decoupled communication. Excellent for high-throughput pipelines, but adds operational complexity.",
            },
          ].map(({ name, when, why }) => (
            <div
              key={name}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="font-display text-base font-bold text-white">
                  {name}
                </h3>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {when}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section
        id="cloud-vs-onprem"
        aria-labelledby="h2-cloudvsonprem"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cloudvsonprem"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Cloud vs On-Premise: Real Numbers
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          For the vast majority of startups and scale-ups, cloud is the right
          choice in 2026. The economics only shift in favour of on-premise above
          10,000+ dedicated compute units running 24/7 — a threshold most
          businesses never reach.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Cloud",
              items: [
                "Pay for what you use — scale down when traffic drops",
                "No upfront hardware investment",
                "Managed databases, backups, failover built-in",
                "Global deployment in minutes",
                "Vendor manages physical security and compliance",
              ],
            },
            {
              label: "On-Premise",
              items: [
                "Lower unit cost at massive sustained scale",
                "Full hardware control and customisation",
                "Upfront capital expenditure ($50,000–$500,000+)",
                "Your team manages patching, hardware failure, cooling",
                "Significant ops overhead — you're running a data centre",
              ],
            },
          ].map(({ label, items }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <h3 className="mb-3 font-display text-sm font-bold text-white">
                {label}
              </h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section
        id="serverless"
        aria-labelledby="h2-serverless"
        className="scroll-mt-24"
      >
        <h2
          id="h2-serverless"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Serverless: The Hidden Gem for Startups
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Serverless computing (AWS Lambda, Google Cloud Functions, Vercel Edge
          Functions) is dramatically underutilised by startups that default to
          containers out of habit. For most bursty API workloads, it's cheaper,
          faster to deploy, and eliminates entire categories of infrastructure
          management overhead.
        </p>
        <div className="mb-5 grid gap-4 sm:grid-cols-3">
          {[
            {
              stat: "40–70%",
              label:
                "Typical infrastructure cost reduction vs always-on containers",
            },
            {
              stat: "0ms",
              label:
                "Time spent on server provisioning, patching, or capacity planning",
            },
            {
              stat: "∞",
              label:
                "Automatic horizontal scaling — no ceiling without configuration",
            },
          ].map(({ stat, label }) => (
            <div
              key={stat}
              className="rounded-xl border border-white/10 bg-card/60 p-5 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-red-400">
                {stat}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
        <blockquote className="rounded-xl border-l-4 border-red-500 bg-red-500/5 py-4 pl-5 pr-4">
          <p className="text-sm italic leading-relaxed text-white/80">
            "Cold starts were the Achilles heel of serverless. With AWS Lambda
            SnapStart and Bun-based runtimes, cold starts in 2026 are typically
            under 100ms — a non-issue for most web workloads."
          </p>
        </blockquote>
      </section>

      {/* Section 6 */}
      <section
        id="aws-gcp-azure"
        aria-labelledby="h2-clouds"
        className="scroll-mt-24"
      >
        <h2
          id="h2-clouds"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          AWS vs GCP vs Azure — Which Cloud to Choose?
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Each major cloud provider has genuine strengths. The right choice
          depends on your team's expertise, your workload type, and any existing
          enterprise agreements.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {["Criteria", "AWS", "GCP", "Azure"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Ecosystem breadth", "★★★★★", "★★★★", "★★★★"],
                ["AI/ML tooling", "★★★★", "★★★★★", "★★★★"],
                [
                  "Kubernetes (managed)",
                  "EKS — Good",
                  "GKE — Best",
                  "AKS — Good",
                ],
                [
                  "Enterprise integration",
                  "Good",
                  "Moderate",
                  "Best (Microsoft)",
                ],
                ["Documentation quality", "Best", "Good", "Good"],
                [
                  "Startup credits available",
                  "Up to $100K",
                  "Up to $200K",
                  "Up to $150K",
                ],
                [
                  "Best for",
                  "Most startups",
                  "AI/data-heavy",
                  "Microsoft shops",
                ],
              ].map(([criteria, aws, gcp, azure]) => (
                <tr
                  key={criteria}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">
                    {criteria}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{aws}</td>
                  <td className="px-4 py-3 text-muted-foreground">{gcp}</td>
                  <td className="px-4 py-3 text-muted-foreground">{azure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mid CTA */}
      <BlogCTABanner
        headline="Need a Cloud Backend That Scales to Millions?"
        body="TensaiForge architects serverless and containerised backends on AWS and GCP — battle-tested for high-traffic, compliance-sensitive, and real-time workloads."
        href="/services/cloud-backend-solutions/"
        cta="Discuss Your Infrastructure"
        variant="mid"
      />

      {/* Section 7 */}
      <section
        id="devops-cicd"
        aria-labelledby="h2-devops"
        className="scroll-mt-24"
      >
        <h2
          id="h2-devops"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          DevOps and CI/CD — Why They Matter More Than You Think
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          DevOps is not a team — it's a practice. Companies that invest in CI/CD
          pipelines, infrastructure-as-code, and automated deployment ship 46×
          more frequently with 440× faster recovery times than organisations
          with manual processes (DORA State of DevOps 2024).
        </p>
        <ul className="space-y-2">
          {[
            "CI/CD pipeline (GitHub Actions) — every commit is built, tested, and deployable automatically",
            "Infrastructure-as-Code (Terraform) — your entire cloud infrastructure is version-controlled and reproducible",
            "Blue/green deployments — zero-downtime releases with instant rollback capability",
            "Automated database migrations — no manual SQL scripts run by hand in production",
            "Environment parity — dev, staging, and production use identical infrastructure",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Section 8 */}
      <section
        id="security"
        aria-labelledby="h2-security"
        className="scroll-mt-24"
      >
        <h2
          id="h2-security"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Backend Security You Cannot Skip
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Backend security failures make headlines. The OWASP Top 10 documents
          the most common and critical API security risks — every one of them is
          preventable with the right engineering practices.
        </p>
        <ul className="space-y-3">
          {[
            {
              title: "Input validation at every boundary",
              body: "Validate and sanitise all user input on the server, never trust the client. Use Zod or similar schema validation on every API route.",
            },
            {
              title: "Least-privilege IAM roles",
              body: "Every cloud service should have only the permissions it needs. A Lambda function that reads S3 should not be able to write to RDS.",
            },
            {
              title: "Secrets management",
              body: "Never put API keys or credentials in code or environment variable files. Use AWS Secrets Manager, GCP Secret Manager, or HashiCorp Vault.",
            },
            {
              title: "Rate limiting and DDoS protection",
              body: "Implement rate limiting on all public APIs. AWS WAF or Cloudflare provide DDoS protection at the edge — not at your origin.",
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
      <section id="faq" aria-labelledby="h2-faq-cloud" className="scroll-mt-24">
        <h2
          id="h2-faq-cloud"
          className="mb-6 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <BlogFAQ items={post.faqs} />
      </section>

      {/* Bottom CTA */}
      <BlogCTABanner
        headline="Build a Backend That Never Lets You Down"
        body="TensaiForge engineers cloud backends that scale infinitely, deploy without downtime, and cost less to run than you expect. Let's design your infrastructure."
        href="/services/cloud-backend-solutions/"
        cta="Start Your Cloud Project"
        variant="bottom"
      />
    </div>
  );
}
