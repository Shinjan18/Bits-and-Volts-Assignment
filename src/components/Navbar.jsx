import star from "../assets/star.png";

function Navbar(){

  return (

    <nav className="flex justify-between items-center px-6 md:px-10 py-6 bg-white">

      {/* LOGO */}
      <div className="flex items-center gap-2">

        <div className="p-1 rounded">
          <img src={star} className="w-5" />
        </div>

        <h1 className="text-2xl font-bold">
          Positivus
        </h1>

      </div>


      {/* MENU */}
      <div className="hidden md:flex gap-8 items-center">

        <a href="#">About us</a>
        <a href="#">Services</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>

        <button className="border border-black px-5 py-2 rounded-lg">
          Request a quote
        </button>

      </div>

    </nav>

  )

}

export default Navbar;
