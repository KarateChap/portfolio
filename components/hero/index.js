import Typical from 'react-typical'
export default function Hero() {
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center gap-3 p-10" id="about">
      <h1 className="tracking-wider">Hi! I am</h1>
      <h1 className="text-4xl md:text-6xl font-bold opacity-90">Gabriel Mariano</h1>
      <div className="flex flex-wrap gap-4">
      <h1 className="text-4xl md:text-6xl font-bold opacity-70">
        I am passionate in
      </h1>
      <Typical
        steps={['Web 👌', 2000, 'Blockchain 🦾', 1000, 'Fintech 💸', 2000]}
        loop={Infinity}
        wrapper="p"
        className="text-4xl md:text-6xl font-bold opacity-70"
      />

      </div>
      <p className=" max-w-[550px] opacity-70">
        I am a graduate of Bachelor of Science in Information Technology and
        working part time as a web developer. I love playing chess, solving
        problems, coding, gaming, and reading books. <span className="text-yellow-300">I love computer a lot.</span>
      </p>
      <div>
        <button className="border border-1 border-yellow-300 px-10 py-3 mt-6 rounded-md hover:bg-yellow-300/10 transition-all duration-300 ">
          See my works
        </button>
      </div>
    </div>
  );
}
