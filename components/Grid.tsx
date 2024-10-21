import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          // remove icon prop
          // remove original classname condition
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImage={item.spareImage}
        />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
