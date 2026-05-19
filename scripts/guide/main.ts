import { Pages } from "@lpsmods/mc-utils";
import { changelogs } from "./changelogs.js";

export const pages: Pages = {
  home: {
    body: "#desc",
    buttons: ["changelogs"],
  },
  ...changelogs,
};
