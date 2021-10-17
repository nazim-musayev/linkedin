import { ReactNode } from "react";

export interface Node {
  children?: ReactNode
};

export interface Character {
  id: number,
  firstName: string,
  lastName: string,
  fullName: string,
  title: string,
  family: string,
  image: string,
  imageUrl: string,
  name: string,
  slug: string,
  house: {
    slug: string,
    name: string
  },
  quotes: string[],
};
