import React from "react";
import { SectionLayoutProps } from "./SectionLayout.type";

const SectionLayout = (props: SectionLayoutProps) => {
  return (
    <section>
      <div className="container mx-auto pt-4 pb-8 pl-10 pr-10">
        {props.children}
      </div>
    </section>
  );
};

export default SectionLayout;
