import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Inspiration = () => {
  return (
    <section className="bg-[#FCF8F3] w-full h-screen mt-72">
      <div className="ml-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="w-96 ml-8 content-center">
            <div>
              <h1 className="font-bold text-4xl text-[#3A3A3A] mt-20">
                50+ Beautiful rooms inspiration
              </h1>
              <p className="mt-4">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
            </div>
            <Button className="bg-[#B88E2F] mt-7">Explore More</Button>
          </div>
          <div className="mt-8">
            <Image
              src="/assets/Image.png"
              alt="Wall Image"
              height={450}
              width={350}
            />
          </div>
          <div className="flex flex-col">
            <div className="mt-8">
              <Image src="/assets/Rectangle 25.png" alt="Chair" height={380} width={320} />
            </div>
            <div className="mt-8">
              <Image src="/assets/indicator.png" alt="Move" height={50} width={100} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
