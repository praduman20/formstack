import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function RadioComp() {
  return (
    <div className="grid w-[96%] gap-1.5 p-2 mx-2 my-3 border-zinc-400 shadow-gray-400 shadow-md rounded-md">
      <Label htmlFor="radio">
        How likely it is that you will recommend us to your friends and family?
      </Label>
      <RadioGroup defaultValue="comfortable" id="radio" className="mt-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="radio1" id="r1" />
          <Label htmlFor="r1">Radio 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="radio2" id="r2" />
          <Label htmlFor="r2">Radio 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="radio3" id="r3" />
          <Label htmlFor="r3">Radio 3</Label>
        </div>
      </RadioGroup>
    </div>
  );
}

export default RadioComp;
