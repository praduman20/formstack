"use client";

import React, { ReactElement, useState } from "react";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

function Page() {
  const [formComponents, setFormComponents] = useState<ReactElement[]>([]);
  const router = useRouter();

  const handleButtonClick = (component: ReactElement) => {
    if (formComponents.length >= 7) {
      toast.error("You cannot add more than 7 input fields.");
      return;
    }
    setFormComponents([...formComponents, component]);
  };

  const handleDeleteComponent = (index: number) => {
    setFormComponents(formComponents.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    router.push(`/create-form`);
  };

  return (
    <div className="flex flex-row h-full w-full bg-white border-t-2">
      {/* Left section */}
      <div className="bg-gray-100 w-[75vw] flex flex-col justify-center items-center">
        <div className="h-[70vh] min-w-[35vw] max-w-fit bg-white rounded-md flex flex-col overflow-y-auto">
          <div className="bg-[#00a6ca] text-white p-4 rounded-t-md flex flex-row justify-between">
            <div className="flex flex-row">
              <p onClick={handleBack}>
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
              <div key={index} data-swapy-slot={index}>
                {React.cloneElement(Component, {
                  onDelete: () => handleDeleteComponent(index),
                })}
              </div>
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
      <div className="w-[25vw] max-h-[74vh] flex flex-col justify-start p-4 overflow-y-auto">
        <div>
          <h1 className="text-xl font-semibold text-[#00a6ca] p-2">
            Add fields
          </h1>
          <ul className="flex flex-col gap-3 mt-1 p-2 overflow-auto">
            <li
              onClick={() =>
                handleButtonClick(
                  <TextareaComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  <NumericRatingComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
              className="flex flex-row rounded-md hover:opacity-50 bg-gray-100 p-2 justify-between"
            >
              <p className="flex flex-row gap-2 items-center">
                <ChartNoAxesColumnIncreasingIcon className="h-5" /> Numeric
                Rating
              </p>
              <p className="text-[#00a6ca]">
                <Plus />
              </p>
            </li>
            <li
              onClick={() =>
                handleButtonClick(
                  <StarRatingComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  <SmileyRatingComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  <SingleLineComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  <RadioComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
              onClick={() =>
                handleButtonClick(
                  <CategoriesComp
                    onDelete={() =>
                      handleDeleteComponent(formComponents.length)
                    }
                  />
                )
              }
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
        <div>
          <h1 className="text-xl font-semibold text-[#00a6ca] p-2">
            Add Logic
          </h1>
          <div className="flex flex-col gap-3 p-2">
            <Label
              htmlFor="urlCondition"
              className="flex flex-row justify-between"
            >
              <p>Show based on URL conditions</p>
              <Switch id="urlCondition" />
            </Label>
            <Input type="text" placeholder="Enter your URL" />
          </div>
          <div className="flex flex-col gap-3 p-2 overflow-auto">
            <Label
              htmlFor="dateCondition"
              className="flex flex-row justify-between"
            >
              <p>Show on a specific date</p>
              <Switch id="dateCondition" />
            </Label>
            <Input type="date" placeholder="Start Date" />
          </div>
          <div className="flex flex-col gap-3 p-2 overflow-auto">
            <Label
              htmlFor="timeCondition"
              className="flex flex-row justify-between"
            >
              <p>Show on a specific date</p>
              <Switch id="timeCondition" />
            </Label>
            <Input type="time" placeholder="Select Time" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
