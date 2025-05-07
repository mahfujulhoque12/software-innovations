import Link from "next/link";

const HomeCallAction = () => {
  return (
    <section>
      <div className="w-full relative">
        <div
          className="
            relative
            h-[500px]
            bg-[url('/home-call/tech.jpg')]
            bg-cover
            bg-center
            bg-no-repeat
          "
        >
          <div className="absolute inset-0 bg-black/75 flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl md:text-5xl text-[#FAA61A] uppercase text-center px-3 md:px-0">
              Ready to start your project with us?
            </h2>
            <div className="h-0.5 bg-[#FAA61A] w-24 mt-2" />
            <div className="flex gap-3 items-center mt-8">
              <Link
                href="/contact-us"
                className="bg-[#FAA61A] px-6 py-3 text-lg md:text-xl font-bold text-white rounded-md"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallAction;
