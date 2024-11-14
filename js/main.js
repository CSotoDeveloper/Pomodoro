import { initializeBtns } from './modules/buttons.js';
import { addTask } from './modules/note.js';


document.addEventListener('DOMContentLoaded', () => {
  initializeBtns();
  addTask()
});


