import { CiSearch } from 'react-icons/ci';
import MainLayout from "./layouts/MainLayout";
import Modal from "./layouts/Modal";
import { HiChevronDown } from "react-icons/Hi";
import { useAtom } from 'jotai'
import { isWriteOpenAtom } from "./store/atom";
const HomePage = () => {
  const [isWriteOpen, setIsWriteOpen] = useAtom(isWriteOpenAtom)
  return (
    <MainLayout>
      <section className="grid grid-cols-12  grid-flow-col-dense  place-items-center w-full h-full">
        <main className="col-span-8 w-full h-full border-r px-14 border-gray-300">
          <div className="flex flex-col w-full py-10 ">
            <div className="flex  flex-wrap  items-center w-full">
              <label htmlFor="search" className="relative min-w-fit mr-5 mb-5 w-1/2  border border-gray-900 rounded-3xl">
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input type="text" name="search" id="search" placeholder="search..." title="search"
                  className="placeholder:text-xs rounded-3xl w-full text-gray-900  outline-none  py-1 px-4 pl-7" />
              </label>
              <div className="flex items-center max-w-1/2 space-x-4 first:ml-0 mb-5 ">
                <div>My topices:</div>
                <div className="flex content-start items-center space-x-2">
                  {Array.from({ length: 4 }).map((_, i) => <div key={i}
                    className="rounded-3xl bg-gray-200/50 px-4 py-3">tag{i}</div>)}
                </div>
              </div>
            </div>
            <div className="w-full justify-between flex items-center border-b border-gray-300 pb-5">
              <div>Articles</div>
              <div>
                <button className="flex space-x-2 items-center  font-semibold border border-gray-800 rounded-xl px-4 py-1.5" >
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center space-y-8">
            {
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex flex-col border-b border-gray-300 last:border-none justify-around space-y-4 py-4">
                  <div className="flex w-full items-center space-x-2" >
                    <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="my-0.5 font-semibold">asong &#x2022; 22 Dec, 2023</div>
                      <div className="text-sm">Founder, teacher & developer</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 w-full h-full gap-4" >
                    <div className="col-span-8 space-y-2 flex-col flex">
                      <p className="text-2xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, repellat.</p>
                      <p className="text-sm text-gray-500 break-words">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam consectetur necessitatibus ad natus blanditiis rerum vel dolore. Error libero id modi, magni vitae voluptas ullam sed cupiditate praesentium dignissimos tenetur officiis sit, non a! Quam a quasi assumenda at. Possimus quas odit exercitationem labore nisi nemo maiores ad, veniam a cumque eos saepe. Repudiandae sed necessitatibus eius corrupti ea!</p>
                    </div>
                    <div className="col-span-4"> <div className="h-full w-full rounded-xl bg-gray-300" /></div>
                  </div>
                  <div>
                    <div className="flex items-center w-full space-x-4 justify-start">
                      <div>My topices:</div>
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: 4 }).map((_, i) => <div key={i}
                          className="rounded-3xl bg-gray-200/50 px-4 py-3">tag{i}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
        <aside className="col-span-4 w-full h-full flex-col space-y-4 p-6 ">
          <div>
            <h3 className="my-6 text-lg font-semibold">People you might be interested</h3>
            <div className="flex flex-col space-y-4">
              {
                Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-row items-center space-x-5">
                    <div className="bg-gray-500 w-10 h-10 rounded-full flex-none"></div>
                    <div className="text-gray-900 font-bold text-sm"> Lorem ipsum</div>
                    <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio sit similique molestiae voluptas.</div>
                    <div>
                      <button className="flex transition border border-gray-400/50  hover:border-gray-900 hover:text-gray-900  rounded  space-x-3 items-center px-4 py-2">
                        Follow
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h3 className="my-6 text-lg font-semibold">your reading list</h3>
            <div className="flex flex-col space-y-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex space-x-6 items-center">
                  <div className="w-2/5 aspect-square rounded-xl bg-gray-300 space-x-2"></div>
                  <div className="w-3/5 flex-col space-y-2">
                    <div className="text-lg font-semibold">Lorem ipsum dolor sit amet consectetur.</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem debitis quo sapiente ea. Dolorum?  </div>
                    <div className="flex items-center space-x-4 w-full">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex-none"></div>
                      <div className="">asong &#x2022; 22 Dec, 2023</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <Modal isOpen={isWriteOpen} onClose={() => { setIsWriteOpen(false) }}>
        <div className='w-40 h-20' >你好</div>
      </Modal>
    </MainLayout>
  )
}
export default HomePage