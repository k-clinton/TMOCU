import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | TMOCU",
  description: "Cookie policy and information on how TakeMyOnlineClassUSA uses cookies.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm p-8 sm:p-12 border border-[#EAECEF]">
        <div className="mb-10 pb-10 border-b border-[#EAECEF]">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-charcoal mb-4">Cookie Policy</h1>
          <p className="text-text-secondary">Cookie Policy for Takemyonlineclassusa</p>
        </div>

        <div className="prose prose-slate max-w-none text-text-secondary space-y-6">
          <p>
            This is the Cookie Policy for Takemyonlineclassusa, accessible from www.takemyonlineclassusa.com
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What Are Cookies</h2>
          <p>
            As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or &apos;break&apos; certain elements of the sites functionality.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Disabling Cookies</h2>
          <p>
            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
          </p>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">The Cookies We Set</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Forms related cookies</strong><br />
              When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Third Party Cookies</h2>
          <p>
            In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
              <br /><br />
              For more information on Google Analytics cookies, see the official Google Analytics page.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">More Information</h2>
          <p>
            Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren&apos;t sure whether you need or not it&apos;s usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
          </p>
          <p>
            However if you are still looking for more information then you can contact us through one of our preferred contact methods:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: <a href="mailto:support@takemyonlineclassusa.com" className="text-blue-600 hover:underline">support@takemyonlineclassusa.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
