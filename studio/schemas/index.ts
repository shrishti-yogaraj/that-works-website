import { post } from "./post";
import { author } from "./author";
import { category } from "./category";
import { blockContent } from "./blockContent";
import { dissection } from "./dissection";
import { arsenal } from "./arsenal";
import { labItem } from "./labItem";
import { hubSettings } from "./hubSettings";

export const schemaTypes = [
  // Content types
  post,
  dissection,
  arsenal,
  labItem,
  // Supporting types
  author,
  category,
  blockContent,
  // Singletons
  hubSettings,
];
