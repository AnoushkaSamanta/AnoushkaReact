import React from "react";
import {motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragTransition={{bounceStiffness:100,bounceDamping:30}} className="relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-s mt-5 leading-tight">
        {data.desc}
      </p>
      <div className=" absolute  w-full  left-0 py-2 mt-[28px]">
        <div className="flex items-center justify-between px-8">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
           {data.close? <IoCloseSharp />:<LuDownload />}
           
          </span>
        </div>
      </div>
      {data.tag.isOpen &&(      <div className={`absolute w-full h-[40px] ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} mt-[5px] bottom-0 left-0 flex justify-center items-center`}>
       <h3 className="font-semibold">{data.tag.tagTitle}</h3>
      </div>)}

    </motion.div>
  );
}

export default Card;
