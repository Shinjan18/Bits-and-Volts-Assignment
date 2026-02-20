import star from "../assets/star1.png";

function Footer(){

  return(

    <footer className="px-6 md:px-10 py-16">

      <div className="bg-dark text-white rounded-[40px] p-10">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* LEFT SIDE */}
          <div>

           {/* LOGO */}
           <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-1 rounded">
                <img src={star} className="w-6"/>
                </div>
                <h2 className="text-xl font-semibold">Positivus</h2>
                </div>


            <span className="bg-primary text-black px-2 py-1 rounded">
              Contact us:
            </span>

            <div className="mt-4 space-y-2 text-gray-300">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St<br/>
                Moonstone City, Stardust State 12345
              </p>
            </div>

          </div>


          {/* RIGHT SIDE SUBSCRIBE */}
          <div className="bg-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-4 items-center">

            <input
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-transparent border border-white/40 outline-none w-full md:w-64"
            />

            <button className="bg-primary text-black px-6 py-3 rounded-lg font-semibold">
              Subscribe to news
            </button>

          </div>

        </div>


        {/* LINE */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">

          <p>© 2023 Positivus. All Rights Reserved.</p>

          <a href="#" className="underline">
            Privacy Policy
          </a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;
