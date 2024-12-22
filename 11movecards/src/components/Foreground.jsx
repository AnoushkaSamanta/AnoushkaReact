import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
    const ref=useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quas illo, voluptatum beatae quibusdam explicabo?",
      filesize: "0.4mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quas illo, voluptatum beatae quibusdam explicabo?",
        filesize: "0.4mb",
        close: true,
        tag: {
          isOpen: false,
          tagTitle: "Download Now",
          tagColor: "green",
        },
      },
      {
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quas illo, voluptatum beatae quibusdam explicabo?",
        filesize: "0.4mb",
        close: true,
        tag: {
          isOpen: true,
          tagTitle: "Upload Now",
          tagColor: "blue",
        },
      },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
      {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
