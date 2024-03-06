import { render } from "./render";

export let mx: number, my: number, clicked: bool;

function updateMouse(e) {
  mx = e.clientX;
  my = e.clientY;

  render();
}

export function initMouse() {
  window.onmousemove = updateMouse;
  window.onmousedown = () => clicked = true;
  window.onmouseup = () => clicked = false;
}

export function deinitMouse() {
  window.onmousemove = undefined;
  window.onmousedown = undefined;
  window.onmouseup = undefined;
}

export function hovered(cx, cy, w, h, cb = undefined) {
  return Math.abs(cx - mx) <= w/2 &&
         Math.abs(cy - my) <= h/2;
}
