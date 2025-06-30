"use client";

import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import CustomButton from "./ui/sheard/CustomButton";


export function Hero() {
  return (
    <section className="py-32 min-h-screen overflow-hidden relative"
    style={{
    backgroundImage: "url('/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:px-4">
        <div className="lg:max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white mb-8">
            Trusted
            <span className="bg-black text-white px-2 rounded-lg mb-8">
              Partner
            </span>
            for Your Website
            <span className="bg-black text-white px-2 rounded-lg">
              Develop.
            </span>
          </h1>
        </div>

        <div>
          {/* <div className="relative z-10"> */}
          {/* Side Social */}
          <div className="absolute left-0 flex items-center justify-center">
            <p className="-rotate-90 md:pl-8 text-sm font-semibold text-gray-700">
              @williamwoy
            </p>
            <div className=" -rotate-90 left-0 flex gap-2">

              <Link href="#">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
            {/* </div> */}
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Building the worlds best marketing websites for over a decade. Your
            trusted partner for strategy, design, and dev.
          </p>
          <CustomButton
            text="Schedule a Call"
            icon={<Phone size={20} />}
            iconPosition="left"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* button  */}
        </div>
      </div>
    </section>
  );
}
