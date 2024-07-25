import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('main');
const root = createRoot(container);

import App from './App';

ReactDOM.createRoot(
  document.getElementById('app')
).render(<App />);

const player = ['P1', 'P2'];
const symbol = ['X', 'O'];
const gameFinished = false;
const tl_clicked = false;
const tm_clicked = false;
const tr_clicked = false;
const ml_clicked = false;
const mm_clicked = false;
const mr_clicked = false;
const bl_clicked = false;
const bm_clicked = false;
const br_clicked = false;

while (gameFinshed = false) {
  for (turns in Range(9)) {

  }
  gameFinished = true;
}