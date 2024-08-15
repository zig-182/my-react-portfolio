import React from "react";
import { UserIcon } from "@heroicons/react/solid";

export default function Overview() {
    return (
        <section id="overview" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <UserIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                My Career
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              After studying Philosophy at the University of Nottingham, I moved to Taiwan to study Mandarin for a couple of years before immersing myself in Taiwan’s tech industry. I worked for ten years as a technical writer, gaining valuable work and life experience along the way. While I thoroughly enjoyed technical writing, I felt the need to learn coding to make more significant contributions and reach my full potential. After evaluating all options, I decided to return to the U.K. to focus on becoming a software developer. I am currently working part-time on a variety of projects that involve training AI models through coding, code review and enhancement, as well as training large language models. I am enthusiastic about this new career path, as it offers exciting opportunities for growth and innovation, and I am eager to apply my diverse skills to make a meaningful impact in the tech industry.
              </p>
            </div>
          </div>
        </section>
      );
}