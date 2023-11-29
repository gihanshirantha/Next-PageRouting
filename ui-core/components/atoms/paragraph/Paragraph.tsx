import React from "react";
import { ParagraphProps } from "./Paragraph.types";

const Paragraph: React.FC<ParagraphProps> = ({ para }) => {
  return (
    <>
      <p className="pt-3">{para}</p>
    </>
  );
};

export default Paragraph;
