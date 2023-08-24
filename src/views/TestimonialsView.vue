<template>
  <div id="testimonials">
    <!-- <Navbar /> -->
    <div class="head-test">
      <h1>Testimonials</h1>
      <button>
        <a href="#testie">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </a>
      </button>
    </div>
    <div class="contai">
      <div class="scroll-container">
        <div
          class="whole-card"
          v-for="test in tests"
          :key="test.idTestimonials"
        >
          <div class="whole-card-left">
            <img :src="test.testImage" alt="" />
          </div>
          <div class="whole-card-right">
            <div class="whole-name">
              <h1>{{ test.testName }}</h1>
            </div>
            <div class="whole-message">
              <p>
                {{ test.testMessage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="testing">
      <div id="testie">
        <section>
          <div class="test" v-for="test in tests" :key="test.idTestimonials">
            <div class="test-left">
              <img :src="test.testImage" alt="" />
            </div>
            <div class="test-right">
              <div class="name">
                <h1>{{ test.testName }}</h1>
              </div>
              <div class="message">
                <p>
                  {{ test.testMessage }}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tests: this.$store.state.testimonials,
    };
  },
  created() {
    this.fetchTestimonials();
  },
  methods: {
    async fetchTestimonials() {
      const res = await axios.get(
        `https://new-portfolio-64oc.onrender.com/testimonials`
      );
      this.tests = res.data.results;
      console.log(res);
    },
  },
};
</script>

<style scoped>
#testimonials {
  min-width: 101.5%;
  max-height: 100%;
  overflow-y: scroll;
  /* height: 100vh; */
  scroll-snap-align: start;
}

.whole-name h1 {
  text-align: start;
}

.whole-card-right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.whole-card-left {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 8px solid;
  border-color: transparent #45a29d67 transparent #45a29d67;
  border-radius: 50%;
  padding: 0.5rem;
  width: 18rem;
  height: 18rem;
}
.whole-card-left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.whole-card {
  min-width: 70%;
  height: 20rem;
  border: #45a29e solid 3px;
  border-radius: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  backdrop-filter: blur(12px);
}
.contai {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-container {
  width: 70%;
  height: 30rem;
  border: 2px solid red;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow-x: scroll;
  gap: 3rem;
  scrollbar-width: thin; /* For Firefox compatibility */
  scrollbar-color: #333 #eee;
}
.scroll-container::-webkit-scrollbar {
  width: 100%; /* Width of the scrollbar track */
}

/* Customize the scrollbar thumb (the draggable part) */
.scroll-container::-webkit-scrollbar-thumb {
  background-color: red; /* Thumb color */
  border-radius: 5px; /* Rounded corners for the thumb */
}

/* Customize the scrollbar track when hovered */
.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: red; /* Thumb color on hover */
}

.head-test {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(15px);
}

.head-test h1 {
  font-size: 4rem;
}

.head-test button {
  width: 6rem;
  height: 6rem;
  font-size: 5rem;
  background-color: transparent;
  border: none;
}

.head-test button:hover {
  border: #45a29e solid 2px;
  backdrop-filter: blur(12px);
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(0.9);
}

.head-test button a {
  color: white;
}

#testie {
  /* min-width: 100%; */
  height: 100%;
  color: #c5c6c7;
  position: relative;
  /* top: 0;
  left: 0; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#testie section {
  width: 70%;
  height: fit-content;
  position: absolute;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  overflow-x: scroll;
  gap: 5rem;
  /* border-right: rgba(0, 0, 0, 0.186) 3rem solid; */
}
</style>
