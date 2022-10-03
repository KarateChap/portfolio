import Image from "next/image";
import Angular from "@public/stack/Angular.png";
import Firebase from "@public/stack/Firebase.png";
import Javascript from "@public/stack/Javascript.png";
import Ionic from "@public/stack/Ionic.png";
import Html from "@public/stack/Html.png";
import Css from "@public/stack/Css.png";
import Java from "@public/stack/Java.png";
import cpp from "@public/stack/cpp.png";
import MySql from "@public/stack/MySql.png";
import Cs from "@public/stack/Cs.png";
import Solidity from "@public/stack/solidity.png";
import ReactJs from "@public/stack/React.png";
import MongoDb from "@public/stack/MongoDb.png";
import Tailwind from "@public/stack/Tailwind.png";
import NodeJs from "@public/stack/Node.png";

const STACK_IMAGES = [
  Angular,
  ReactJs,
  Solidity,
  Firebase,
  Javascript,
  Ionic,
  Html,
  Css,
  Java,
  cpp,
  MySql,
  Cs,
  MongoDb,
  Tailwind,
  NodeJs,
];

export default function Stack() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center gap-10 mt-[200px] md:mt-0" id="technologies">
      <h1 className="text-4xl font-bold text-center">Technologies I use</h1>
      <div className="flex flex-wrap gap-5 max-w-[600px]  justify-center">
        {STACK_IMAGES.map((stack, index) => {
          return (
            <div key={stack + '' + index} className="bg-[#333333] rounded-xl p-4 flex items-center justify-center">
            <Image  src={stack} alt="/" width={75} height={75}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
