export default function About() {
  return (
    <div id="about" className="px-[20px] md:px-[80px] bg-gray-50 py-[48px] md:py-[96px] flex items-center w-full">
      <div className="flex flex-col gap-[48px] md:px-[32px] items-center w-full">
        <span className="bg-gray-200 px-[20px] py-[4px] rounded-[12px]">
          About me
        </span>

        <div className="flex w-full">
          <img src="" alt="" />
          <div className="flex flex-col gap-[24px]">
            <span className="font-semibold">
              Curious about me? Here you have it:
            </span>
            <span>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </span>
            <span>
              I began my journey as a web developer in 2021, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 3 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Reactjs,
              Tailwindcss, Firebase and much more.
            </span>
            <span>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </span>
            <span>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
