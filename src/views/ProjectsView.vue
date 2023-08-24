<template>
  <div id="projects">
    <div class="proj-head">
      <h1>Projects Of What I've Done</h1>
      <button>
        <a href="#bod">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </a>
      </button>
    </div>
    <div class="bod" id="bod">
      <div class="bood row">
        <div class="wrapper col" v-for="proj in projs" :key="proj.idProjects">
          <div class="cards">
            <div class="hover">
              <!-- <div class="icon"> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <!-- <p>Hover</p>        -->
              <!-- </div> -->
            </div>
            <div class="imageProj">
              <img :src="proj.projImage" alt="" />
            </div>
            <div class="info">
              <h1>{{ proj.projName }}</h1>
              <p>{{ proj.projDesc }}</p>
              <div class="buttons">
                <a :href="proj.github" target="_blank">Github</a>
                <a :href="proj.liveLink" target="_blank">Live Link</a>
              </div>
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
  min-width: 101.5%;
  max-height: 100%;
  /* display: flex; */
  /* position: relative; */
  overflow-y: scroll;
  height: 100%;
  scroll-snap-align: start;
}

.bod {
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
}

.bood{
  width: 100%;
  height: 100%;
  /* display: ; */
}

.hover {
  position: relative;
  padding: 2rem;
  min-width: 7rem;
  height: fit-content;
  bottom: 0;
  left: 28%;
  display: flex;
  z-index: 1;
  color: black;
}

.imageProj {
  opacity: 0.7;
}

svg {
  transform: translateX(0px);
  animation: float 5s ease-in-out infinite;
  transition: 0.5s;
  min-width: 100px;
  font-size: 15rem;
  /* min-height: 7rem; */
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(30px);
  }
}

.cards:hover .hover {
  display: none;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cards {
  width: 400px;
  height: 250px;
  padding: 2rem 1rem;
  background: #fff;
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  transition: 0.5s ease-in-out;
  /* border-radius: 15px; */
}

.cards:hover {
  transform: translateY(20px);
}

.cards::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #45a29dee, #45a29e);
  z-index: 2;
  transition: 0.5s all;
  opacity: 0;
  /* border-radius: 15px; */
}

.cards:hover::before {
  opacity: 1;
}

.cards img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  /* border-radius: 15px; */
}

.cards .info {
  position: relative;
  z-index: 3;
  color: #1f2833;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s all;
  /* z-index: 3; */
}

.cards:hover .info {
  opacity: 1;
  transform: translateY(0px);
}

.proj-head {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(15px);
}

.proj-head h1 {
  font-size: 4rem;
}

.proj-head button {
  width: 6rem;
  height: 6rem;
  font-size: 5rem;
  background-color: transparent;
  border: none;
}

.proj-head button:hover {
  border: #45a29e solid 2px;
  backdrop-filter: blur(12px);
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(0.9);
}

.proj-head button a {
  color: white;
}

.buttons {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.buttons a {
  width: 5rem;
  /* height: 2rem; */
  height: 2.5rem;
  background-color: transparent;
  /* color: white; */
  border: #66fcf1 solid 3px;
  text-decoration: none;
  color: #1f2833;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons a:hover {
  transition: 0.5s;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 1.5);
  transform: scale(1.1);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

/* .buttons button a {
  
  width: 5rem;
  height: 2rem;
  border: 2px solid red;
} */

.info p {
  font-size: 17px;
}
</style>
