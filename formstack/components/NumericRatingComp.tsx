import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Edit, Trash } from "lucide-react";

interface NumericRatingCompProps {
  onDelete: () => void;
}

function NumericRatingComp({ onDelete }: NumericRatingCompProps) {
  const numericRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div
      className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md"
      data-swapy-item="b"
    >
      <Label>
        How likely it is that you will recommend us to your friends and family?
      </Label>
      <div className="flex flex-row my-2">
        {numericRating.map((el) => (
          <Button
            key={el}
            className="bg-white text-black border-zinc-400 border hover:bg-[#00a6ca] rounded-none"
          >
            {el}
          </Button>
        ))}
      </div>
      <div className="flex flex-row justify-end items-center gap-3 text-gray-400">
        <p className="h-6">
          <Edit />
        </p>
        <p>
          <Trash onClick={onDelete} />
        </p>
      </div>
    </div>
  );
}

export default NumericRatingComp;
