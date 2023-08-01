import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { HiChevronDown } from "react-icons/Hi";
import { CiSearch } from "react-icons/ci";
import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";
import WriteFormModal from "./components/WriteFormModal";
const HomePage = ({ session }: { session: Session }) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Header />
        <section className="grid h-full  w-full  grid-flow-col-dense grid-cols-12 place-items-center">
          <main className="col-span-8 h-full w-full border-r border-gray-300 px-14">
            <div className="flex w-full flex-col py-10 ">
              <div className="flex  w-full  flex-wrap items-center">
                <label
                  htmlFor="search"
                  className="relative mb-5 mr-5 w-1/2 min-w-fit  rounded-3xl border border-gray-900"
                >
                  <div className="absolute left-2 flex h-full items-center">
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search..."
                    title="search"
                    className="w-full rounded-3xl px-4 py-1  pl-7  text-gray-900 outline-none placeholder:text-xs"
                  />
                </label>
                <div className="max-w-1/2 mb-5 flex items-center space-x-4 first:ml-0 ">
                  <div>My topices:</div>
                  <div className="flex content-start items-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-3xl bg-gray-200/50 px-4 py-3"
                      >
                        tag{i}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-300 pb-5">
                <div>Articles</div>
                <div>
                  <button className="flex items-center space-x-2  rounded-xl border border-gray-800 px-4 py-1.5 font-semibold">
                    <div>Following</div>
                    <div>
                      <HiChevronDown className="text-xl" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center space-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-around space-y-4 border-b border-gray-300 py-4 last:border-none"
                >
                  <div className="flex w-full items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                    <div>
                      <div className="my-0.5 font-semibold">
                        asong &#x2022; 22 Dec, 2023
                      </div>
                      <div className="text-sm">
                        Founder, teacher & developer
                      </div>
                    </div>
                  </div>
                  <div className="grid h-full w-full grid-cols-12 gap-4">
                    <div className="col-span-8 flex flex-col space-y-2">
                      <p className="text-2xl font-bold">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quas, repellat.
                      </p>
                      <p className="break-words text-sm text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Officiis laboriosam consectetur necessitatibus ad
                        natus blanditiis rerum vel dolore. Error libero id modi,
                        magni vitae voluptas ullam sed cupiditate praesentium
                        dignissimos tenetur officiis sit, non a! Quam a quasi
                        assumenda at. Possimus quas odit exercitationem labore
                        nisi nemo maiores ad, veniam a cumque eos saepe.
                        Repudiandae sed necessitatibus eius corrupti ea!
                      </p>
                    </div>
                    <div className="col-span-4">
                      {" "}
                      <div className="h-full w-full rounded-xl bg-gray-300" />
                    </div>
                  </div>
                  <div>
                    <div className="flex w-full items-center justify-start space-x-4">
                      <div>My topices:</div>
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="rounded-3xl bg-gray-200/50 px-4 py-3"
                          >
                            tag{i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <aside className="col-span-4 h-full  w-full   flex-col  space-y-4 p-6 ">
            <div>
              <h3 className="my-6 text-lg font-semibold">
                People you might be interested
              </h3>
              <div className="flex flex-col space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex flex-row items-center space-x-5">
                    <div className="h-10 w-10 flex-none rounded-full bg-gray-500"></div>
                    <div className="text-sm font-bold text-gray-900">
                      {" "}
                      Lorem ipsum
                    </div>
                    <div className="text-xs">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio sit similique molestiae voluptas.
                    </div>
                    <div>
                      <button className="flex items-center space-x-3 rounded  border border-gray-400/50  px-4  py-2 transition hover:border-gray-900 hover:text-gray-900">
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="my-6 text-lg font-semibold">your reading list</h3>
              <div className="flex flex-col space-y-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="aspect-square w-2/5 space-x-2 rounded-xl bg-gray-300"></div>
                    <div className="w-3/5 flex-col space-y-2">
                      <div className="text-lg font-semibold">
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolorem debitis quo sapiente ea. Dolorum?{" "}
                      </div>
                      <div className="flex w-full items-center space-x-4">
                        <div className="h-8 w-8 flex-none rounded-full bg-gray-400"></div>
                        <div className="">asong &#x2022; 22 Dec, 2023</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
        <WriteFormModal />
      </MainLayout>
    </SessionProvider>
  );
};
export default HomePage;
