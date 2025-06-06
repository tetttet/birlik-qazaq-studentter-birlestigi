import React from "react";

const Content = () => {
  return (
    <>
      <div className="mb-20">
        <div className="bg-grey-default">
          <div className="mx-auto container w-full flex items-center md:flex-row flex-col justify-between px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start lg:w-2/5 px-2 lg:px-0">
              <div>
                <p className="lg:text-sm text-xs text-gray-600 dark:text-black font-medium leading-none">Kanban Software</p>
              </div>
              <div className="md:mt-3">
                <p className="text-gray-800 dark:text-black lg:text-4xl text-3xl font-extrabold leading-9">Trello x Webber</p>
              </div>
              <div className="md:mt-3">
                <p className="lg:text-base text-sm leading-normal text-gray-600 dark:text-black">Learn how Trello has leveraged Webber to consolidate it’s diverse range of services software</p>
              </div>
              <div className="grid grid-cols-2 mt-8 gap-y-6">
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Industry: <span className="font-semibold md:font-medium">Technology</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Use case: <span className="font-semibold md:font-medium">Developer operations</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Since: <span className="font-semibold md:font-medium">2018</span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-black text-sm lg:text-base font-medium leading-none">
                    Package: <span className="font-semibold md:font-medium">Enterprise+ </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center lg:w-2/5 mt-10 md:mt-0">
              <img className="w-full rounded-lg" src="https://i.ibb.co/181DvLN/Project-Cover-6.png" alt="laptops" />
            </div>
          </div>
          <div className="mx-auto container w-full flex xl:flex-row flex-col justify-between items-start mt-12 px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start xl:w-2/4">
              <div>
                <h2 className="text-gray-800 dark:text-black lg:text-3xl text-2xl font-bold leading-7">The details</h2>
              </div>
              <div className="mt-8">
                <p className="text-gray-800 dark:text-black lg:text-base text-sm leading-normal">
                  Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a
                  short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph.
                </p>
              </div>
            </div>
            <div className="px-4 md:px-0 lg:px-16 mt-10 xl:mt-0 h-full xl:w-2/5 w-full flex justify-center items-center bg-gradient-to-l bg-primary-default">
              <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center my-10">
                <div>
                  <p className="md:text-2xl text-lg font-semibold text-center lg:text-left leading-normal text-white">Get Webber for your organization</p>
                </div>
                <div className="mt-8">
                  <p className="md:text-base text-xs text-center lg:text-left leading-normal text-white">If you're looking for random facts, you've arrived at the correct webpage. The Random Fact Generator has thousands of facts ready to be revealed with a simple click of a mouse.</p>
                </div>
                <div className="mt-8 flex flex-row justify-start items-center space-x-4">
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2  text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 bg-white rounded-sm hover:bg-gray-100">Start trial</button>
                  </div>
                  <div className>
                    <button className="btn focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-black text-xs lg:text-base border border-white py-2 px-4 md:py-4 md:px-8 text-white rounded-sm hover:bg-white ">Contact sales</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;