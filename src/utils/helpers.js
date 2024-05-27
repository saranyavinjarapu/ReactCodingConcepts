import {
  Accordion,
  Hex,
  ReactTile,
  Articles,
  RandomNumberGenerator,
  InterestCalculator,
  UsersAPIData,
  Parent,
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
    name: "Random Number Gen",
    title: "Generate a random number within the input range",
  },
  {
    id: "interestCalculator",
    name: "Interest Calculator",
    title: "Generate simple interest based on input values",
  },
  {
    id: "usersAPIDate",
    name: "Users API Data",
    title: "Fetch users data from API and perform filter-sort",
  },
  {
    id: "parentChildRelationship",
    name: "Parent Child",
    title: "Pass variables and methods as props from parent to child",
  },
];

export const componentsList = {
  accordion: Accordion,
  hex: Hex,
  reactTile: ReactTile,
  articleTable: Articles,
  randomNumberGenerator: RandomNumberGenerator,
  interestCalculator: InterestCalculator,
  usersAPIDate: UsersAPIData,
  parentChildRelationship: Parent,
};
