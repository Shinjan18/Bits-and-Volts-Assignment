function Testimonials(){

  const data = [
    "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.",
    "Professional, responsive, and truly cares about the success of our business.",
    "Highly recommend Positivus to any company looking to grow their online presence."
  ];

  return(

    <section className="px-10 py-20">

      {/* TITLE */}
      <div className="max-w-6xl mx-auto mb-10">

        <h3 className="inline-block bg-primary px-3 py-1 font-semibold rounded">
          Testimonials
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>

      </div>


      {/* DARK CONTAINER */}
      <div className="bg-dark rounded-[40px] py-16 overflow-hidden">

        <div className="flex gap-8 px-10 overflow-x-auto">


          {data.map((text,i)=>(

            <div
              key={i}
              className="min-w-[320px] md:min-w-[420px] border border-primary rounded-3xl p-8 text-white relative"
            >

              {/* TEXT */}
              <p className="leading-relaxed">
                "{text}"
              </p>


              {/* TRIANGLE POINTER */}
              <div className="absolute bottom-[-12px] left-12 w-6 h-6 bg-dark border-l border-b border-primary rotate-[-45deg]"></div>


              {/* NAME */}
              <div className="mt-10">

                <h4 className="text-primary font-semibold">
                  John Smith
                </h4>

                <p className="text-gray-400 text-sm">
                  Marketing Director
                </p>

              </div>

            </div>

          ))}


        </div>


        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">

          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>

        </div>

      </div>

    </section>

  )

}

export default Testimonials;
