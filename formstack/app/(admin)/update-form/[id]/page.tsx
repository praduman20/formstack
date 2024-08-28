"use client";

import CategoriesComp from "@/components/CategoriesComp";
import NumericRatingComp from "@/components/NumericRatingComp";
import RadioComp from "@/components/RadioComp";
import SingleLineComp from "@/components/SingleLineComp";
import SmileyRatingComp from "@/components/SmileyRatingComp";
import StarRatingComp from "@/components/StarRatingComp";
import TextareaComp from "@/components/TextareaComp";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChartBarStacked,
  ChartNoAxesColumnIncreasingIcon,
  CircleCheck,
  Edit,
  Plus,
  SmileIcon,
  Star,
  Text,
  TextCursorInput,
} from "lucide-react";
import { ReactElement, useState } from "react";
import { toast } from "sonner";

function page() {
  const [formComponents, setFormComponents] = useState<ReactElement[]>([]);

  const handleButtonClick = (component: ReactElement) => {
    if (formComponents.length >= 7) {
      toast.error("You cannot add more than 7 input fields.");
      return;
    }
    setFormComponents([...formComponents, component]);
  };

  return (
    <div className="flex flex-row h-full w-full bg-white border-t-2">
      {/* Left section */}
      <div className="bg-gray-100 w-[75vw] flex flex-col justify-center items-center">
        <div className="h-[70vh] min-w-[35vw] max-w-fit bg-white rounded-md flex flex-col overflow-y-auto">
          <div className="bg-[#00a6ca] text-white p-4 rounded-t-md flex flex-row justify-between">
            <div className="flex flex-row">
              <p>
                <ArrowLeft />
              </p>
              <p className="ml-2">Generic website rating</p>
            </div>
            <div>
              <p>
                <Edit />
              </p>
            </div>
          </div>
          <form className="w-full">
            {formComponents.map((Component, index) => (
              <div key={index}>{Component}</div>
            ))}
            {formComponents.length > 0 && (
              <div className="flex w-[96%] p-2 mx-2 my-3 border-zinc-400 items-center justify-center">
                <Button type="submit" disabled={true} className="bg-[#00a6ca]">
                  Submit
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
      {/* Right section */}
      <div className="w-[25vw] flex flex-col justify-start p-4">
        <h1 className="text-xl font-semibold text-[#00a6ca] p-2">Add fields</h1>
        <ul className="flex flex-col gap-3 mt-1 p-2 overflow-auto">
          <li
            onClick={() => handleButtonClick(<TextareaComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <Text className="h-5" /> Textarea
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<NumericRatingComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <ChartNoAxesColumnIncreasingIcon className="h-5" /> Numeric Rating
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<StarRatingComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <Star className="h-5" /> Star Rating
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<SmileyRatingComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <SmileIcon className="h-5" /> Smiley Rating
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<SingleLineComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <TextCursorInput className="h-5" /> Single line input
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<RadioComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <CircleCheck className="h-5" /> Radio Button
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
          <li
            onClick={() => handleButtonClick(<CategoriesComp />)}
            className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
          >
            <p className="flex flex-row gap-2 items-center">
              <ChartBarStacked className="h-5" /> Categories
            </p>
            <p className="text-[#00a6ca]">
              <Plus />
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
