"use client";

import { BookText, PlusSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Modal from "@/components/Modal";
import { useState } from "react";

function CreateForm() {
  const [openModal, setOpenModal] = useState(false);
  const obj = {
    name: "testing form",
    submitted: "10",
    viewed: "55",
    datePublished: "12/01/2024",
  };

  const handleNewForm = () => {
    setOpenModal(true);
  };

  const handleCancel = (data: boolean) => {
    setOpenModal(data);
  };

  return (
    <div
      className={`bg-white p-5 mt-5 h-[70vh] w-[85vw] rounded-md overflow-y-auto ${
        openModal ? "bg-[#f3f4f6]" : "bg-white"
      }`}
    >
      {openModal && <Modal onCancel={handleCancel} />}
      {!openModal && (
        <ul
          className={`gap-5 flex lg:flex-row h-full w-full ${
            openModal ? "opacity-5" : "opacity-100"
          }`}
        >
          <li className="h-full">
            <Button
              className="flex flex-col text-center lg:text-left lg:flex-row items-center gap-2 p-5 
        rounded-md bg-[#00a6ca] hover:opacity-40 text-white h-[10vh]"
              onClick={handleNewForm}
            >
              <PlusSquare className="h-6 w-6 lg:h-8 lg:w-8" />
              <div className="hidden md:inline">
                <p className="text-xl font-semibold">New form</p>
              </div>
            </Button>
          </li>
          <li className="">
            <Card className="w-[20vw] h-[44vh] rounded-md">
              <CardHeader className="bg-[#00a6ca] rounded-t-md">
                <CardTitle className="text-white flex flex-row justify-between items-center">
                  <p className="text-xl">{obj.name}</p>
                  <p>
                    <BookText />
                  </p>
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4">
                <div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#00a6ca]" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        <label className="text-gray-400">Submitted: </label>
                        {obj.submitted}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#00a6ca]" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        <label className="text-gray-400">Viewed: </label>
                        {obj.viewed}
                      </p>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-[#00a6ca]" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        <label className="text-gray-400">
                          Date Published:{" "}
                        </label>
                        {obj.datePublished}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full flex flex-col justify-center items-center">
                  <Button className="w-[90%]">View Submissions</Button>
                  <div className="flex flex-row mt-2 w-[90%] gap-1">
                    <Button className="w-1/2">Edit</Button>
                    <Button className="w-1/2 hover:bg-red-400">Delete</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </li>
        </ul>
      )}
    </div>
  );
}

export default CreateForm;
