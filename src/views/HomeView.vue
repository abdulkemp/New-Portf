<template>
  <div id="home">
    <section>
      <Navbar />
      <div class="whole">
        <div class="right">
          <div class="inside">
            <div class="front">
              <h2><span>Hello</span>, I'm</h2>
              <h1>Abdul-Azeez Kemp</h1>
              <h3>Aspiring Full-Stack Web Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
                ullam suscipit iste neque reiciendis nam veritatis itaque
                architecto quae voluptatum perferendis aliquid velit atque eaque
                maxime beatae corrupti in impedit.
              </p>
            </div>
            <div class="connect">
              <a href="#contact">
                <button class="button">Let's connect</button>
              </a>
            </div>
          </div>
        </div>
        <div class="left">
          <img src="https://i.postimg.cc/J45jQ3hn/My-project-10.png" alt="" />
        </div>
      </div>
    </section>
    <About />
    <Education />
    <Projects />
    <Testimonials />
    <Contact />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import About from "@/views/AboutView.vue";
import Education from "@/views/EducationView.vue";
import Projects from "@/views/ProjectsView.vue";
import Testimonials from "@/views/TestimonialsView.vue";
import Contact from "@/views/ContactView.vue";
export default {
  components: {
    About,
    Education,
    Navbar,
    Projects,
    Testimonials,
    Contact,
  },
};
</script>

<style scoped>
#home {
  min-width: 100%;
  height: 100%;
  /* border: 2px solid black; */
  color: #c5c6c7;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
}

/* .home{
  
} */

#home section {
  min-width: 100%;
  height: 90vh;
}
#home section .whole {
  max-width: 100%;
}

.whole {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
}

.connect {
  width: 60%;
}

.connect button {
  width: 8rem;
  height: 2.5rem;
  background-color: transparent;
  color: white;
  border: #66fcf1 solid 3px;
}

.button:hover {
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(1.2);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.inside {
  width: 100%;
  height: 92.4%;
  /* border: 2px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  color: #45a29e;
}

h1 {
  font-size: 4rem;
  color: #66fcf1;
}

h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
}
.front {
  width: 60%;
  /* gap: 0.5rem; */
  display: flex;
  flex-direction: column;
  /* height: 100%; */
}

.left {
  width: 40%;
  height: 90vh;
  padding-right: 0.3rem;
  border-radius: 50%;
}
.left img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.right {
  /* border: 2px solid red; */
  width: 60%;
  height: 100%;
  /* background-image: url(https://i.postimg.cc/Mp2KBGFz/Dark-Blue-Wallpaper-Wallpaper-Sun.jpg); */
}

@media (max-width: 990px) {
  #home {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: auto;
    transform: none !important;
  }
}
</style>
