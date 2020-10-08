<template>
  <div v-if="loadingView == false">
    <h3>Estudiantes</h3>
    <ul class="list-unstyled">
      <li class="border-bottom mb-3" v-for="item in estudiantes" :key="item.id">
        <h6>
          <router-link
            :to="{
              name: 'estudiantes.show',
              params: { idEstudiante: item.id },
            }"
            >{{ item.name }} {{ item.apellido }}</router-link
          >
        </h6>
        <div>
          <router-link
            class="btn btn-outline-secondary"
            :to="{
              name: 'estudiantes.cursos',
              params: { idEstudiante: item.id },
            }"
          >
            Cursos
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
  name: "estudiantes",
  data() {
    return {
      estudiantes: [],
      loadingView: true,
    };
  },
  created() {
    const vm = this;

    axios.get("http://localhost:3000/api/v1/student").then((response) => {
      vm.estudiantes = response.data.content;
      vm.loadingView = false;
    });
  },
};
</script>
