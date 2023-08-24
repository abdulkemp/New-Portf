<template>
  <div id="edu">
    <!-- <Navbar /> -->
    <div class="som">
      <h1>Education and Experience</h1>
      <button>
            <a href="#middle">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </a>
          </button>
    </div>
    <div class="middle" id="middle">
      <div class="desc">
        <h1>My Journey</h1>
        <hr />
        <p>
          I used to be a high school student who didn't understand much about
          IT. But over time, I became really interested in it and decided to
          learn more. After I finished high school, I jumped right into the
          world of IT, even though I didn't know much about it at first. This
          bold choice led me on a journey of determination and change, reshaping
          my career goals.
        </p>
        <p>
          When high school ended, I started college to learn about IT. However,
          money became a problem and I had to leave college after one year.
          Instead of giving up, I started working in different jobs to gain
          practical experience and earn money. I did all sorts of jobs, like
          helping customers and doing office tasks. This experience taught me a
          lot, like how to work well with others, be disciplined, and handle
          different challenges.
        </p>
        <p>
          While I was trying out different jobs, I got a chance to join Life's
          Choice Academy. This was a turning point that brought me back to IT.
          At the Academy, I not only learned technical things but also grew
          personally. I worked on hands-on projects, learned from experienced
          mentors, and was around others who shared my interests. This renewed
          my passion for IT and made me realize how important it is to follow
          what truly excites you.
        </p>
        <p>
          Now, I'm fully committed to building a rewarding career in information
          technology. My journey has been filled with ups and downs, but my
          determination has kept me going. From struggling with IT terms in high
          school to finding my way through various jobs due to financial
          struggles, each part of my journey has shaped me. As I move forward,
          I'm confident that my dedication will not only bring me personal
          happiness but also allow me to make a meaningful contribution to the
          ever-changing world of technology.
        </p>
      </div>
      <div class="edu" v-if="items">
        <div class="row">
          <div
            class="col-md-4 m-5"
            v-for="item in items"
            :key="item.idExperiences"
          >
            <div class="card">
              <img :src="item.expImage" alt="" />
              <div class="card-body">
                <h1>{{ item.expYear }}</h1>
                <h2>{{ item.expName }}</h2>
                <p>
                  {{ item.expDesc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="heading"><h1>Skills</h1></div>
      <div class="bottom-cent">
        <div class="bottom-left" v-if="skills">
          <div class="sort">
            <div class="buttons">
              <button>All</button>
              <button>Frontend</button>
              <button>Backend</button>
            </div>
          </div>
          <div class="row skill">
            <div
              class="col-md-2 m-5"
              v-for="skill in skills"
              :key="skill.idSkills"
            >
              <div class="card skill-card">
                <img :src="skill.skillImage" alt="" />
                <div class="card-body skill-body">
                  <h1>{{ skill.skillName }}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-right">
         <h1>Soft Skills</h1>
          <ul> 
            <li>Team Player</li>
            <li>Enthusiatic</li>
            <li>Intuitive</li>
            <li>Energetic</li>
            <li>Eager Learner</li>
            <li>Patient</li>
            <li>Charismatic</li>
          </ul>
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
      items: this.$store.state.experiences,
      skills: this.$store.state.skills,
    };
  },
  created() {
    this.fetchExperiences();
    this.fetchSkills();
  },
  methods: {
    async fetchExperiences() {
      const res = await axios.get(
        `https://new-portfolio-64oc.onrender.com/experiences`
      );
      this.items = res.data.results;
      console.log(res);
    },
    async fetchSkills() {
      const res = await axios.get(
        `https://new-portfolio-64oc.onrender.com/skills`
      );
      this.skills = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style scoped>
#edu {
  min-width: 101.5%;
  max-height: 100%;
  /* display: flex; */
  /* position: relative; */
  overflow-y: scroll;
  height: 100%;
  scroll-snap-align: start;
}

.edu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  margin-top: 4rem;
}

.som {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(15px);
}

.som h1 {
  font-size: 4rem;
}

.som button {
  width: 6rem;
  height: 6rem;
  font-size: 5rem;
  background-color: transparent;
  border: none;
}

.som button:hover {
  border: #45a29e solid 2px;
  backdrop-filter: blur(12px);
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(0.9);
}

.som button a {
  color: white;
}


.desc {
  width: 55%;
  height: 100vh;
  border-right: 8px solid #66fcf232;
  padding: 5rem;
}

.desc h1 {
  text-align: left;
  color: #45a29e;
  /* padding-bottom: 2rem; */
  font-size: 3rem;
}

.card {
  width: 400px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
}
.skill-card {
  width: 500px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
}

hr {
  width: 20%;
  background-color: #45a29e;
  height: 0.5rem;
}

.middle {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.card:hover .card-body {
  right: 0;
}
.skill-card:hover .skill-body {
  bottom: 0;
}

.card-body {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.563);
  width: 100%;
  height: 100%;
  color: white;
  backdrop-filter: blur(7px);
  border-radius: 15px;
  top: 0;
  right: -100%;
  transition: 0.5s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.skill-body {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.563);
  width: 100%;
  height: 100%;
  color: white;
  backdrop-filter: blur(7px);
  border-radius: 15px;
  top: 0;
  bottom: -100%;
  transition: 0.5s;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-body h1 {
  font-size: 18px;
}
.card-body h2 {
  font-size: 15px;
}
.card-body p {
  font-size: 15px;
}
.col-md-4 {
  display: flex;
  justify-content: center;
  align-content: center;
}
.bottom {
  width: 100%;
  height: 100;
}
.bottom-cent {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.bottom-left {
  width: 70%;
  height: 100%;
  border-right: 8px solid #66fcf232;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.heading {
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(12px);
}

.heading h1 {
  font-size: 4rem;
}

.bottom-left .card {
  width: 100px;
  height: 100px;
}
.bottom-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bottom-right ul {
  padding-left: 0;
}

ul li {
  list-style: none;
  text-align: center;
  font-size: 1.2rem;
}
.sort {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}

.buttons button {
  width: 6rem;
  height: 2.5rem;
  background-color: transparent;
  border: 3px solid #45a29e;
  color: white;
}

.skill {
  padding-right: 10px;
 
}

.col-md-2{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
