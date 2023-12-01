import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";


import { projectData } from '@/lib/data'
const Project = () => {
  return (
    <div>
      <div id='projects' className="mb-28 scroll-mt-28 text-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 lg:mt-4">
          <h2 className="text-5xl flex justify-center items-center">
           My Project
          </h2>
        </div>
        {projectData.map((val, idx) => {
          if (idx % 2) {
            return (
              <div key={val.title} className="relative ">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-10 place-items-center">
                  <div className="  max-w-3xl px-6 lg:px-10 py-1 pb-0 lg:py-9  order-3 lg:order-none lg:max-w-none rounded-2xl lg:bg-gray-100  lg:shadow-xl  lg:-mr-40 ">
                    <div >
                      <section className="lg:mr-20 text-center lg:text-start ">
                        <h2 className="text-2xl font-semibold  lg:mb-3 lg:px-2  tracking-tight text-primary  pt-3 lg:pt-0">
                          {val?.title}
                        </h2>
                        <p className="mt-2  lg:px-2  text-base  leading-6 text-gray-700  ">
                          {val?.description}
                        </p>
                        <div className="mt-4  lg:px-2 lg:mt-4 flex lg:items-start lg:justify-start items-center justify-center gap-x-6">
                          <div>
                            <Link
                              href="https://coursify-dun.vercel.app/"
                              target='_blank'
                              className="rounded-md bg-gray-700 flex  gap-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              
                              Test
                              <LuExternalLink className=' text-lg'/>
                            </Link>
                          </div>
                          <div>
                            <Link
                              href="https://github.com/JagannathShingne01/LMS_Client"
                              target='_blank'
                              className="rounded-md bg-gray-700 flex px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              
                              Code
                              <LuGithub className='ml-1 text-lg'/>
                            </Link>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="flex order-2 justify-center my-6 lg:my-10 mx-auto lg:order-none z-20">
                    <div>
                      <Image
                        src={val?.img}
                        alt={val?.title}
                        width={800}
                        className="md:h-[300px] md:w-[500px] rounded-xl lg:h-auto lg:w-auto mx-2"
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={val.title} className="relative ">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-14 place-items-center">
                  <div className=" max-w-3xl order-3 lg:order-none mx-auto px-6 lg:px-16 py-1 lg:py-9 lg:max-w-none rounded-2xl lg:bg-gray-100 backdrop-blur-2xl lg:shadow-xl lg:-ml-40 ">
                    <div >
                      <section className="lg:ml-16  text-center lg:text-start	mx-auto ">
                        <h2 className="text-2xl font-semibold lg:px-6  tracking-tight text-primary  pt-3 lg:pt-0">
                          {val?.title}
                        </h2>
                        <p className="mt-2  lg:px-6 text-base leading-6 text-gray-700 ">
                          {val?.description}
                        </p>
                      
                        <div className="mt-4  lg:px-6 lg:mt-4  flex lg:items-start lg:justify-start items-center justify-center gap-x-6">
                          <div>
                            <Link
                              href="https://pokedex-s6r4.vercel.app/"
                              target='_blank'
                              className="rounded-md flex gap-1 bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Test
                              <LuExternalLink className=' text-lg'/>
                            </Link>
                          </div>
                          <div>
                            <Link
                             href="https://github.com/JagannathShingne01/Pokedex"
                             target='_blank'
                              className="flex gap-1 rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                             Code
                             <LuGithub className='ml-1 text-lg'/>
                            </Link>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="my-6 lg:my-10 mx-auto order-2 lg:order-none flex justify-center  lg:col-start-1 z-20">
                    <div>
                      <Image
                        src={val?.img}
                        alt={val?.title}
                        width={800}
                        className="md:h-[300px] md:w-[500px]  rounded-xl lg:h-auto lg:w-auto "
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default Project