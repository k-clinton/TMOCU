import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const content = `# TakeMyOnlineClassUSA (TMOCU)

> Professional online class management and academic support for busy students and working professionals in the United States. TMOCU manages coursework, assignments, quizzes, discussion boards, and exams on behalf of students enrolled in online degree programs.

TMOCU serves undergraduate, graduate, nursing, business, and STEM students across major LMS platforms including Canvas, Blackboard, D2L Brightspace, Moodle, and WebAssign. All work is handled by vetted, degree-verified subject matter specialists. The service guarantees confidentiality through end to end privacy measures and regional IP matching.

## Pages

- [Home](${SITE_URL}/): Overview of services, key metrics (98.4% grade targets met, 500+ courses managed), student testimonials, and a platform marquee of supported LMS portals.
- [Services](${SITE_URL}/services): Full breakdown of academic support offerings — full online class management, assignments and papers, quiz and exam support, and discussion board posts.
- [How It Works](${SITE_URL}/how-it-works): Step by step process — submit class details, specialist assignment, coursework execution, and continuous grade tracking with progress reports.
- [Price Calculator](${SITE_URL}/price-calculator): Instant estimated pricing tool for online class management and coursework support.
- [About](${SITE_URL}/about): Mission statement, specialist network overview (50+ disciplines, 100% degree-verified), and core service pillars (confidentiality, punctual delivery, continuous collaboration).
- [Contact](${SITE_URL}/contact): Request a free, confidential class quote. Response guaranteed within 1 hour.

## Legal

- [Privacy Policy](${SITE_URL}/privacy-policy)
- [Terms of Use](${SITE_URL}/terms-of-use)
- [Refund Policy](${SITE_URL}/refund-policy)
- [Cookie Policy](${SITE_URL}/cookie-policy)

## Key Facts

- Grade target success rate: 98.4%
- Online courses managed: 500+
- Average coordinator response time: under 1 hour
- Confidentiality: regional IP matching, end-to-end encryption
- Supported LMS platforms: Canvas, Blackboard Ultra, D2L Brightspace, Moodle, WebAssign, ZyBooks
- Disciplines covered: Nursing & Health Sciences, Business & MBA, Computer Science, Mathematics & STEM, Social Sciences, Graduate Education, and 50+ more
- Pricing: quote-based, free estimate within 1 hour of contact
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
