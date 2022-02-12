import React from "react";
import { BiRightArrow  ,BiLeftArrow} from "react-icons/bi";
import { CgArrowLongRightC } from "react-icons/cg";


const Tldr = () => {
    return (
    <div className="bg-black text-4xl text-white w-full h-96 flex  flex-col justify-center items-center font-mono">
            <p className="flex items-center font-mono h-20 hover:underline decoration-green-600 hover:animate-pulse  decoration-wavy  decoration-4"><BiLeftArrow />Contributors<BiRightArrow/></p>
            <div className="w-full h-40 ">
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://twitter.com/kirito08922920" className="flex items-center hover:animate-pulse hover:underline  decoration-slate-600  decoration-double"> <BiLeftArrow /> Aryan kathawale </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Main contributor  and Programmer<BiRightArrow /></p>
                </div>
                            <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://instagram.com/ashwinawari" className="flex items-center hover:animate-pulse hover:underline  decoration-indigo-600  decoration-wavy"> <BiLeftArrow /> Ashwin Awari  </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Data Generator<BiRightArrow /></p>
                </div>
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/sumit_kshirsagar_/" className="flex items-center hover:animate-pulse hover:underline  decoration-red-600 decoration-dotted "> <BiLeftArrow /> Sumit Kshirsagar</a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Team Manager<BiRightArrow /></p>
                </div>
                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/sumit_kshirsagar_/" className="flex items-center hover:animate-pulse hover:overline  decoration-yellow-600 "> <BiLeftArrow /> Vibhor Sharma  </a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">Database Manager and varsion control<BiRightArrow /></p>
                </div>
                                <div className="flex justify-center gap-4  items-center text-sm">
                    <a href="https://www.instagram.com/sumit_kshirsagar_/" className="flex items-center hover:animate-pulse hover:overline  decoration-yellow-600 "> <BiLeftArrow /> You</a>
                    <CgArrowLongRightC/>
                    <p className="text-sm flex items-center ">for looking at the project 🖤🖤🖤. <BiRightArrow /></p>
                </div>
                
            </div>
    </div>);
};

export default Tldr