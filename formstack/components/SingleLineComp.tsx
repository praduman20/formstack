import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

function SingleLineComp() {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Label htmlFor="message">
        Do you have any suggestion to improve our website?
      </Label>
      <Input type="text" />
    </div>
  );
}

export default SingleLineComp;
