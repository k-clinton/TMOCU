import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | TMOCU",
  description: "Refund policy for TakeMyOnlineClassUSA services.",
  alternates: {
    canonical: "/refund-policy",
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-8 sm:p-12 border border-[#EAECEF]">
        <div className="mb-10 pb-10 border-b border-[#EAECEF]">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal mb-4">Refund Policy</h1>
          <p className="text-text-secondary">Refund Policy for Takemyonlineclassusa</p>
        </div>

        <div className="prose prose-slate max-w-none text-text-secondary space-y-6">
          <p>
            Thank you for your order. We hope you are happy with your order. However, if you are not completely satisfied with your order for any reason, you may let us know why for a full refund or an exchange. Please see below for more information on our return policy.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">RETURNS</h2>
          <p>
            All refund requests must be postmarked within thirty (30) days of the ordering date.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">RETURN PROCESS</h2>
          <p>
            To request for a refund, you must show proof of grades scored on assignments or class we handled.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">REFUNDS</h2>
          <p>
            After receiving your refund request and inspecting the grades of your assignment pr online class, we will process your refund or exchange. Please allow at least thirty (30) days from the receipt of your item to process your return or exchange. We will notify you by email when your refund has been processed.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">EXCEPTIONS</h2>
          <p>The following services cannot be refunded or exchanged:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you had started to take your online class before handling it to us or If you decide to complete some assignments or the entire class without notifying us.</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Please Note</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you don&apos;t get an A or B through our services, we will give you a full refund or retake the class for free.</li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">QUESTIONS</h2>
          <p>
            If you have any questions concerning our refund policy, please contact us at: <br />
            {/* The original site just says "contact us at:" followed by blank. We'll leave it as is or link to contact page. */}
            <a href="/contact" className="text-blue-600 hover:underline">Support Contact</a>
          </p>
        </div>
      </div>
    </div>
  );
}
