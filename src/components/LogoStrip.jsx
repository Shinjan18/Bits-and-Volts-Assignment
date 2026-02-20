import amazon from "../assets/amazon.png";
import dribbble from "../assets/dribbble.png";
import hubspot from "../assets/hubspot.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.jpg";
import zoom from "../assets/zoom.png";

function LogoStrip(){

  const logos = [amazon, dribbble, hubspot, notion, netflix, zoom];

  return(

    <section className="py-20">

      <div className="w-full flex justify-center">

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 w-full max-w-7xl px-8">

          {logos.map((logo,i)=>(
            <img
              key={i}
              src={logo}
              className="h-10 md:h-14 lg:h-16 object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}

        </div>

      </div>

    </section>

  )

}

export default LogoStrip;
