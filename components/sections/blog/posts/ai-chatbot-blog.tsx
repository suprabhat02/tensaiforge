import Image from "next/image";
import { BlogCTABanner } from "@/components/sections/blog/blog-cta-banner";
import { BlogFAQ } from "@/components/ui/blog-faq";
import type { BlogPost } from "@/lib/blog-posts";

type Props = { post: BlogPost };

export function AIChatbotBlog({ post }: Props) {
  return (
    <div className="space-y-10">
      {/* Key Takeaways */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-3 font-display text-base font-bold uppercase tracking-widest text-red-400">
          Key Takeaways
        </h2>
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          {[
            "AI chatbot development costs $40,000–$250,000+ in 2026 depending on model choice, integrations, and compliance requirements.",
            "GPT-4o with RAG is the fastest path to a production-quality business chatbot — no model training required.",
            "RAG (Retrieval-Augmented Generation) is the right choice for most business chatbots; fine-tuning is for specialist use cases.",
            "A well-built AI chatbot handles 70–85% of customer queries autonomously, reducing support costs by 40–60%.",
            "Ongoing costs (API fees, vector DB, monitoring) are predictable and typically 10–20× less than the human agents replaced.",
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
        aria-labelledby="h2-cost-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-cost-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          AI Chatbot Development Cost at a Glance
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          AI chatbot development in 2026 costs between{" "}
          <strong className="text-white">
            $40,000 for a focused, GPT-4o-powered assistant
          </strong>{" "}
          and <strong className="text-white">$250,000+</strong> for an
          enterprise-grade AI platform with custom model fine-tuning,
          multi-language support, and regulatory compliance. The model choice,
          integration depth, and quality requirements are the primary cost
          variables.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {[
                  "Chatbot Type",
                  "Build Cost",
                  "Monthly Running Cost",
                  "Key Features",
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
                  "FAQ / Knowledge Base Bot",
                  "$40,000 – $80,000",
                  "$300 – $1,200",
                  "RAG on docs, structured Q&A, UI widget",
                ],
                [
                  "Customer Support Agent",
                  "$70,000 – $130,000",
                  "$800 – $2,500",
                  "CRM integration, ticket routing, handoff",
                ],
                [
                  "Sales & Lead Qualification Bot",
                  "$80,000 – $150,000",
                  "$1,000 – $3,000",
                  "CRM sync, qualification logic, booking",
                ],
                [
                  "Enterprise AI Assistant",
                  "$150,000 – $250,000+",
                  "$2,000 – $8,000",
                  "Fine-tuning, SSO, compliance, analytics",
                ],
              ].map(([type, build, monthly, features]) => (
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
                    {features}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="types"
        aria-labelledby="h2-types-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-types-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Types of AI Chatbots in 2026
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Not all AI chatbots are the same. The category your use case falls
          into determines the technology stack, model requirements, and cost
          range.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "RAG-Powered Knowledge Bots",
              tag: "Most Common",
              body: "Answers questions from your own documents, product manuals, or knowledge base. No model training needed — content updates in hours, not months.",
            },
            {
              title: "Customer Support Agents",
              tag: "High ROI",
              body: "Integrated with your CRM and ticketing system. Routes complex issues to humans, handles routine queries 24/7 with consistent quality.",
            },
            {
              title: "Sales & Lead Qualification Bots",
              tag: "Revenue Impact",
              body: "Qualifies leads, answers product questions, books demos, and syncs to Salesforce/HubSpot. Works while your team sleeps.",
            },
            {
              title: "Agentic AI Assistants",
              tag: "Advanced",
              body: "Multi-step reasoning, tool calling, web search, and autonomous task completion. LangGraph or AutoGen orchestration for complex workflows.",
            },
            {
              title: "Voice AI Assistants",
              tag: "Emerging",
              body: "Phone-based AI agents using Whisper (STT) and ElevenLabs/OpenAI TTS. Replacing IVR systems with natural conversation.",
            },
            {
              title: "Internal Knowledge Assistants",
              tag: "Enterprise",
              body: "Answers employee questions about HR policies, company procedures, and product specs. Reduces internal tickets by 40–60%.",
            },
          ].map(({ title, tag, body }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <p className="font-display text-sm font-semibold text-white">
                  {title}
                </p>
                <span className="rounded-full bg-red-500/10 px-2 py-0.5 font-mono text-[10px] text-red-400">
                  {tag}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inline image */}
      <figure className="overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=75"
          alt="AI chatbot interface showing a natural language conversation between a customer and an intelligent AI assistant"
          width={900}
          height={500}
          className="h-56 w-full object-cover sm:h-72"
          loading="lazy"
        />
        <figcaption className="bg-card/60 px-4 py-2 text-xs text-muted-foreground">
          Modern AI chatbots go beyond scripted responses — understanding
          intent, context, and nuance.
        </figcaption>
      </figure>

      {/* Section 3 */}
      <section
        id="cost-factors"
        aria-labelledby="h2-factors-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-factors-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Key Cost Drivers for AI Chatbots
        </h2>
        <ol className="space-y-4">
          {[
            {
              n: "1",
              title: "Model Choice and API Cost",
              body: "GPT-4o is $5/M input tokens. Claude 3.5 Sonnet is $3/M. Gemini 1.5 Flash is $0.075/M. Volume estimates matter — 10,000 conversations/month at 2K tokens average = $100–$600/month in API costs alone.",
            },
            {
              n: "2",
              title: "Knowledge Base Size and Update Frequency",
              body: "Indexing 1,000 documents into a vector database costs ~$50–$200 one-time. Embedding updates when you change content add ongoing cost. Pinecone, Weaviate, or pgvector depending on scale.",
            },
            {
              n: "3",
              title: "Integration Complexity",
              body: "Connecting to Salesforce, Zendesk, Shopify, or custom internal systems via APIs adds 20–60 hours per integration. Authentication, data mapping, and error handling all add scope.",
            },
            {
              n: "4",
              title: "Conversation Memory",
              body: "Short-term context (within a conversation) is free. Long-term user memory requires vector storage and retrieval — adds architecture complexity and ongoing storage cost.",
            },
            {
              n: "5",
              title: "Multi-language Support",
              body: "Supporting 5+ languages adds translation pipeline cost and requires testing across all locales. Budget $5,000–$20,000 extra for a production multilingual chatbot.",
            },
            {
              n: "6",
              title: "Compliance and Data Privacy",
              body: "GDPR, HIPAA, and SOC 2 requirements mandate data residency controls, audit logging, and PII redaction pipelines. These can add $20,000–$50,000 to an enterprise build.",
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
      <section
        id="model-comparison"
        aria-labelledby="h2-models"
        className="scroll-mt-24"
      >
        <h2
          id="h2-models"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          GPT-4o vs Claude vs Custom Models: Which Is Right for Your Chatbot?
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          Choosing the right foundation model is a critical architectural
          decision. Here's an honest comparison based on production use in 2026.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                {[
                  "Model",
                  "Best For",
                  "Cost",
                  "Context Window",
                  "Tool Calling",
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
                  "GPT-4o",
                  "Versatile business chatbots, vision, function calling",
                  "$5 / 1M tokens",
                  "128K tokens",
                  "Excellent",
                ],
                [
                  "Claude 3.5 Sonnet",
                  "Long-context reasoning, nuanced writing",
                  "$3 / 1M tokens",
                  "200K tokens",
                  "Good",
                ],
                [
                  "Gemini 1.5 Pro",
                  "Large document Q&A, multimodal",
                  "$3.5 / 1M tokens",
                  "2M tokens",
                  "Good",
                ],
                [
                  "Custom Fine-tuned LLM",
                  "Domain-specific terminology, structured outputs",
                  "High upfront + hosting",
                  "Varies",
                  "Configurable",
                ],
              ].map(([model, best, cost, ctx, tool]) => (
                <tr
                  key={model}
                  className="border-b border-white/5 hover:bg-white/3"
                >
                  <td className="px-4 py-3 font-medium text-white">{model}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {best}
                  </td>
                  <td className="px-4 py-3 font-mono text-red-400">{cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{ctx}</td>
                  <td className="px-4 py-3 text-muted-foreground">{tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 */}
      <section
        id="rag-vs-finetuning"
        aria-labelledby="h2-rag"
        className="scroll-mt-24"
      >
        <h2
          id="h2-rag"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          RAG vs Fine-Tuning: What's Right for Your Chatbot?
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          This is the most frequently misunderstood architectural decision in AI
          chatbot development. Most businesses that think they need fine-tuning
          actually need RAG — and save 80% of their budget by making that
          distinction early.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              approach: "RAG (Retrieval-Augmented Generation)",
              when: "Use when you need the chatbot to answer questions from your specific content — documentation, FAQs, product catalogues, policies.",
              pros: [
                "Content updates take hours, not weeks",
                "No model training cost",
                "Provenance — you can cite the source document",
                "Works with any LLM as the backbone",
              ],
              cost: "$5,000–$15,000 to set up",
            },
            {
              approach: "Fine-Tuning",
              when: "Use when you need the model to reliably produce a specific output format, adopt a very specific persona, or handle a narrow domain with consistent terminology.",
              pros: [
                "Consistent output format",
                "Baked-in domain vocabulary",
                "Faster inference (smaller fine-tuned models)",
                "Reduced prompt engineering overhead",
              ],
              cost: "$15,000–$60,000+ to train and host",
            },
          ].map(({ approach, when, pros, cost }) => (
            <div
              key={approach}
              className="rounded-xl border border-white/10 bg-card/60 p-5"
            >
              <h3 className="mb-2 font-display text-sm font-bold text-white">
                {approach}
              </h3>
              <p className="mb-3 text-xs leading-relaxed text-muted-foreground italic">
                {when}
              </p>
              <ul className="mb-3 space-y-1">
                {pros.map((p) => (
                  <li
                    key={p}
                    className="flex gap-2 text-xs text-muted-foreground"
                  >
                    <span className="text-green-400 shrink-0">+</span>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-red-400">{cost}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          In most cases, start with RAG. Fine-tune only when you have specific,
          measurable performance gaps that RAG with good prompt engineering
          cannot close.
        </p>
      </section>

      {/* Mid CTA */}
      <BlogCTABanner
        headline="Ready to Deploy an AI Chatbot That Actually Works?"
        body="TensaiForge builds production-grade AI chatbots with GPT-4o, Claude, and RAG pipelines. We handle architecture, integrations, prompt engineering, and deployment — end to end."
        href="/services/ai-chatbot-development/"
        cta="Build Your AI Chatbot"
        variant="mid"
      />

      {/* Section 6 */}
      <section
        id="timeline"
        aria-labelledby="h2-timeline-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-timeline-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How Long Does AI Chatbot Development Take?
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          AI chatbot timelines are driven by integration complexity, not model
          sophistication. Connecting to legacy CRMs and bespoke data sources
          takes far longer than the actual AI engineering.
        </p>
        <div className="space-y-3">
          {[
            {
              phase: "Discovery & Architecture",
              weeks: "1–2 weeks",
              output:
                "Use case definition, data source inventory, model selection, RAG vs fine-tuning decision",
            },
            {
              phase: "Data Preparation & Indexing",
              weeks: "1–3 weeks",
              output:
                "Document cleaning, chunking strategy, embedding pipeline, vector DB setup",
            },
            {
              phase: "Chatbot Core Development",
              weeks: "3–6 weeks",
              output:
                "Conversation flow, context management, tool calling, UI widget or API",
            },
            {
              phase: "Integrations",
              weeks: "2–4 weeks",
              output:
                "CRM/ticketing sync, auth, webhook setup, human handoff logic",
            },
            {
              phase: "Prompt Engineering & QA",
              weeks: "2–3 weeks",
              output:
                "Systematic prompt testing, edge case coverage, output quality benchmarking",
            },
            {
              phase: "Deployment & Monitoring",
              weeks: "1 week",
              output:
                "Production deployment, analytics dashboard, alerting for failure cases",
            },
          ].map(({ phase, weeks, output }) => (
            <div
              key={phase}
              className="flex gap-4 rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <div className="min-w-[150px]">
                <p className="font-display text-sm font-semibold text-white">
                  {phase}
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

      {/* Section 7 */}
      <section
        id="industries"
        aria-labelledby="h2-industries"
        className="scroll-mt-24"
      >
        <h2
          id="h2-industries"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Industries Leading with AI Chatbots
        </h2>
        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
          AI chatbots deliver the highest ROI in industries with high query
          volume, repetitive support patterns, and 24/7 service expectations.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              industry: "E-commerce & Retail",
              stat: "35% reduction in support tickets",
              example: "Order tracking, returns, product Q&A, upselling",
            },
            {
              industry: "Financial Services",
              stat: "60% of tier-1 queries automated",
              example:
                "Account inquiries, transaction disputes, product eligibility",
            },
            {
              industry: "Healthcare",
              stat: "24/7 triage without staff overhead",
              example:
                "Appointment booking, symptom assessment, prescription refills",
            },
            {
              industry: "SaaS & Technology",
              stat: "40% faster customer onboarding",
              example:
                "Product onboarding, feature discovery, technical troubleshooting",
            },
            {
              industry: "Real Estate",
              stat: "300% more leads qualified",
              example:
                "Property search assistance, viewing scheduling, mortgage queries",
            },
            {
              industry: "Education",
              stat: "50% fewer admin queries to staff",
              example:
                "Course information, enrollment support, assignment guidance",
            },
          ].map(({ industry, stat, example }) => (
            <div
              key={industry}
              className="rounded-xl border border-white/10 bg-card/60 p-4"
            >
              <p className="mb-1 font-display text-sm font-semibold text-white">
                {industry}
              </p>
              <p className="mb-1 font-mono text-xs text-red-400">{stat}</p>
              <p className="text-xs text-muted-foreground">{example}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8 */}
      <section
        id="build-right"
        aria-labelledby="h2-build-ai"
        className="scroll-mt-24"
      >
        <h2
          id="h2-build-ai"
          className="mb-4 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          How to Build an AI Chatbot That Actually Works
        </h2>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          Most AI chatbots fail not because the technology isn't ready, but
          because of poor data quality, weak prompt engineering, and missing
          fallback handling. Here's what separates the 20% that deliver ROI from
          the 80% that disappoint.
        </p>
        <ul className="space-y-3">
          {[
            {
              title: "Start with your data quality",
              body: "Garbage in, garbage out. Clean, well-structured documents produce accurate chatbot responses. Poorly formatted, duplicated, or outdated content is the #1 cause of hallucinations in RAG systems.",
            },
            {
              title: "Design failure modes deliberately",
              body: "What does your chatbot say when it doesn't know the answer? A graceful 'I don't have that information — here's how to contact our team' is 10× better than a confident hallucination.",
            },
            {
              title: "Measure answer quality, not just coverage",
              body: "Track user satisfaction scores, escalation rates, and resolution rates — not just 'percentage of queries handled.' A chatbot that handles 90% of queries badly is worse than one handling 60% perfectly.",
            },
            {
              title: "Build the human handoff first",
              body: "Handoff to a human agent is not a failure state — it's a core feature. Design it thoughtfully: transfer context, conversation history, and user intent to the agent at the moment of escalation.",
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
      <section id="faq" aria-labelledby="h2-faq-ai" className="scroll-mt-24">
        <h2
          id="h2-faq-ai"
          className="mb-6 font-display text-2xl font-bold tracking-tight lg:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <BlogFAQ items={post.faqs} />
      </section>

      {/* Bottom CTA */}
      <BlogCTABanner
        headline="Deploy an AI Chatbot That Converts and Retains"
        body="TensaiForge builds AI chatbots powered by GPT-4o, Claude, and custom RAG pipelines — integrated with your CRM, trained on your data, and measured on real business outcomes."
        href="/services/ai-chatbot-development/"
        cta="Start Your AI Chatbot Project"
        variant="bottom"
      />
    </div>
  );
}
