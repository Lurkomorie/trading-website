import React from "react";
import { TradeFormComponent } from "../../components/trade-form";
import { FAQ } from "../../components/faq";
import { SocialIcons } from "../../components/social-icons";
import LangChange from "../../components/lang-change";
import Title from "../../components/title";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col justify-center items-center pb-12 relative">
      <div className="absolute top-2 right-4">
        <LangChange />
      </div>
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f8f8] max-w-5xl mx-auto">
        <div className="col-span-1">
          <TradeFormComponent />
        </div>
        <div className="col-span-1">
          <FAQ />
        </div>
      </div>
      <div className="absolute bottom-2">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
