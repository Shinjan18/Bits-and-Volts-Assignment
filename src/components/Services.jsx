import img1 from "../assets/1.png";
import img2 from "../assets/2.png";

function Services(){

  return(

    <section className="px-10 py-16">

      <div className="max-w-6xl mx-auto">

        <h3 className="inline-block bg-primary px-3 py-1 font-semibold rounded">
          Services
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online.
        </p>


        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* CARD 1 */}
          <div className="bg-[#F3F3F3] rounded-3xl border-2 border-black p-8 flex justify-between items-center shadow-[6px_6px_0px_black]">

            <div>

              <h4 className="text-xl font-semibold inline bg-primary px-2 rounded">
                Search engine optimization
              </h4>

              <div className="flex items-center gap-3 mt-8">

                <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
                  🡵
                </div>

                <span>Learn more</span>

              </div>

            </div>

            <img src={img1} className="w-40" />

          </div>


          {/* CARD 2 */}
          <div className="bg-primary rounded-3xl border-2 border-black p-8 flex justify-between items-center shadow-[6px_6px_0px_black]">

            <div>

              <h4 className="text-xl font-semibold bg-white inline px-2 rounded">
                Pay-per-click advertising
              </h4>

              <div className="flex items-center gap-3 mt-8">

                <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
                  🡵
                </div>

                <span>Learn more</span>

              </div>

            </div>

            <img src={img2} className="w-40" />

          </div>

        </div>

      </div>
    </section>
  )
}
export default Services;