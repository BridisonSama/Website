// Website of jayantkageri, NextJS Site for jayantkageri.in
// Copyright (C) 2021 - 2023 Jayant Hegde Kageri <https://github.com/jayantkageri>

// This file is part of Website of jayantkageri.

// Website of jayantkageri is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Website of jayantkageri is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with Website of jayantkageri.  If not, see <https://www.gnu.org/licenses/>.

import React from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { Inter } from "@next/font/google";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

type Page<P = {}, IP = P> = NextPage<P, IP> & { title?: string };
const inter = Inter({ weight: "400", style: "normal", subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  // States
  const [info, setInfo] = React.useState<{
    page: string | null;
    notice: boolean;
    cookies: boolean | null;
  }>({ notice: false, page: null, cookies: null });
  const router = useRouter();

  // AGPL-3.0-or-later License Notice
  if (!info?.notice) {
    console.info("Website of jayantkageri, NextJS Site for jayantkageri.in");
    console.info(
      `Copyright (C) ${
        new Date().getFullYear() === 2021
          ? 2021
          : `2021 - ${new Date().getFullYear()}`
      } Jayant Hegde Kageri < https://github.com/jayantkageri >`
    );
    console.info(
      "This website is licensed under GNU Affero General Public License v3.0 or later (AGPL-3.0-or-later)."
    );
    console.info(
      "You can find the source code at https://links.jayantkageri.in/source-code"
    );

    setInfo({ ...info, notice: true });
  }

  React.useEffect(() => {
    // Checking if cookies are enabled.
    if (info.cookies === null && typeof window !== "undefined") {
      setInfo({ ...info, cookies: !!localStorage.getItem("cookies") });
      !localStorage.getItem("cookies") &&
        toast.custom(
          (t) => (
            <div
              className={`${inter.className} ${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-gray-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-2 h-10 w-10 rounded-full">
                    <svg
                      version="1.1"
                      id="cookies"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 416.991 416.991"
                    >
                      <g>
                        <g>
                          <path
                            fill="#D4B783"
                            d="M344.649,204.32c-7.807,3.62-16.314,5.501-25.067,5.503c-10.392,0.001-20.665-2.759-29.711-7.982
			c-16.886-9.749-27.772-27.175-29.52-46.218c-19.143-1.749-36.518-12.726-46.216-29.523c-9.747-16.882-10.465-37.41-2.462-54.773
			c-12.251-8.607-20.792-21.491-23.926-36.143c-41.698,1.338-79.982,16.399-110.502,40.79c7.997,7.752,12.731,18.522,12.731,30.139
			c0,14.868-7.772,27.946-19.461,35.412c-6.518,4.163-14.248,6.588-22.539,6.588c-5.841,0-11.538-1.211-16.78-3.498
			c-0.026,0.027-0.052,0.053-0.078,0.08c-1.962,5.439-3.673,10.997-5.136,16.655C22.086,176.423,20,192.219,20,208.496
			c0,103.937,84.559,188.496,188.495,188.496c41.112,0,79.18-13.243,110.192-35.67c0.654-0.587,1.493-1.204,2.467-1.842
			c11.615-8.688,22.217-18.658,31.549-29.74c-10.812-7.738-17.66-20.402-17.66-34.193c0-9.15,2.95-17.619,7.937-24.526
			c7.339-10.164,19.105-16.916,32.449-17.425c0.523-0.029,1.057-0.049,1.615-0.049c0.404,0,0.807,0.014,1.21,0.026
			c1.405-8.275,2.272-16.73,2.548-25.333C366.147,225.109,353.26,216.57,344.649,204.32z M132.435,334.871
			c-13.093,0-24.803-6.025-32.512-15.445c-6.215-7.325-9.976-16.795-9.976-27.131c0-23.159,18.841-42,42-42
			c13.093,0,24.804,6.025,32.512,15.445c6.215,7.325,9.976,16.795,9.976,27.131C174.435,316.03,155.595,334.871,132.435,334.871z
			 M160.194,183.688c-13.093,0-24.803-6.025-32.512-15.445c-6.215-7.325-9.976-16.795-9.976-27.131c0-23.159,18.841-42,42-42
			c13.093,0,24.803,6.025,32.512,15.445c6.215,7.325,9.976,16.795,9.976,27.131C202.194,164.846,183.354,183.688,160.194,183.688z
			 M246.963,314.835c-16.814,0-31.855-7.727-41.767-19.815c-7.929-9.401-12.721-21.53-12.721-34.762c0-29.776,24.225-54,54-54
			c16.814,0,31.855,7.727,41.767,19.815c7.929,9.401,12.721,21.53,12.721,34.762C300.963,290.611,276.738,314.835,246.963,314.835z"
                          />
                          <path
                            fill="#89634A"
                            d="M159.706,163.111c12.131,0,22-9.869,22-22c0-12.131-9.869-22-22-22c-12.131,0-22,9.869-22,22
			C137.706,153.242,147.576,163.111,159.706,163.111z"
                          />
                          <path
                            fill="#89634A"
                            d="M131.948,314.295c12.131,0,22-9.869,22-22c0-12.131-9.869-22-22-22c-12.131,0-22,9.869-22,22
			C109.948,304.426,119.817,314.295,131.948,314.295z"
                          />
                          <path
                            fill="#89634A"
                            d="M69.977,106.111c0-6.503-2.838-12.494-7.563-16.596c-9.154,11.218-17.041,23.505-23.448,36.643
			c2.809,1.265,5.866,1.954,9.011,1.954C60.108,128.111,69.977,118.242,69.977,106.111z"
                          />
                          <path
                            fill="#89634A"
                            d="M355.043,295.546c0,7.423,3.79,14.218,9.724,18.234c8.124-12.02,14.894-25.024,20.101-38.79
			c-2.469-0.943-5.101-1.444-7.825-1.444C364.913,273.546,355.043,283.415,355.043,295.546z"
                          />
                          <path
                            fill="#89634A"
                            d="M246.475,294.259c18.748,0,34-15.253,34-34c0-18.748-15.252-34-34-34c-18.748,0-34,15.252-34,34
			C212.475,279.006,227.727,294.259,246.475,294.259z"
                          />
                        </g>
                        <g>
                          <path
                            fill="#89634A"
                            d="M192.218,114.556c5.926,7.242,9.488,16.489,9.488,26.555c0,23.159-18.841,42-42,42
			c-12.822,0-24.314-5.782-32.024-14.869c7.708,9.42,19.419,15.445,32.512,15.445c23.159,0,42-18.841,42-42
			C202.194,131.351,198.434,121.881,192.218,114.556z"
                          />
                          <path
                            fill="#89634A"
                            d="M173.948,292.295c0,23.159-18.841,42-42,42c-12.822,0-24.314-5.782-32.024-14.869
			c7.709,9.42,19.419,15.445,32.512,15.445c23.159,0,42-18.841,42-42c0-10.337-3.761-19.806-9.976-27.131
			C170.385,272.982,173.948,282.229,173.948,292.295z"
                          />
                          <path
                            fill="#89634A"
                            d="M300.475,260.259c0,29.776-24.225,54-54,54c-16.543,0-31.365-7.485-41.279-19.238
			c9.911,12.087,24.952,19.815,41.767,19.815c29.775,0,54-24.224,54-54c0-13.232-4.792-25.361-12.721-34.762
			C295.882,235.391,300.475,247.297,300.475,260.259z"
                          />
                          <path
                            d="M159.706,183.111c23.159,0,42-18.841,42-42c0-10.066-3.562-19.313-9.488-26.555c-7.708-9.42-19.418-15.445-32.512-15.445
			c-23.159,0-42,18.841-42,42c0,10.337,3.761,19.806,9.976,27.131C135.393,177.329,146.884,183.111,159.706,183.111z
			 M159.706,119.111c12.131,0,22,9.869,22,22c0,12.131-9.869,22-22,22c-12.131,0-22-9.869-22-22
			C137.706,128.98,147.576,119.111,159.706,119.111z"
                          />
                          <path
                            d="M131.948,334.295c23.159,0,42-18.841,42-42c0-10.066-3.562-19.313-9.488-26.555c-7.708-9.42-19.419-15.445-32.512-15.445
			c-23.159,0-42,18.841-42,42c0,10.337,3.761,19.806,9.976,27.131C107.634,328.513,119.125,334.295,131.948,334.295z
			 M131.948,270.295c12.131,0,22,9.869,22,22c0,12.131-9.869,22-22,22c-12.131,0-22-9.869-22-22
			C109.948,280.164,119.817,270.295,131.948,270.295z"
                          />
                          <path
                            d="M416.97,206.596l-0.013-0.831c-0.064-5.279-4.222-9.598-9.494-9.864c-14.875-0.751-28.007-9.639-34.27-23.193
			c-1.245-2.694-3.623-4.696-6.489-5.465c-2.867-0.769-5.927-0.224-8.353,1.487c-6.706,4.73-14.927,7.335-23.146,7.336
			c-6.964,0-13.857-1.854-19.935-5.363c-13.458-7.77-21.242-22.803-19.83-38.299c0.269-2.956-0.789-5.879-2.888-7.977
			c-2.1-2.1-5.033-3.154-7.977-2.889c-1.195,0.109-2.411,0.164-3.614,0.164c-14.272,0-27.562-7.662-34.683-19.996
			c-7.77-13.458-6.994-30.369,1.976-43.084c1.711-2.425,2.257-5.485,1.488-8.352c-0.768-2.867-2.77-5.245-5.464-6.49
			c-13.548-6.262-22.434-19.387-23.189-34.254c-0.268-5.269-4.583-9.424-9.858-9.492l-0.816-0.013C209.777,0.01,209.137,0,208.496,0
			C93.531,0,0.001,93.531,0.001,208.496s93.53,208.496,208.495,208.496s208.495-93.531,208.495-208.496
			C416.991,207.861,416.981,207.229,416.97,206.596z M62.414,89.515c4.725,4.102,7.563,10.093,7.563,16.596c0,12.131-9.869,22-22,22
			c-3.145,0-6.202-0.689-9.011-1.954C45.373,113.02,53.26,100.733,62.414,89.515z M364.768,313.781
			c-5.935-4.016-9.724-10.811-9.724-18.234c0-12.131,9.869-22,22-22c2.725,0,5.356,0.501,7.825,1.444
			C379.662,288.757,372.892,301.761,364.768,313.781z M390.948,255.926c-4.067-1.428-8.354-2.227-12.695-2.354
			c-0.403-0.012-0.806-0.026-1.21-0.026c-0.542,0-1.077,0.029-1.615,0.049c-13.344,0.509-25.11,7.26-32.449,17.425
			c-4.987,6.906-7.937,15.376-7.937,24.526c0,13.791,6.848,26.454,17.66,34.193c-9.332,11.082-19.935,21.052-31.549,29.74
			c-0.822,0.615-1.635,1.24-2.467,1.842c-31.012,22.428-69.08,35.67-110.192,35.67C104.559,396.991,20,312.433,20,208.496
			c0-16.276,2.085-32.073,5.983-47.148c1.463-5.657,3.174-11.215,5.136-16.655c0.012-0.032,0.022-0.065,0.034-0.098
			c0.014,0.006,0.029,0.011,0.044,0.018c5.242,2.287,10.938,3.498,16.78,3.498c8.291,0,16.021-2.425,22.539-6.588
			c11.688-7.466,19.461-20.544,19.461-35.412c0-11.617-4.733-22.387-12.731-30.139c-0.451-0.437-0.906-0.869-1.377-1.286
			c32.732-32.446,77.26-53.009,126.502-54.589c3.157,14.763,11.764,27.746,24.107,36.418c-8.064,17.495-7.341,38.179,2.48,55.19
			c9.771,16.925,27.278,27.985,46.567,29.748c1.761,19.188,12.729,36.747,29.744,46.57c9.114,5.262,19.466,8.043,29.936,8.042
			c8.82-0.001,17.392-1.897,25.258-5.544c8.676,12.343,21.661,20.947,36.427,24.102C396.436,228.84,394.398,242.665,390.948,255.926
			z"
                          />
                          <path
                            d="M246.475,314.259c29.775,0,54-24.224,54-54c0-12.961-4.593-24.868-12.233-34.185
			c-9.911-12.087-24.952-19.815-41.767-19.815c-29.775,0-54,24.224-54,54c0,13.232,4.792,25.361,12.721,34.762
			C215.11,306.774,229.932,314.259,246.475,314.259z M246.475,226.259c18.748,0,34,15.252,34,34c0,18.747-15.252,34-34,34
			c-18.748,0-34-15.253-34-34C212.475,241.511,227.727,226.259,246.475,226.259z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="mt-1 text-sm text-gray-400">
                      This site uses cookies to improve your experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    localStorage.setItem("cookies", "true");
                    setInfo({ ...info, cookies: true });
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:transition-colors duration-200"
                >
                  Accept cookies
                </button>
              </div>
            </div>
          ),
          {
            duration: Infinity,
            id: "cookies",
            position: "bottom-right",
          }
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info.cookies]);

  // Prevent accident closing of the tab in Contact form
  React.useEffect(() => {
    window.onbeforeunload = function (e) {
      e = e || window.event;
      // For IE and Firefox prior to version 4
      if (e) e.returnValue = "Leave site?";

      // For Safari
      return "Leave site?";
    };
  }, [router.pathname]);

  return (
    <>
      {/* Meta Tags for all the pages */}
      {/* @ts-ignore */}
      <Meta page={Component.title} />

      {/* Navbar */}
      <Navbar />
      {/* React Toastify */}
      <Toaster position="top-right" />
      <main className="bg-gray-900 min-h-screen text-slate-50">
        {/* Main content of the page */}
        <Component {...pageProps} />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
export type { Page };
