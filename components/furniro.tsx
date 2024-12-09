import Image from "next/image";

const Furniro = () => {
  return (
    <section className="w-full h-screen mt-6">
      <div className="text-center">
        <div>
          <h6 className="text-[#616161] font-semibold text-xl text-center">Share your setup with</h6>
          <h1 className="text-[#3A3A3A] font-bold text-[40px]">#FuniroFurniture</h1>
        </div>
        <div className="ml-28 flex">
          <div className="flex flex-col w-[35%]">
            <div className="flex mt-6 space-x-5">
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
          <div className="mt-32 ml-1">
            <Image
            src="/assets/Rectangle 40.png"
            alt="Dining"
            width={250}
            height={400}
            />
          </div>
          <div className="w-[40%] flex flex-col ml-10 mr-16">
            <div className="flex mt-6 space-x-5">
            <div className="mt-14">
                <Image
                src="/assets/Rectangle 43.png"
                alt="Bed"
                width={200}
                height={350}
                />
            </div>
            <div>
            <Image
                src="/assets/Rectangle 45.png"
                alt="Dining"
                width={180}
                height={400}
                />
            </div>
            </div>
            <div className="flex space-x-4 mt-4">
            <div>
            <Image
                src="/assets/Rectangle 41.png"
                alt="Frame"
                width={120}
                height={150}
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
