import React from "react";
import Modal from "../Modal";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isWriteOpenAtom } from "@/pages/store";

type writeFormType = {
  title: string;
  shortDescription: string;
  mainBody: string;
};

const writeFormShema = z.object({
  title: z.string().min(10, "最少十个字"),
  shortDescription: z.string().min(30, "最少30字"),
  mainBody: z.string().min(100, "至少100字"),
});

const WriteFormModal = () => {
  const [isWriteOpen, setIsWriteOpen] = useAtom(isWriteOpenAtom);
  console.log(isWriteOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<writeFormType>({
    resolver: zodResolver(writeFormShema),
  });
  const onSubmit: SubmitHandler<writeFormType> = (data) => {
    console.log(data);
    setIsWriteOpen(false);
  };

  return (
    <Modal isOpen={isWriteOpen} onClose={() => setIsWriteOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <input
          {...register("title")}
          type="text"
          placeholder="Title of the blog"
          id="title"
          className="h-full w-full rounded-xl border border-gray-300 p-4  outline-none focus:border-gray-900"
        />
        <p>{errors.title?.message}</p>

        <input
          {...register("shortDescription")}
          type="text"
          placeholder="Short Description about blog"
          id="shortDescription"
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-900"
        />
        <p>{errors.shortDescription?.message}</p>
        <textarea
          {...register("mainBody")}
          id="mainBody"
          cols={30}
          rows={10}
          className="h-full  w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-900"
        ></textarea>
        <p>{errors.mainBody?.message}</p>
        <div className="flex h-full w-full justify-end">
          <button
            type="submit"
            className=" my-2 space-x-3  rounded border border-gray-200 px-4  py-2.5  transition hover:border-gray-900 hover:text-gray-900"
          >
            <div>Publish</div>
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default WriteFormModal;
