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
    <section className="mt-12 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {/* Card 1 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/sytherine.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Sytherine</h3>
              <p className="text-mymediumgray mb-2">Stylish Cafe Chair</p>
              <div className="text-lg font-bold text-mylightblack">
                Rp 2500.000
                <span className="text-sm text-mylightestgray line-through ml-2">
                  Rp 3500.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/leviosa.png"
                alt="Leviosa"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Leviosa</h3>
              <p className="text-mymediumgray mb-2">Stylish Cafe Chair</p>
              <div className="text-lg font-bold text-mylightblack">Rp 2500.000</div>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/lolito.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Lolito</h3>
              <p className="text-mymediumgray mb-2">Luxury Big Sofa</p>
              <div className="text-lg font-bold text-mylightblack">
                Rp 7.000.000
                <span className="text-sm text-mylightestgray line-through ml-2">
                  Rp 14.00.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 4 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/respiro.png"
                alt="sytherine"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Respira</h3>
              <p className="text-mymediumgray mb-2">Outdoor bar table and stool</p>
              <div className="text-lg font-bold text-mylightblack">
                Rp 500.000
                <span className="text-sm text-mylightestgray line-through ml-2">
                  Rp 3500.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 5 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/Grifo.png"
                alt="Grifo"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Grifo</h3>
              <p className="text-mymediumgray mb-2">Night lamp</p>
              <div className="text-lg font-bold text-mylightblack">
                Rp 1.500.000
              </div>
            </CardContent>
          </Card>
          {/* Card 6 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/muggo.png"
                alt="Muggo"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Muggo</h3>
              <p className="text-mymediumgray mb-2">Small mug</p>
              <div className="text-lg font-bold text-mylightblack">Rp 150.000</div>
            </CardContent>
          </Card>
          {/* Card 7 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/pingky.png"
                alt="Pingky"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Pingky</h3>
              <p className="text-mymediumgray mb-2">Cute bed set</p>
              <div className="text-lg font-bold text-mylightblack">
                Rp 7.000.000
                <span className="text-sm text-mylightestgray line-through ml-2">
                  Rp 15.000.000
                </span>
              </div>
            </CardContent>
          </Card>
          {/* Card 8 */}
          <Card className="bg-mylightgray">
            <CardHeader>
              <Image
                src="/assets/potty.png"
                alt="Potty"
                width={100}
                height={300}
                className="w-full h-56 object-cover"
              />
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold text-mylightblack">Potty</h3>
              <p className="text-mymediumgray mb-2">Minamalist flower pot</p>
              <div className="text-lg font-bold text-mylightblack">Rp 500.000</div>
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
