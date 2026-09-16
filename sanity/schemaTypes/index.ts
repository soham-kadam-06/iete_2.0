import { type SchemaTypeDefinition } from "sanity";
import aboutPage from "./aboutPage";
import event from "./event";
import gallery from "./gallery";
import homePage from "./homePage";
import siteSettings from "./siteSettings";
import teamMember from "./teamMember";

export const schemaTypes: SchemaTypeDefinition[] = [
  teamMember,
  event,
  gallery,
  aboutPage,
  homePage,
  siteSettings,
];

export default schemaTypes;
