import React from "react";
import { HeadingProps } from "./Title.types";

export const H1: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <h1 className="font-bold text-3xl">{title}</h1>
    </>
  );
};

export const H2: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <h2 className="font-semibold text-xl">{title}</h2>
    </>
  );
};

export const H3: React.FC<HeadingProps> = ({ title }) => {
  return (
    <>
      <h3 className="font-medium text-xl">{title}</h3>
    </>
  );
};
