import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Delete, DeleteIcon, Edit, Trash } from "lucide-react";

interface TextAreaProps {
  onDelete: () => void;
}

function TextareaComp({ onDelete }: TextAreaProps) {
  return (
    <div
      className="grid w-[96%] gap-1.5 p-2 mx-2 my-2 border-zinc-400 shadow-gray-400 shadow-md rounded-md"
      data-swapy-item="a"
    >
      <Label htmlFor="text-message">Your Message</Label>
      <Textarea placeholder="Type your message here." id="text-message" />
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

export default TextareaComp;
