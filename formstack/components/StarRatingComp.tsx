import { Rating, Typography } from "@mui/material";
import React, { useState } from "react";

function StarRatingComp() {
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
    </div>
  );
}

export default StarRatingComp;
