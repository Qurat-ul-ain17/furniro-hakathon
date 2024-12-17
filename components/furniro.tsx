import Image from "next/image";

const Furniro = () => {
  return (
    <section className="w-full py-12">
      <div className=" container mx-auto text-center px-6 lg:px-16">
        <div>
          <h6 className="text-[#616161] font-semibold text-lg lg:text-xl">Share your setup with</h6>
          <h1 className="text-mylightblack font-bold text-2xl sm:text-[40px]">#FuniroFurniture</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex mt-6 gap-4">
            <div>
                <Image src="/assets/Rectangle 36.png"
                alt="Decoration Shelve"
                width={50}
                height={70}
                />
            </div>
            <div className="mt-8">
            <Image src="/assets/Rectangle 38.png"
                alt="Laptop"
                width={300}
                height={200}
                /> 
            </div>
            </div>
            <div className="flex space-x-5 space-y-1 mt-2">
            <div>
            <Image
                src="/assets/Rectangle 37.png"
                alt="Chair"
                width={130}
                height={100}
                />
            </div>
            <div>
                <Image
                src="/assets/Rectangle 39.png"
                alt="Stool"
                width={220}
                height={50}
                />
            </div>
            </div>
          </div>
          <div className="flex justify-center mt-32 ml-1">
            <Image
            src="/assets/Rectangle 40.png"
            alt="Dining"
            width={250}
            height={400}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex mt-6 space-x-5">
            <div className="mt-14">
                <Image
                src="/assets/Rectangle 43.png"
                alt="Bed"
                width={200}
                height={350}
                className="w-full"
                />
            </div>
            <div>
            <Image
                src="/assets/Rectangle 45.png"
                alt="Dining"
                width={180}
                height={400}
                className="w-full"
                />
            </div>
            </div>
            <div className="flex gap-4 mt-4">
            <div>
            <Image
                src="/assets/Rectangle 41.png"
                alt="Frame"
                width={120}
                height={150}
                className="w-full"
                />
            </div>
            <div>
            <Image
                src="/assets/Rectangle 44.png"
                alt="Kitchen Utensils"
                width={170}
                height={120}
                />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Furniro;
