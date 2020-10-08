import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Estudiantes from "../views/Estudiantes/index.vue";
import EstudiantesCursos from "../views/Estudiantes/cursos.vue";
import Cursos from "../views/Cursos/index.vue";
import CursosMatricular from "../views/Cursos/matricular.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/estudiantes",
    name: "estudiantes",
    component: Estudiantes,
  },
  {
    path: "/estudiantes/:idEstudiante/cursos",
    name: "estudiantes.cursos",
    component: EstudiantesCursos,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/cursos/:idCurso/matricular",
    name: "cursos.matricular",
    component: CursosMatricular,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
