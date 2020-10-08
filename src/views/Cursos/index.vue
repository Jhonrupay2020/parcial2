<template>
  <div v-if="loadingView == false">
    <h3>Cursos</h3>
    <ul class="list-unstyled">
      <li class="border-bottom mb-3" v-for="item in cursos" :key="item.id">
        <h6>
          <router-link
            :to="{
              name: 'cursos.show',
              params: { idCurso: item.id },
            }"
            >{{ item.name }}</router-link
          >
        </h6>
        <div class="mb-0">
          Curso ID: {{ item.code }}
          <router-link
            :to="{
              name: 'cursos.matricular',
              params: { idCurso: item.id },
            }"
            class="btn btn-outline-secondary"
          >
            Matricular Estudiante
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "@/utils/axios";
export default {
  name: "cursos",
  data() {
    return {
      cursos: [],
      loadingView: true,
    };
  },
  created() {
    const vm = this;

    axios.get("http://localhost:3000/api/v1/cursos").then((response) => {
      vm.cursos = response.data.content;
      vm.loadingView = false;
    });
  },
};
</script>
