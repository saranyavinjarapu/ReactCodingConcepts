import {
  Accordion,
  Hex,
  ReactTile,
  Articles,
  RandomNumberGenerator,
} from "../components";

export const displayList = [
  {
    id: "accordion",
    name: "Accordion",
    title: "Accordion to click and unclick",
  },
  { id: "hex", name: "Hex", title: "Accordion to click and unclick" },
  {
    id: "reactTile",
    name: "React Tile",
    title: "Click on the Tile ",
  },
  {
    id: "articleTable",
    name: "Articles Table Sorting",
    title: "Articles Table with Sorting Feature",
  },
  {
    id: "randomNumberGenerator",
    name: "Random Number Generator",
    title: "Generate a random number within the input range",
  },
];

export const componentsList = {
  accordion: Accordion,
  hex: Hex,
  reactTile: ReactTile,
  articleTable: Articles,
  randomNumberGenerator: RandomNumberGenerator,
};
