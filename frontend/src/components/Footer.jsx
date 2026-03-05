// frontend/src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="border-t border-base/60 py-6 text-center text-xs mt-0">

      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a href="https://github.com/RahulCodeTiwari" target="_blank" className="hover:text-primary">
          <i className="ri-github-fill"></i>
        </a>

        <a href="https://www.linkedin.com/in/rahul-tiwari-6a55b9229/" target="_blank" className="hover:text-primary">
          <i className="ri-linkedin-box-fill"></i>
        </a>

        {/* <a href="https://instagram.com/sandeepgupta0" target="_blank" className="hover:text-primary">
          <i className="ri-instagram-fill"></i>
        </a>

        <a href="https://facebook.com/sandeepgupta0" target="_blank" className="hover:text-primary">
          <i className="ri-facebook-circle-fill"></i>
        </a> */}

      </div>
      © {new Date().getFullYear()} Portfolio · Built by Rahul Tiwari

      <section className="section-container text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to grow your business?
        </h2>
        <p className="mt-2">
          Let’s build something amazing together.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="tel:+917706987149"
            className="btn-primary"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917706987149?text=Hi%20I%20want%20to%20discuss%20my%20project"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-base  px-4 py-2 text-xs font-medium  shadow-sm hover:border-primary/50 hover:text-slate-900 bg-green-400"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

    </footer>
  );
}
