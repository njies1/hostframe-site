import Image from "next/image";
export default function Home() {
  return (
        <main className="min-h-screen bg-white text-black">

      <header className="border-b bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tight">
            Hostframe
          </div>
          <nav className="space-x-6 text-sm font-medium text-slate-700">
            <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#services">Services</a>
            <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-blue-700 text-white py-24 text-center">
       <Image
  src="/logo.png"
  alt="Hostframe Logo"
  width={180}
  height={180}
  className="mx-auto mb-6"
/>
        <h1 className="text-6xl font-bold">
          Hostframe Gambia
        </h1>

        <p className="text-2xl mt-4">
          Build. Monitor. Grow.
        </p>

        <p className="mt-6 text-lg">
          Professional Websites, Apps, SEO & Security Solutions
        </p>

        <button className="mt-8 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-200">
          Contact Us
        </button>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-10 text-center">
<h2>Our Services</h2>
  ...

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Website Development
            </h3>

            <p>
              Modern responsive websites for businesses.
            </p>
          </div>

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              Mobile Apps
            </h3>

            <p>
              Smart mobile app solutions for growing businesses.
            </p>
          </div>

          <div className="p-8 shadow-xl rounded-2xl border">
            <h3 className="text-2xl font-bold mb-4">
              SEO & Promotion
            </h3>

            <p>
              Helping businesses grow visibility online.
            </p>
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Portfolio
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-12">
          A look at recent website and app designs, with screenshots of completed work.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-3xl border shadow-lg">
            <Image
              src="/portfolio-1.png.jpg"
              alt="Portfolio screenshot 1"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Event Landing Page</h3>
              <p className="mt-2 text-sm text-slate-600">Clean, modern design for promotions and announcements.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-lg">
            <Image
              src="/portfolio-2.png.jpg"
              alt="Portfolio screenshot 2"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Mobile App Interface</h3>
              <p className="mt-2 text-sm text-slate-600">User-friendly mobile app layout for easy interaction.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-lg">
            <Image
              src="/portfolio-3.png.jpg"
              alt="Portfolio screenshot 3"
              width={600}
              height={400}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold">Dashboard Design</h3>
              <p className="mt-2 text-sm text-slate-600">Professional dashboard view for analytics and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold">
          Contact Hostframe Gambia
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:+2203107560"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
          >
            +220 3107560
          </a>
          <a
            href="tel:+2003164963"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-white transition hover:bg-blue-800"
          >
            +200 3164963
          </a>
        </div>

        <p className="mt-8 text-lg">
          Facebook: Hostframe Gambia
        </p>

        <p className="mt-2">
          Instagram: Hostframe Gambia
        </p>
      </section>
<section id="contact" className="py-20 px-10 text-center">
  <h2 className="text-4xl font-bold mb-8">Book a Service</h2>

 <p className="mb-6">
  Email:
  <a
    href="mailto:hostframegambia@gmail.com"
    className="text-blue-600"
  >
    hostframegambia@gmail.com
  </a>
</p>
  <form className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full border p-3 mb-4 rounded"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full border p-3 mb-4 rounded"
    />

    <select className="w-full border p-3 mb-4 rounded">
      <option>Website Development</option>
      <option>Mobile Apps</option>
      <option>SEO & Promotion</option>
    </select>

    <textarea
      placeholder="Describe your project"
      className="w-full border p-3 mb-4 rounded"
    ></textarea>

    <button
      className="bg-blue-700 text-white px-6 py-3 rounded"
      type="submit"
    >
      Book Now
    </button>

  </form>
</section>
    </main>
  );
}