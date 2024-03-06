import { initMouse, deinitMouse } from "./mouse";
import { initRender, deinitRender, render } from "./render";

export enum GameState {
  Menu, Paused, Playing;
};

export let game_state = GameState.Menu;
export let width: number, height: number;

function updateDim() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  render();
}

export function initDim() {
  window.onresize = updateDim;
  updateDim();
}

export function deinitDim() {
  window.onresize = undefined;
}


export function initGame() {
  initDim();
  initMouse();
  initRender();
}

export function deinitGame() {
  deinitDim();
  deinitMouse();
  deinitRender();
}

export function startPlay() {
  game_state = GameState.Playing;
}
