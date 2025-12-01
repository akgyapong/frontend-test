import React from 'react'

function Terms() {
  return (
    <main className="bg-gray-50 min-h-screen text-gray-900">
      <header className="bg-gradient-to-r from-blue-600/10 to-blue-600/5 py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-semibold">Terms &amp; Conditions</h1>
          <p className="mt-2 text-gray-600">Welcome to Shopwice. Please read these terms carefully before using our site.</p>
        </div>
      </header>

      <section className="flex justify-center px-4 py-8">
        <article className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Business Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              These conditions are the contractual terms upon which Shopwice (trading as Shopwice Electronics),
              registered company number BN335162020 and Tax ID P0013659413, deals with customers. They govern
              contracts for the supply of goods and services formed when we accept an order or a quotation is
              accepted. We may update these terms from time to time — please check them before each purchase.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to provide features and improve your experience. By using Shopwice you agree to our
              use of cookies as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Comments &amp; User Content</h2>
            <p className="text-gray-600 leading-relaxed">
              Certain areas of the site allow users to post comments. Comments express the views of the author
              and do not reflect the views of Shopwice. We do not pre-screen comments but reserve the right to
              remove or edit any comment that breaches these terms.
            </p>
            <ul className="mt-2 ml-5 list-disc text-gray-600">
              <li>You must have the rights to post the content you submit.</li>
              <li>Content must not infringe others' rights or be defamatory or illegal.</li>
              <li>By posting you grant Shopwice a non-exclusive right to use and edit the content.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Age Verification</h2>
            <p className="text-gray-600 leading-relaxed">
              By registering you confirm you are 13 years or older. If local law imposes different age requirements,
              you must comply with those requirements.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Linking to Our Site</h2>
            <p className="text-gray-600 leading-relaxed">
              Certain organizations (government agencies, search engines, news organizations and similar)
              may link to our site without prior approval. Other requests can be considered—please contact
              us with details (include your name, organization, contact info and the URLs you plan to link from).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">iFrames &amp; Content Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              You may not create frames or alter the presentation of our pages without permission. You are
              responsible for content on sites linking to us and agree to defend Shopwice against claims
              arising from such sites.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Privacy &amp; Reservation of Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              Please review our Privacy Policy for details on how we handle personal information. We reserve
              the right to request removal of links, amend these terms, and take other actions necessary to
              protect our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Disclaimer &amp; Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, we exclude warranties relating to the site and its
              content. Nothing in these terms limits liability for death, personal injury, or fraud.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may suspend or terminate access to the site at any time for breaches of these terms or
              applicable law. Following termination, we have no further obligations to you.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Copyright Infringement</h2>
            <p className="text-gray-600 leading-relaxed">
              If you believe your copyrighted work has been used in a way that constitutes infringement on
              Shopwice, notify our copyright agent at <a className="text-blue-600" href="mailto:info@shopwice.com">info@shopwice.com</a>
              with the requested details so we can investigate.
            </p>
          </section>

          <footer className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500 space-y-1">
            <p>Last updated: December 1, 2025</p>
            <p>If you have questions about these terms, contact us at <a className="text-blue-600" href="mailto:info@shopwice.com">info@shopwice.com</a>.</p>
          </footer>
        </article>
      </section>
    </main>
  )
}

export default Terms