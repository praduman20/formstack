import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Edit, Trash } from "lucide-react";

interface CategoriesCompProps {
  onDelete: () => void;
}

function CategoriesComp({ onDelete }: CategoriesCompProps) {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Label>Pick a subject and provied your feedback</Label>
      <div className="mt-2">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select your subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="bug">Bug</SelectItem>
              <SelectItem value="content">Content</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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

export default CategoriesComp;
