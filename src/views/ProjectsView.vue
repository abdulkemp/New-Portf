<template>
  <div id="projects">
    <!-- <Navbar /> -->
    <!-- <div class="project">
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
    </div> -->
    <div class="project">
      <div class="conta row">
        <div
          class="car col-md-2 m-5"
          v-for="proj in projs"
          :key="proj.idProjects"
        >
          <h2>{{ proj.projName }}</h2>
          <p>{{ proj.projDesc }}</p>
          <button class="btt">{{ proj.github }}</button>
          <button class="btt">{{ proj.liveLink }}</button>
          <span>Hover Here</span>
          <div class="pic"></div>
          <button class="btto"></button>
        </div>
        <!-- <div class="car car2">
        <h2>Yasuo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>Hover Here</span>
        <div class="pic"></div>
        <button></button>
      </div> -->
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
  height: 100%;
}

.project {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.conta {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.conta .car {
  position: relative;
  width: 500px;
  height: 230px;
  padding: 15px;
  background: linear-gradient(60deg, #151516 0%, #1d2229);
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.conta .car h2 {
  z-index: 99;
  position: absolute;
  bottom: 25px;
  right: 130px;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  pointer-events: none;
  transition: 0.2s ease;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.conta .car p {
  z-index: 99;
  position: absolute;
  bottom: 30px;
  right: 130px;
  width: 150px;
  font-size: 12px;
  opacity: 0;
  text-align: right;
  letter-spacing: 1px;
  color: #fff;
  transition: 0.2s ease;
}
.conta .car span {
  z-index: 99;
  position: absolute;
  top: 60px;
  right: 35px;
  font-size: 12px;
  writing-mode: vertical-lr;
  opacity: 0.7;
  text-align: right;
  letter-spacing: 1px;
  color: #fff;
  transition: 0.2s ease;
}

.conta .car .pic {
  z-index: 100;
  width: 395px;
  height: 200px;
  /* background-image: url(https://i.postimg.cc/bJjvm4j5/Screenshot-2023-08-19-130527.png); */
  /* background-size: cover; */
  border-radius: 12px;
  filter: grayscale(100%);
  transition: 0.3s ease;
}

.conta .car .btto {
  position: absolute;
  bottom: 40px;
  right: 30px;
  height: 30px;
  font-size: 12px;
  background-color: #772a9b;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  writing-mode: vertical-lr;
  opacity: 1;
  transition: 0.3s ease;
}

.conta .car:hover .btto {
  transform: scale(16.5);
  opacity: 0.5;
}
.conta .car:hover h2 {
  bottom: 80px;
  right: 50px;
}
.conta .car:hover p {
  right: 60px;
  opacity: 0.5;
}
.conta .car:hover span {
  top: 80px;
  opacity: 0;
}
.conta .car:hover .pic {
  filter: grayscale(0);
  width: 470px;
}

/* .conta .car2 .pic{
  background-image: url(https://i.postimg.cc/cLmT1GFR/Screenshot-2023-08-19-130137.png);
  transition: 0.3s ease;
}

.conta .car2 button{
  background-color: #26c3a1;
} */
</style>
