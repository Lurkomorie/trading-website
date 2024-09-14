"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { useToast } from "../hooks/use-toast";
import countries from "../lib/countries";

interface FormValues {
  country: string;
  city: string;
  telegram: string;
  tradeAmount: string;
}

export function TradeFormComponent(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<FormValues>();

  const { toast } = useToast();

  const selectedCountry = watch("country");
  const selectedCity = watch("city");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!data.country || !data.city || !data.telegram || !data.tradeAmount) {
      toast({
        title: "Form Incomplete",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("DATA", data);
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        toast({
          title: "Trade request submitted",
          description: "We will contact you via Telegram soon.",
        });
        reset();
      } else {
        console.error("Form submission failed:", response.statusText);
        toast({
          title: "Trade request failed",
          description: "Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCountryChange = (value: string) => {
    setValue("country", value);
    setValue("city", "");
    clearErrors(["country", "city"]);
  };

  const handleCityChange = (value: string) => {
    setValue("city", value);
    clearErrors("city");
  };

  const handleTelegramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.startsWith("@")) {
      value = value.slice(1);
    }
    setValue("telegram", value);
    clearErrors("telegram");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("tradeAmount", e.target.value);
    clearErrors("tradeAmount");
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
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Country Field */}
            <div className="space-y-2">
              <Label
                htmlFor="country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </Label>
              <Select
                onValueChange={handleCountryChange}
                value={selectedCountry || ""}
              >
                <SelectTrigger
                  className={`w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-200 rounded-none ${
                    errors.country ? "border-red-500" : ""
                  }`}
                >
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
            {/* City Field */}
            <div className="space-y-2">
              <Label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                City
              </Label>
              <Select
                disabled={!selectedCountry}
                onValueChange={handleCityChange}
                value={selectedCity || ""}
              >
                <SelectTrigger
                  className={`w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-200 rounded-none ${
                    errors.city ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue
                    placeholder={
                      selectedCountry ? "Select city" : "Select a country first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {selectedCountry &&
                    countries[selectedCountry]?.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            {/* Telegram Field */}
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
                  {...register("telegram", {
                    required: "Please enter your Telegram username.",
                  })}
                  onChange={handleTelegramChange}
                  className={`w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 pl-8 transition-all duration-200 rounded-none ${
                    errors.telegram ? "border-red-500" : ""
                  }`}
                  placeholder="Username"
                />
              </div>
            </div>
            {/* Amount Field */}
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
                  {...register("tradeAmount", {
                    required: "Please enter the trade amount.",
                  })}
                  onChange={handleAmountChange}
                  placeholder="Enter amount"
                  className={`w-full border-gray-300 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 pl-8 transition-all duration-200 rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    errors.tradeAmount ? "border-red-500" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 ease-in-out rounded-none"
          >
            Submit Trade Request
          </Button>
        </form>
      </div>
    </div>
  );
}
