import React from 'react'
import {BiLogoFacebook, BiLogoGithub} from 'react-icons/bi'
export default function Footer() {
  return (
    <footer className="mt-12 bottom-0 bg-slate-100 px-12">
        <div className="container mx-auto w-full max-w-screen-xl">
          <div className="grid gap-8 px-4 py-6 lg:py-8 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
            <div className='flex flex-col items-center justify-center'>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                <ul className="text-gray-800 font-medium flex flex-col items-center justify-center">
                    <li className="mb-4">
                        <a href="#" className=" hover:underline">About</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Brand Center</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                <ul className="text-gray-700 font-medium flex flex-col items-center justify-center">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="px-4 py-6 md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between flex flex-col items-center justify-center gap-4">
            <div className="flex gap-4 mt-4  sm:justify-center md:mt-0">
                <a href="#" target='blank' className="text-gray-700 hover:text-gray-900">
                      <BiLogoFacebook className='w-8 h-8'/>
                      <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="https://github.com/Shuvo-Roy" target='blank' className="text-gray-700 hover:text-gray-900 ">
                      <BiLogoGithub className='w-8 h-8'/>
                      <span className="sr-only">GitHub account</span>
                  </a>
            </div>
            <span className="text-md text-gray-800 sm:text-center">© 2023 <a href="#">Rent A House</a>. All Rights Reserved.
            </span>
          </div>
        </div>
    </footer>
  )
}
