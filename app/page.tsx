"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { Globe } from "@/components/magicui/globe";
import { ArrowRight, Image, TabletSmartphone, Recycle, Clock, CloudUpload, Share2 } from "lucide-react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Lamhat{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Digital Photo Frame
            </span>
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            "Lamhat" - An Arabic word meaning "moments," capturing and displaying your cherished memories
          </p>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn any digital device into a beautiful cloud-connected photo frame. Give new life to your old tablets and displays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/user/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Interactive Globe Background */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <Globe />
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Give Your Old Devices a New Purpose
            </h2>
            <p className="text-xl text-gray-600">
              Repurpose your unused tablets and screens into beautiful photo displays
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MagicCard
              className="p-6"
              gradientFrom="#4F46E5"
              gradientTo="#7C3AED"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white/10 rounded-lg mb-4">
                  <TabletSmartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Device Compatibility
                </h3>
                <p className="text-white/80">
                  Works with iPads, Android tablets, and other digital displays, even older models
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="p-6"
              gradientFrom="#10B981"
              gradientTo="#3B82F6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white/10 rounded-lg mb-4">
                  <CloudUpload className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Cloud Connected
                </h3>
                <p className="text-white/80">
                  Upload and manage photos from anywhere, automatically sync across all your frames
                </p>
              </div>
            </MagicCard>

            <MagicCard
              className="p-6"
              gradientFrom="#F59E0B"
              gradientTo="#EF4444"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-white/10 rounded-lg mb-4">
                  <Recycle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Sustainable Solution
                </h3>
                <p className="text-white/80">
                  Reduce e-waste by giving new life to devices that would otherwise be discarded
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Set Up Your Digital Frame in Minutes
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                    <span className="text-white font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Install Lamhat App</h3>
                    <p className="text-gray-600">
                      Download our app on your old tablet or device
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                    <span className="text-white font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Upload Photos</h3>
                    <p className="text-gray-600">
                      Add photos from your phone or computer to your Lamhat gallery
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                    <span className="text-white font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enjoy Your Photos</h3>
                    <p className="text-gray-600">
                      Your device automatically displays your photos in beautiful slideshows
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/user/signup">
                  <Button size="lg">
                    Start Creating Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div 
              className="relative aspect-[3/4] sm:aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 border-[12px] border-gray-800 rounded-lg z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-b-lg"></div>
              </div>
              <MagicCard
                className="absolute inset-0"
                gradientFrom="#4F46E5"
                gradientTo="#7C3AED"
              >
                <div className="relative w-full h-full p-2 z-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-opacity-10 text-9xl font-bold">
                      Lamhat
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-semibold">Family Vacation 2023</h4>
                    <p className="text-sm opacity-80">42 photos • Updated 3 days ago</p>
                  </div>
                </div>
              </MagicCard>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect For
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Family Slideshows</h3>
              <p className="text-gray-600 text-sm">Share memories in your living room</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Image className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Office Displays</h3>
              <p className="text-gray-600 text-sm">Showcase your team and culture</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <Share2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Grandparents</h3>
              <p className="text-gray-600 text-sm">Keep them updated with family photos</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                <TabletSmartphone className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-2">Old Devices</h3>
              <p className="text-gray-600 text-sm">Repurpose your iPad Air 1st Gen</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Old Device?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join others who have given their unused tablets a new purpose as beautiful digital photo frames.
          </p>
          <Link href="/user/signup">
            <Button size="lg">
              Create Your Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} Lamhat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}