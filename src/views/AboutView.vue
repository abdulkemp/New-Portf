<template>
  <div id="about">
    <div class="about">
      <!-- <Navbar /> -->
      <div class="about-me">
        <div class="text">
          <h1>What you should know About Me</h1>
          <button>
            <a href="#me">
              <ion-icon name="arrow-down-outline"></ion-icon>
            </a>
          </button>
        </div>
      </div>
    </div>
    <div id="me">
      <div class="headline">
        <h2>Meet <span>Abdul-Azeez Kemp</span></h2>
        <h1>Aspiring Full-Stack Web Developer</h1>
      </div>
      <h2 class="intro">
        In the world of technology, I started an exciting journey into web
        development. I loved creating amazing online experiences. What began as
        curiosity turned into a strong passion. I learned to weave together code
        and pixels, blending technology and creativity. My goal is to craft
        captivating digital worlds.
      </h2>
      <hr />
      <div class="content">
        <div class="con-left">
          <p>
            I'm Abdul-Azeez Kemp, a 24-year-old proudly from the lively town of
            Mitchells Plain in Cape Town.
          </p>
          <p>
            Even though I started in art school, I've always been curious about
            technology. So, I took a leap into the world of IT and web
            development, aiming to carve out a tech-focused career.
          </p>
          <p>
            When I'm not immersed in coding or designing, I'm all about creating
            special memories with my close friends and beloved family. You'll
            often find me in the midst of friendly games, enjoying exciting
            sports, and diving into the world of new skills that extend beyond
            the tech realm. Join me on this journey as I explore the blend of
            creativity and technology, embracing a world full of exciting
            possibilities
          </p>
        </div>
        <div class="con-right">
          <div class="image">
            <img
              src="https://i.postimg.cc/wTKrW4yg/Picsart-23-08-15-14-29-39-483.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="cv-resume">
        <a
          href="https://drive.google.com/uc?export=download&id=1SVob5NHWiDOly4V-t7H3BQnR-KjWRxTr"
          download
          ><button class="down">Download CV</button></a
        >

        <a
          href="https://drive.google.com/uc?export=download&id=1-M5E2EBWHGORtHpsey1Nl96Q7knGAsMA"
          download
          ><button class="down">Download Resume</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about {
  min-width: 100%;
  max-height: 100%;
  /* display: flex; */
  /* position: relative; */
  overflow-y: scroll;
}

.about {
  backdrop-filter: blur(15px);
  height: 70vh;
}

#me {
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
}

.headline {
  text-align: center;
  padding: 5rem;
}

h2 span {
  color: #45a29e;
  font-size: 2.6rem;
}

.headline h1 {
  color: #66fcf1;
  font-size: 4rem;
}

.about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 110%;
}

.text {
  text-align: center;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 2px solid red; */
}

.text h1 {
  font-size: 4rem;
}

.text button {
  width: 6rem;
  height: 6rem;
  font-size: 5rem;
  background-color: transparent;
  border: none;
}

.text button:hover {
  border: #45a29e solid 2px;
  backdrop-filter: blur(12px);
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(0.9);
}

.text button a {
  color: white;
}

.intro {
  text-align: center;
  padding: 2rem;
}

hr {
  width: 50%;
  background-color: #45a29e;
  height: 0.5rem;
  margin-left: 23rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5rem;
  gap: 5rem;
}
.cv-resume {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 5rem;
  padding-bottom: 5rem;
}

.cv-resume button {
  width: 8rem;
  height: 3.5rem;
  background-color: transparent;
  color: white;
  border: #66fcf1 solid 3px;
}

.cv-resume button:hover {
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(1.2);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.con-left {
  width: 30%;
  text-align: center;
}

.con-left p {
  font-size: 1.2rem;
}
.con-right {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
}

.con-right .image {
  width: 35rem;
  height: 35rem;
  backdrop-filter: blur(7px);
}
.con-right .image img {
  width: 100%;
  height: 100%;
}

img {
  filter: drop-shadow(15px 15px 10px);
  color: black;
}
</style>
