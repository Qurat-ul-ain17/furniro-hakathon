import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const Products = () => {
  return (
    <section className="h-screen mt-12 px-40">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Card 1 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/sytherine.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Sytherine</h3>
              <p className="text-gray-500 mb-2">Stylish Cafe Chair</p>
              <div className="text-lg font-bold text-gray-800">
                Rp 2500.000
                <span className="text-sm text-gray-500 line-through ml-2">
                  Rp 3500.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/leviosa.png"
                alt="Leviosa"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Leviosa</h3>
              <p className="text-gray-500 mb-2">Stylish Cafe Chair</p>
              <div className="text-lg font-bold text-gray-800">Rp 2500.000</div>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/lolito.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Lolito</h3>
              <p className="text-gray-500 mb-2">Luxury Big Sofa</p>
              <div className="text-lg font-bold text-gray-800">
                Rp 7.000.000
                <span className="text-sm text-gray-500 line-through ml-2">
                  Rp 14.00.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/respiro.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Respira</h3>
              <p className="text-gray-500 mb-2">Outdoor bar table and stool</p>
              <div className="text-lg font-bold text-gray-800">
                Rp 500.000
                <span className="text-sm text-gray-500 line-through ml-2">
                  Rp 3500.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 5 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/Grifo.png"
                alt="Grifo"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Grifo</h3>
              <p className="text-gray-500 mb-2">Night lamp</p>
              <div className="text-lg font-bold text-gray-800">
                Rp 1.500.000
              </div>
            </CardContent>
          </Card>
          {/* Card 6 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/muggo.png"
                alt="Muggo"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Muggo</h3>
              <p className="text-gray-500 mb-2">Small mug</p>
              <div className="text-lg font-bold text-gray-800">Rp 150.000</div>
            </CardContent>
          </Card>
          {/* Card 7 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/pingky.png"
                alt="Pingky"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Pingky</h3>
              <p className="text-gray-500 mb-2">Cute bed set</p>
              <div className="text-lg font-bold text-gray-800">
                Rp 7.000.000
                <span className="text-sm text-gray-500 line-through ml-2">
                  Rp 15.000.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 8 */}
          <Card className="bg-[#F4F5F7]">
            <CardHeader>
              <Image
                src="/assets/potty.png"
                alt="Potty"
                width={100}
                height={300}
                className="w-full h-56"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Potty</h3>
              <p className="text-gray-500 mb-2">Minamalist flower pot</p>
              <div className="text-lg font-bold text-gray-800">Rp 500.000</div>
            </CardContent>
          </Card>
        </div>
        <Button
          variant="outline"
          className="mt-8 px-10 text-base font-semibold text-[#B88E2F] border-2 border-[#B88E2F]"
        >
          Show More
        </Button>
      </div>
    </section>
  );
};

export default Products;
