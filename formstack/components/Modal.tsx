// "use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Modal({ onCancel }: any) {
  const closeModal = false;
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = 1;
    router.push(`/update-form/${id}`);
  };

  const handleCancel = () => {
    onCancel(closeModal);
  };
  return (
    <div
      className="absolute top-[55%] left-[50%] translate-x-[-55%] translate-y-[-70%] bg-[#00a6ca]
    flex flex-col items-center justify-center p-10 m-10 rounded-md text-white"
    >
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold">
          Create Feedback Form
        </h1>
        <h2 className="font-light mt-1">
          Create a new form to get feedback from your customers.
        </h2>
        <form
          className="flex flex-col md:flex-row gap-2 mt-5"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Form Name..."
            className="max-w-lg text-black"
            required
          />
          <Button type="submit">Create</Button>
          <Button
            type="button"
            onClick={handleCancel}
            className="hover:bg-red-400"
          >
            Cancel
          </Button>
        </form>
        <p className="text-gray-200 mt-5">Example: Generic Website Rating</p>
      </div>
    </div>
  );
}

export default Modal;
