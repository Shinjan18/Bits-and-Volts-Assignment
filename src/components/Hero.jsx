import heroImg from "../assets/hero.jpg";   // we will add image here

function Hero() {

  return (

    <section className="px-10 py-16">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT TEXT */}
        <div className="flex-1">

          <h2 className="text-5xl font-bold leading-tight text-[var(--dark)]">
            Navigating the digital landscape for success
          </h2>

          <p className="mt-6 text-gray-600">
            Our digital marketing agency helps businesses grow and succeed online
            through a range of services including SEO, PPC, social media marketing,
            and content creation.
          </p>

          <button className="mt-8 bg-[var(--dark)] text-white px-6 py-3 rounded-lg">
            Book a consultation
          </button>

        </div>


        {/* RIGHT IMAGE */}
        <div className="flex-1">

          <img 
            src={heroImg}
            className="w-full max-w-md mx-auto"
            alt="hero"
          />

        </div>

      </div>

    </section>

  )

}

export default Hero;
