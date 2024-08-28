import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function TextareaComp() {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-2 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Label htmlFor="text-message">Your Message</Label>
      <Textarea placeholder="Type your message here." id="text-message" />
    </div>
  );
}

export default TextareaComp;
