import React from "react";

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi👋, I'm Zig.
              <br className="hidden lg:inline-block" />Learning something new every day!
            </h1>
            <p className="mb-8 leading-relaxed">
            Python software developer currently working part-time on AI training tools. Formerly a technical writer in Taiwan for around 10 years, I transitioned to coding to further develop my skill set.
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/zig-stegner/"
                className="inline-flex ml-4 bg-gray-800 border-0 py-2 px-6 rounded text-lg focus:outline-none hover:bg-gray-700 hover:text-white">
                <img 
                  src={process.env.PUBLIC_URL + '/LI-In-Bug.png'}
                  alt="Zig Stegner LinkedIn"
                />
              </a>
              <a href="https://github.com/zig-182"
              className="inline-flex ml-4 bg-gray-800 border-0 py-2 px-6 rounded text-lg focus:outline-none hover:bg-gray-700 hover:text-white">
                <img 
                  src={process.env.PUBLIC_URL + '/github-mark-white.png'}
                  alt="Zig Stegner GitHub"
                />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded-full h-auto"
          alt="hero"
          src={process.env.PUBLIC_URL + '/zig-professional-photo.jpg'}  
          style={{ width: '250px', height: '250px', borderRadius: '50%' }}  // Increase width and height for the circular image
        />
      </div>
        </div>
      </section>
    );
  }

