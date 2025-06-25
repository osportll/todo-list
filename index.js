import {
  addNewNoteLogic,
  initNoteLogic,
  seeNoteDetails,
} from "./createNote.js";
import { toggleSection, toggleHeaderTitle } from "./siteLogic.js";

toggleSection();
toggleHeaderTitle();
initNoteLogic();
addNewNoteLogic();
seeNoteDetails();
