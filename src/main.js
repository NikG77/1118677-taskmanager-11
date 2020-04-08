import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createSortingTemplate} from "./components/sorting";
import {createFilterTemplate} from "./components/filter.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";
import {createBoardTemplate} from "./components/board.js";
import {generateFilters} from "./mock/filter";
import {generateTasks} from "./mock/task.js";

const TASK_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(tasks[0]));

const renderTasks = (taskCount) => {
  for (let i = 1; i < taskCount; i++) {
    render(taskListElement, createTaskTemplate(tasks[i]));
  }
};
renderTasks(tasks.length);

render(boardElement, createLoadMoreButtonTemplate());

