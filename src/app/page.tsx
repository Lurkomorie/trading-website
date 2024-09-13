import { TradeFormComponent } from "../components/trade-form";
import { FAQ } from "../components/faq";
import { VideoLogo } from "../components/video-logo";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col justify-center items-center pb-12">
      <div className="text-center py-8">
        <div className="flex flex-col items-center pb-6">
          <VideoLogo />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          Fast, Secure, and Anonymous Crypto-to-Cash Trading
        </h1>
        <p className="text-gray-600 text-opacity-70 text-lg mt-2">
          Trade Cryptocurrency for Cash Quickly—No Upfront Payments Required
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
    </div>
  );
}
