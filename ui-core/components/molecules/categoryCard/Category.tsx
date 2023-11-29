import React from "react";
import { CategoryProps } from "./Category.types";
import { H1 } from "../../atoms";
import { Card, CardTitle } from "../../organisms";
import Link from "next/link";
const Category: React.FC<CategoryProps> = ({ title, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <Card
          className={`${
            title === "Mens Clothing" ? "bg-mens" : "bg-womens"
          }   h-[200px] pt-20 `}
        >
          <CardTitle className=" text-primary-foreground">
            <H1 title={title} />
          </CardTitle>
        </Card>
      </Link>
    </>
  );
};

export default Category;
