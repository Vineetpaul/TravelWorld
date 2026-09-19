import { benefits } from "../../data/benefits";
import Globe from '../../assets/Layout/Globe.png'

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#e9f4ff] pt-2 pb-0">
      <div className="mx-auto max-w-7xl px-5 py-6 sm:py-8 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-md font-bold uppercase tracking-[1.5px] text-blue-400">
              Why Choose Us
            </p>
            <h2 className="mt-1 text-xl font-bold text-blue-950 sm:text-2xl">
              Your Trusted Travel Partner
            </h2>
            <p className="mt-2 text-sm leading-5 text-gray-400 sm:text-sm font-semibold">
              With years of experience, a dedicated team and a passion for travel,
              we ensure your journey is smooth, safe and memorable.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="rounded-xl bg-blue-50 px-4 py-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md md:min-h-[140px] md:max-w-[180px] md:mx-auto"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 text-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-blue-950">
                    {benefit.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[170px] text-sm leading-4 text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <img
              src={Globe}
              alt="Travel essentials"
              className="w-full max-w-[340px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;