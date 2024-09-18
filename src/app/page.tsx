import { TradeFormComponent } from "../components/trade-form";
import { FAQ } from "../components/faq";
import { VideoLogo } from "../components/video-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col justify-center items-center pb-12 relative">
      <div className="text-center pt-8 md:py-8 px-4">
        <div className="flex flex-col items-center pb-0 md:pb-6">
          <VideoLogo />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 pt-4 md:pt-0">
          Fast, Secure, and Anonymous Crypto-to-Cash Trading
        </h1>
        <p className="text-gray-600 text-opacity-70 text-lg mt-2">
          Trade Cryptocurrency for Cash Quickly — No Upfront Payments Required
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f8f8] max-w-5xl mx-auto">
        <div className="col-span-1">
          <TradeFormComponent />
        </div>
        <div className="col-span-1">
          <FAQ />
        </div>
      </div>
      <div className="absolute bottom-2">
        <p className="text-gray-900 text-2xl md:text-3xl">
          or dm directly{" "}
          <a
            href="https://t.me/bigboss_exchange"
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            @bigboss
          </a>
        </p>
      </div>
    </div>
  );
}
