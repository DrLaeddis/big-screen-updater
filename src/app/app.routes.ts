import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "task1",
    pathMatch: "full",
  },
  {
    path: "idle",
    loadComponent: () => import("./pages/idle/idle.page").then(m => m.IdlePage),
  },
  {
    path: "select-mode",
    loadComponent: () =>
      import("./pages/select-mode/select-mode.page").then(
        m => m.SelectModePage
      ),
  },
  {
    path: "select-session",
    loadComponent: () =>
      import("./pages/select-session/select-session.page").then(
        m => m.SelectSessionPage
      ),
  },
  {
    path: "select-full-or-lite",
    loadComponent: () =>
      import("./pages/select-full-lite/select-full-lite.page").then(
        m => m.SelectFullLitePage
      ),
  },
  {
    path: "session",
    loadComponent: () =>
      import("./pages/session/session.page").then(m => m.SessionPage),
  },
  {
    path: "task1",
    loadComponent: () =>
      import("./pages/task1/task1.page").then(m => m.Task1Page),
  },
  {
    path: "task2",
    loadComponent: () =>
      import("./pages/task2/task2.page").then(m => m.Task2Page),
  },
  {
    path: "task3",
    loadComponent: () =>
      import("./pages/task3/task3.page").then(m => m.Task3Page),
  },
  {
    path: "task4",
    loadComponent: () =>
      import("./pages/task4/task4.page").then(m => m.Task4Page),
  },
  {
    path: "task5",
    loadComponent: () =>
      import("./pages/task5/task5.page").then(m => m.Task5Page),
  },
  {
    path: "task6",
    loadComponent: () =>
      import("./pages/task6/task6.page").then(m => m.Task6Page),
  },
  {
    path: "task7",
    loadComponent: () =>
      import("./pages/task7/task7.page").then(m => m.Task7Page),
  },
  {
    path: "task8",
    loadComponent: () =>
      import("./pages/task8/task8.page").then(m => m.Task8Page),
  },
  {
    path: "task9",
    loadComponent: () =>
      import("./pages/task9/task9.page").then(m => m.Task9Page),
  },
  {
    path: "task10",
    loadComponent: () =>
      import("./pages/task10/task10.page").then(m => m.Task10Page),
  },
  {
    path: "task11",
    loadComponent: () =>
      import("./pages/task11/task11.page").then(m => m.Task11Page),
  },
  {
    path: "task12",
    loadComponent: () =>
      import("./pages/task12/task12.page").then(m => m.Task12Page),
  },
  {
    path: "task13",
    loadComponent: () =>
      import("./pages/task13/task13.page").then(m => m.Task13Page),
  },
  {
    path: "task14",
    loadComponent: () =>
      import("./pages/task14/task14.page").then(m => m.Task14Page),
  },
  {
    path: "task15",
    loadComponent: () =>
      import("./pages/task15/task15.page").then(m => m.Task15Page),
  },
  {
    path: "task44",
    loadComponent: () =>
      import("./pages/task44/task44.page").then(m => m.Task44Page),
  },
  {
    path: "task55",
    loadComponent: () =>
      import("./pages/task55/task55.page").then(m => m.Task55Page),
  },
  {
    path: "task56",
    loadComponent: () =>
      import("./pages/task56/task56.page").then(m => m.Task56Page),
  },
  {
    path: "settings",
    loadComponent: () =>
      import("./pages/settings/settings.page").then(m => m.SettingsPage),
  },
];
