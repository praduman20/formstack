import { Rating, Typography } from "@mui/material";
import { Edit, Trash } from "lucide-react";
import React, { useState } from "react";

interface StarRatingComp {
  onDelete: () => void;
}

function StarRatingComp({ onDelete }: StarRatingComp) {
  const [value, setValue] = useState<number | null>(2);
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Typography>Give a star rating for the website</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className="text-[#00a6ca]"
      />
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

export default StarRatingComp;
