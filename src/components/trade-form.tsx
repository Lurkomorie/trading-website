"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countries = {
  USA: ["New York", "Los Angeles", "Chicago", "Houston"],
  UK: ["London", "Manchester", "Birmingham", "Glasgow"],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
  // Add more countries and cities as needed
};

export function TradeFormComponent() {
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>();
  const [telegramHandle, setTelegramHandle] = useState("");

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
  };

  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.startsWith("@")) {
      value = value.slice(1);
    }
    setTelegramHandle(value);
  };

  return (
    <div className="bg-[#f8f8f8] flex items-center justify-center p-4 text-gray-900">
      <div className="w-full max-w-md h-[578px] space-y-8 bg-white p-8 border border-gray-200 shadow-md">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Start Your Trade</h2>
          <p className="text-gray-600 text-opacity-70 text-sm">
            Please fill out the form below to initiate your transaction. One of
            our agents will contact you via Telegram to guide you through the
            next steps.
          </p>
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </Label>
              <Select onValueChange={handleCountryChange}>
                <SelectTrigger className="w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-200 rounded-none">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(countries).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                City
              </Label>
              <Select disabled={!selectedCountry}>
                <SelectTrigger className="w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-200 rounded-none">
                  <SelectValue
                    placeholder={
                      selectedCountry ? "Select city" : "Select a country first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {selectedCountry &&
                    countries[selectedCountry as keyof typeof countries].map(
                      (city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      )
                    )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="telegram"
                className="text-sm font-medium text-gray-700"
              >
                Telegram
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none font-medium">
                  @
                </span>
                <Input
                  id="telegram"
                  value={telegramHandle}
                  onChange={handleTelegramChange}
                  className="w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 pl-8 transition-all duration-200 rounded-none"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="tradeAmount"
                className="text-sm font-medium text-gray-700"
              >
                Amount (USD)
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none font-medium">
                  $
                </span>
                <Input
                  id="tradeAmount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter amount"
                  className="w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 pl-8 transition-all duration-200 rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
          </div>
          <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 ease-in-out rounded-none">
            Submit Trade Request
          </Button>
        </form>
      </div>
    </div>
  );
}
