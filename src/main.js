import BoardComponent from "./components/board.js";
import BoardController from "./controllers/board";
import FilterController from "./controllers/filter";
import SiteMenuComponent from "./components/site-menu.js";
import {generateTasks} from "./mock/task.js";
// import {generateFilters} from "./mock/filter.js";
import {render, RenderPosition} from "./utils/render.js";
import TasksModel from "./models/tasks";


const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const filterController = new FilterController(siteMainElement, tasksModel);
filterController.render();

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent, tasksModel);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
