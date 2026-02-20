import { useState } from "react";

function Process(){

  const [open, setOpen] = useState(0);

  const steps = [
    "Consultation",
    "Research and Strategy Development",
    "Implementation",
    "Monitoring and Optimization",
    "Reporting and Communication",
    "Continual Improvement"
  ];
  return(
    <section className="px-10 py-16">
      <div className="max-w-4xl mx-auto">
        <h3 className="inline-block bg-primary px-3 py-1 font-semibold rounded">
          Our Working Process
        </h3>
        <div className="mt-10 space-y-4">
          {steps.map((step,i)=>(
            <div
              key={i}
              className={`border rounded-2xl p-6 cursor-pointer transition 
              ${open===i ? "bg-primary" : "bg-white"}`}
              onClick={()=>setOpen(i)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-bold">
                    {String(i+1).padStart(2,"0")}
                  </span>
                  <h4 className="font-semibold text-lg">
                    {step}
                  </h4>
                </div>
                <span className="text-2xl">
                  {open===i ? "−" : "+"}
                </span>
              </div>
              {open===i && (
                <p className="mt-4 text-gray-700">
                  During the initial consultation, we will discuss your business
                  goals and objectives.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Process;