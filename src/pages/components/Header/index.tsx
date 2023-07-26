import React from "react";
import { isWriteOpenAtom } from "@/pages/store";
import { useSetAtom } from "jotai";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiLogin, HiLogout } from "react-icons/Hi";
import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoReorderThreeOutline } from "react-icons/io5";

const Header = () => {
  const { data: sessionData, status } = useSession();
  const setIsWriteOpe = useSetAtom(isWriteOpenAtom);

  const renderAuthenticatedButtons = () => {
    return (
      <div className="flex space-x-4">
        <button
          onClick={() => setIsWriteOpe(true)}
          className="my-2 flex items-center space-x-3 rounded border  border-gray-200 px-4  py-2.5 transition hover:border-gray-900 hover:text-gray-900"
        >
          <div>Write</div>
          <div>
            <FiEdit />
          </div>
        </button>
        <button
          onClick={() => signOut()}
          className="my-2 flex items-center space-x-3 rounded border  border-gray-200 px-4  py-2.5 transition hover:border-gray-900 hover:text-gray-900"
        >
          <div>Logout</div>
          <HiLogout />
        </button>
      </div>
    );
  };

  const renderUnauthenticatedButton = () => {
    return (
      <button
        onClick={() => signIn()}
        className="my-2 flex items-center space-x-3 rounded border  border-gray-200 px-4  py-2.5 transition hover:border-gray-900 hover:text-gray-900"
      >
        <div>Signin</div>
        <HiLogin />
      </button>
    );
  };

  return (
    <header className="flex h-20 w-full flex-row items-center justify-around border-b-[1px] border-gray-300 bg-white ">
      <div>
        <IoReorderThreeOutline className="text-2xl text-gray-600" />
      </div>
      <div className="text-xl font-thin">Asong Blog App</div>
      <div className=" flex items-center space-x-4">
        <div>
          <BsBell />
        </div>
        <picture>
          <img
            className="h-10 w-10 rounded-full"
            src={sessionData?.user?.image || ""}
            alt=""
          />
        </picture>
        <div></div>
        <div>
          {status === "authenticated"
            ? renderAuthenticatedButtons()
            : renderUnauthenticatedButton()}
        </div>
      </div>
    </header>
  );
};

export default Header;
