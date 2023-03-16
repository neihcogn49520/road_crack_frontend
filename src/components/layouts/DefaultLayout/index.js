import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router"


function Sidebar() {
  return (
    <div className=" fixed top-0 left-0 bottom-0 z-50 flex w-60">
      <div
        aria-label="Sidebar"
        className="w-full h-screen lg:block bg-sky-600 max-h-screen"
      >
        <div className="relative w-full h-screen flex flex-col max-h-screen">
          <div className="h-14 bg-sky-700 text-white w-full text-xl text-center mb-px font-semibold py-3"> Road crack</div>
        </div>
      </div>
    </div>
  )
}

function PageHeader({ pageTitle }) {
  return (
    <div className="sticky top-0 z-50 flex shrink-0 items-center space-between w-full h-14 mb-px border-solid bg-white opacity-90 border-slate-400 shadow-xl">
      <div className="font-semibold text-xl px-4 py-2">{pageTitle}</div>
      <div></div>
    </div>
  );
}

function Footer() {
  //...
}

export default function DefaultLayout({ title, pageTitle, children }) {





  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/roadicon.ico" />
      </Head>
      <div className="flex min-h-400 flex-row justify-start">

        <Sidebar />
        <div className="w-full flex flex-row flex-nowrap">
          <div className="flex h-full w-60 shrink-0" />
          <div className="flex flex-col h-screen relative max-w-full w-full">
            {/* <PageHeader pageTitle={layoutPageTitle} /> */}
            <main className="h-full grow flex flex-col w-full bg-white">
              <div className="h-full p-5 w-full"> {children} </div>
            </main>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </>
  );
}