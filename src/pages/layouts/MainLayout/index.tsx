import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import { BsBell } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'
import { IoReorderThreeOutline } from 'react-icons/io5'

function MainLayout({ children }: React.PropsWithChildren) {

  const { data: sessionData, status } = useSession()
  return (
    <div>
      <header className="h-20 w-full flex flex-row justify-around items-center bg-white border-b-[1px] border-gray-300 ">
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className="font-thin text-xl">Asong Blog App</div>
        <div className=" flex items-center space-x-4">
          <div>
            <BsBell />
          </div>
          <div>
            <div className="w-5 h-5 bg-gray-600 rounded-full" />
          </div>
          <div>
            {
              status === "authenticated" ? <button className="flex transition hover:border-gray-900 my-2 hover:text-gray-900 rounded  space-x-3 items-center  border border-gray-200 px-4 py-2.5">
                <div>Write</div>
                <div>
                  <FiEdit />
                </div>
              </button> :
                <button onClick={() => signIn()} className="flex transition hover:border-gray-900 my-2 hover:text-gray-900 rounded  space-x-3 items-center  border border-gray-200 px-4 py-2.5">
                  <div>Signin</div>
                </button>}

          </div>
        </div>
      </header>
      {children}
    </div>
  )
}

export default MainLayout