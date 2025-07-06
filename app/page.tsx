import Header from "../components/Header";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about" className="py-24 px-4 w-full bg-blue-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="relative flex-shrink-0">
              <img
                src="/pic.jpg"
                alt="Dr. Serena Blake"
                className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[350px] h-auto aspect-[7/8] object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 rounded-xl px-4 py-3 shadow flex flex-col items-start w-[90%]">
                <span className="font-bold text-base">
                  Dr. Serena Blake, PsyD
                </span>
                <span className="text-xs text-gray-700">
                  Clinical Psychologist
                </span>
                <span className="text-xs mt-1 text-yellow-700">
                  8 Years Experience | 500+ Sessions
                </span>
              </div>
            </div>
            <div className="flex-1">
              <span className="inline-block bg-yellow-100 text-yellow-900 px-4 py-1 rounded-full font-medium mb-4">
                About Dr. Serena Blake, PsyD - Clinical Psychologist in Los
                Angeles, CA
              </span>
              <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
                Hi, I'm Dr. Serena Blake
              </h2>
              <p className="mb-6 text-lg text-gray-800">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care to help you
                overcome anxiety, strengthen relationships, and heal from
                trauma. Whether you meet in her Maplewood Drive office or
                connect virtually via Zoom, Dr. Blake is committed to creating a
                safe, supportive space for you to thrive.
              </p>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="relative py-24 pb-36 px-4 w-full bg-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
              How I Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=250&q=80"
                  alt="Anxiety & Stress Management"
                  className="rounded-xl w-full h-40 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Anxiety & Stress Management
                </h3>
                <p className="mb-4 text-gray-700">
                  Personalized strategies to help you manage anxiety, reduce
                  stress, and regain control using evidence-based therapy and
                  mindfulness.
                </p>
                <button className="border cursor-pointer border-blue-400 rounded px-4 py-2 mt-auto hover:bg-blue-100 transition">
                  Learn More
                </button>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=250&q=80"
                  alt="Relationship Counseling"
                  className="rounded-xl w-full h-40 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Relationship Counseling
                </h3>
                <p className="mb-4 text-gray-700">
                  Support for couples and individuals to strengthen
                  communication, resolve conflict, and build healthy, fulfilling
                  relationships.
                </p>
                <button className="border cursor-pointer border-blue-400 rounded px-4 py-2 mt-auto hover:bg-blue-100 transition">
                  Learn More
                </button>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200 shadow flex flex-col">
                <img
                  src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=250&q=80"
                  alt="Trauma Recovery"
                  className="rounded-xl w-full h-40 object-cover mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                  Trauma Recovery
                </h3>
                <p className="mb-4 text-gray-700">
                  Compassionate care to help you process and heal from trauma,
                  using proven therapeutic approaches in a safe environment.
                </p>
                <button className="border cursor-pointer border-blue-400 rounded px-4 py-2 mt-auto hover:bg-blue-100 transition">
                  Learn More
                </button>
              </div>
            </div>
            <img
              src="https://main.d1hiqvipguwtuq.amplifyapp.com/_next/image?url=%2Fassets%2Fflower_green.webp&w=1080&q=75"
              alt="Decorative plant"
              className="hidden lg:block absolute bottom-[-144px] z-[-1] right-[-150px] w-[200px] h-[200px] pointer-events-none select-none"
              style={{ zIndex: 0 }}
            />
          </div>
        </section>
        <section id="faqs" className="py-24 px-4 w-full bg-blue-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-extrabold mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-blue-200 text-xl">
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  What are your session fees?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  Individual sessions are $200. Couples sessions are $240.
                  Please contact me for more details or to discuss your needs.
                </p>
              </details>
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  Do you accept insurance?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  No, I do not accept insurance directly, but I provide a
                  superbill for you to submit to your insurance provider for
                  possible reimbursement.
                </p>
              </details>
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  Are online sessions available?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  Yes, all virtual sessions are conducted via Zoom for your
                  convenience and privacy.
                </p>
              </details>
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  What is your cancellation policy?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  I require at least 24 hours notice for cancellations to avoid
                  a session fee.
                </p>
              </details>
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  Where is your office located?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  1287 Maplewood Drive, Los Angeles, CA 90026. Virtual sessions
                  are also available.
                </p>
              </details>
              <details className="py-6">
                <summary className="font-semibold cursor-pointer text-2xl">
                  How much experience do you have?
                </summary>
                <p className="mt-3 text-lg text-gray-700">
                  I have 8 years of practice and have conducted over 500 client
                  sessions.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section id="contact" className="py-24 px-4 w-full bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
                Get In Touch
              </h2>
              <h3 className="text-2xl font-bold mb-2">Office Location</h3>
              <p className="mb-2">
                <span className="hidden md:inline">
                  1287 Maplewood Drive, Los Angeles, CA 90026
                </span>
                <span className="inline md:hidden">Los Angeles, CA</span>
              </p>
              <a
                href="https://maps.google.com/?q=1287+Maplewood+Drive+Los+Angeles+CA+90026"
                target="_blank"
                rel="noopener"
                className="inline-block mt-2 px-3 py-1 bg-blue-200 rounded text-blue-900"
              >
                Google Maps
              </a>
              <h3 className="text-2xl font-bold mt-6 mb-2">Office Hours</h3>
              <p className="mb-2">
                In-person: Tue & Thu, 10 AM–6 PM
                <br />
                Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
              </p>
              <h3 className="text-2xl font-bold mt-6 mb-2">Contact</h3>
              <p className="mb-2">
                📞 (323) 555-0192
                <br />
                ✉️{" "}
                <a
                  href="mailto:serena@blakepsychology.com"
                  className="underline text-blue-800"
                >
                  serena@blakepsychology.com
                </a>
              </p>
            </div>
            <ContactForm
              email="serena@blakepsychology.com"
              phone="(323) 555-0192"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
