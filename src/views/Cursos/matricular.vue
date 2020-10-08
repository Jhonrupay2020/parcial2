<template>
  <div v-if="loadingView == false">
    <h3>Matricular Estudiante</h3>
    <div class="form-group">
      <label for="">Estudiante:</label>
      <select class="form-control" v-model="estudiante">
        <option v-for="item in estudiantes" :key="item.id" :value="item.id">{{
          item.name
        }}</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="matricular">Matricular</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "@/utils/axios";
export default {
  name: "cursos.matricular",
  data() {
    return {
      estudiante: "",
      cursos: [],
      estudiantes: [],
      loadingView: true,
    };
  },
  created() {
    const vm = this;

    axios.get("http://localhost:3000/api/v1/student").then((response) => {
      vm.estudiantes = response.data.content;
      vm.estudiante = vm.estudiantes[0].id;
      vm.loadingView = false;
    });
  },
  methods: {
    matricular() {
      const vm = this;

      axios
        .post(
          `http://localhost:3000/api/v1/course/${vm.$route.params.idCurso}/matriculas`,
          {
            idEstudiante: vm.estudiante,
          }
        )
        .then((response) => {
          alert("Estudiante matriculado");
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data.message);
        });
    },
  },
};
</script>
