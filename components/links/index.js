import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";


export default function Links(){
    return (
        <div className="bg-yellow-400/90 w-[110px] h-[5vh] fixed bottom-10 right-0 p-3 rounded-tl-xl rounded-bl-xl flex gap-2 shadow-xl z-[100]">
        <a
          href="https://github.com/KarateChap"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-2xl text-[#0a0a0a] hover:text-white transition-all duration-200 hover:translate-y-[-2px] cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/ralphgabrielmariano/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-2xl text-[#0a0a0a] hover:text-white transition-all duration-200 hover:translate-y-[-2px] cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/mooseee0222/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook className="text-2xl text-[#0a0a0a] hover:text-white transition-all duration-200 hover:translate-y-[-2px] cursor-pointer" />
        </a>
      </div>
    )
}