<template>
  <div id="testimonials">
    <!-- <Navbar /> -->
    <div class="testing">
      <div id="testie">
        <!-- <div class="row skill">
        <div
          class="col-md-2 m-5"
          v-for="test in tests"
          :key="test.idTestimonials"
        >
          <div class="card skill-card">
            <img :src="test.testImage" alt="" />
            <div class="card-body test-body">
              <h1>{{ test.testName }}</h1>
            </div>
          </div>
        </div>
      </div> -->
        <!-- <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-inner"
         
        >
          <div class="carousel-item active" data-bs-interval="10000"  v-for="test in tests"
          :key="test.idTestimonials">
            <div class="image">
              <img :src="test.testImage" class="d-block w-100" alt="..." />
            </div>
            <div class="testie">
              <h1>{{ test.testName }}</h1>
              <p>{{ test.testMessage }}</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->
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
        <!-- <div class="test" v-for="test in tests"
          :key="test.idTestimonials">
        <div class="test-left">
          <img :src="test.testImage" alt="">
        </div>
        <div class="test-right">
          <div class="name">
            <h1>{{ test.testName }}</h1>
          </div>
          <div class="message">
            {{ test.testMessage }}
          </div>
        </div>
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
  min-width: 100%;
  max-height: 100%;
}

.testing{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#testie {
  /* min-width: 100%; */
  height: 100%;
  color: #c5c6c7;
  /* position: relative; */
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
#testie section .test {
  max-width: 100%;
}



.test {
  width: 70%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
  gap: 3rem;
  border-radius: 50px;
  backdrop-filter: blur(12px);
  border: #66fcf232 solid 3px;
}

.test-left {
  border: 8px solid;
  border-color: transparent #66fcf232 transparent #66fcf232;
  border-radius: 50%;
  padding: 0.5rem;
  width: 40rem;
  margin-left: 3rem;
  /* height: 25rem; */
}

.test-left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.test-right {
  width: fit-content;
  /* border: 2px solid yellow; */
  margin-right: 3rem;
  flex-wrap: wrap;
}
</style>
