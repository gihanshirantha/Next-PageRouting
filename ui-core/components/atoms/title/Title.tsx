import React from "react";
import { HeadingProps } from "./Title.types";

export const H1: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <p className="font-bold text-3xl">{title}</p>
    </>
  );
};

export const H2: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <p className="font-semibold text-xl">{title}</p>
    </>
  );
};

export const H3: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <p className="font-medium text-xl">{title}</p>
    </>
  );
};
