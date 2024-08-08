import authenticate from "../../scripts/auth.js";
import { moveInstrumentation } from "../../scripts/scripts.js";
import { decorateNavAuth } from "../header/header.js";

export default async function decorate(block) {
  let row = block.firstElementChild;
  const bg = row.querySelector('picture');
  block.append(bg);
  row.remove();
  const bgP = block.closest('p');
  if (bgP) bgP.remove();
  row = block.firstElementChild;
  row.classList.add('hero-body');
  const content = document.getElementsByClassName('hero-body')[0].children[0].children[0].children[0];
  moveInstrumentation(row, content);
}
