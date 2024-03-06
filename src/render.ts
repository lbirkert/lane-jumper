import { game_state, width, height, GameState, startPlay } from "./game";
import { hovered, clicked } from "./mouse";

export function mtext(str, x, y) {
  const metrics = ctx.measureText("PLAY");

  const cx = x + (metrics.actualBoundingBoxRight - metrics.actualBoundingBoxLeft) / 2;
  const cy = y + (metrics.actualBoundingBoxAscent - metrics.actualBoundingBoxDescent) / 2;
  const w = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
  const h = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

  return [cx, cy, w, h];
}

export function render() {
  canvas.style = "";

  switch(game_state) {
    case GameState.Menu:
    return renderMenu();
    case GameState.Playing:
    return renderPlaying();
  }
}

function renderPlaying() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
}

function renderMenu() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);

  ctx.font = 'normal bold 48px "Madimi One"';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "white";
  ctx.fillText("LANE JUMPER", width / 2, height / 3);


  ctx.font = 'normal 30px "sans-serif"';
  const metrics = ctx.measureText("PLAY");

  if(hovered(...mtext("PLAY", width / 2, height / 3 + 80))) {
    ctx.fillStyle = "red";
    canvas.style = "cursor: pointer";

    if(clicked) startPlay();
  }
  
  ctx.fillText("PLAY", width / 2, height / 3 + 80);
}

let animationFrame;
function renderLoop() {
  animationFrame = requestAnimationFrame(renderLoop);
  render();
}

export function initRender() {
  deinitRender();

  renderLoop();
}

export function deinitRender() {
  cancelAnimationFrame(animationFrame);
}
