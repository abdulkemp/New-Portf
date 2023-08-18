<template>
  <div id="projects">
    <!-- <Navbar /> -->
    <div class="project">
      <div class="row skill">
        <div class="col-md-2 m-5" v-for="proj in projs" :key="proj.idProjects">
          <div class="card skill-card">
            <img :src="proj.projImage" alt="" />
            <div class="card-body proj-body">
              <h1>{{ proj.projName }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      projs: this.$store.state.projects,
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      const res = await axios.get(
        `https://new-portfolio-64oc.onrender.com/projects`
      );
      this.projs = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style scoped>
#projects {
  min-width: 100%;
  max-height: 100%;
  overflow-y: scroll;
}

.project {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
