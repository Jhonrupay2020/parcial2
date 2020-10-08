<template>
  <div v-if="loadingView == false">
    <h3>Cursos del estudiante</h3>
    <ul class="list-unstyled">
      <li class="border-bottom mb-3" v-for="item in cursos" :key="item.id">
        <h6>
          {{ item.name }}
        </h6>
        <p class="mb-0">Curso ID: {{ item.code }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "@/utils/axios";
export default {
  data() {
    return {
      cursos: [],
      loadingView: true,
    };
  },
  created() {
    const vm = this;

    axios
      .get(
        `http://localhost:3000/api/v1/student/${vm.$route.params.idEstudiante}/course`
      )
      .then((response) => {
        vm.cursos = response.data.content.courses;
        vm.loadingView = false;
      });
  },
};
</script>
