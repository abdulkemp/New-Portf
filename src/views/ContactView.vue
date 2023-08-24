<template>
  <div id="contact">
    <!-- <Navbar /> -->
    <div class="contact">
      <div class="contact-left">
        <div class="di">
          <div class="container com">
            <form
              action="https://formspree.io/f/xrgvgwee"
              method="POST"
              class="row row-md-4 g-3"
            >
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label"
                  >First name</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault01"
                  placeholder="First Name"
                  name="name"
                  required
                  style="color: white"
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label"
                  >Last name</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault02"
                  placeholder="Last Name"
                  name="name"
                  required
                  style="color: white"
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault05" class="form-label"
                  >Cellphone Number</label
                >
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault05"
                  name="number"
                  required
                  placeholder="000-000-0000"
                  style="color: white"
                />
              </div>
              <div class="col-md-6">
                <label for="validationDefault03" class="form-label">City</label>
                <input
                  type="name"
                  class="form-control"
                  id="validationDefault03"
                  name="name"
                  required
                  style="color: white"
                />
              </div>
              <div class="col-md-56">
                <label for="validationDefault04" class="form-label"
                  >Province</label
                >
                <select
                  class="form-select"
                  id="validationDefault04"
                  name="name"
                  optional
                >
                  <option
                    selected
                    disabled
                    value=""
                    class="opt"
                    style="color: white"
                  >
                    Choose...
                  </option>
                  <option>Eastern Cape</option>
                  <option>Free State</option>
                  <option>Gauteng</option>
                  <option>KwaZulu-Natal</option>
                  <option>Limpopo</option>
                  <option>Mpumalanga</option>
                  <option>Northern Cape</option>
                  <option>North West</option>
                  <option>Western Cape</option>
                </select>
              </div>
              <div class="col-md-56">
                <label for="validationDefault04" class="form-label"
                  >Provide Feedback Below</label
                >
                <textarea
                  class="form-select"
                  id="validationDefault04"
                  name="text"
                  required
                  style="color: white"
                >
                </textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="contact-right">
        <div class="right-sect">
          <h1>Get In Touch With Me</h1>
          <hr />
          <p>Thank you for getting in touch, hope to hear from you soon.</p>
          <ul>
            <li>
              <ion-icon name="location-outline"></ion-icon> Cape Town, Mitchells
              Plain, 7785
            </li>
            <li><ion-icon name="call-outline"></ion-icon> 082 886 9476</li>
            <li>
              <ion-icon name="mail-outline"></ion-icon> aakemp786@gmail.com
            </li>
          </ul>
          <div class="links">
            <button>
              <a href="https://www.linkedin.com/in/abdul-azeez-kemp-3b468121a"
                ><ion-icon name="logo-linkedin"></ion-icon
              ></a>
            </button>
            <button>
              <a href="https://github.com/abdulkemp"
                ><ion-icon name="logo-github"></ion-icon
              ></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  min-width: 101.5%;
  max-height: 100%;
  /* overflow-y: scroll; */
  backdrop-filter: blur(7px);
  scroll-snap-align: start;
}

.contact {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.contact-left {
  width: 50%;
  height: 80vh;
}
.contact-right {
  width: 50%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.com {
  width: 80%;
}

.right-sect {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.right-sect h1 {
  font-size: 2rem;
}
.right-sect p {
  font-size: 1.5rem;
  padding-left: 2rem;
  padding-right: 1rem;
}

.right-sect ul {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
}

.right-sect ul li {
  list-style: none;
}

ion-icon {
  padding-right: 1rem;
  padding-top: 5px;
  font-size: 1.5rem;
  color: #45a29e;
}

.links {
  width: 100%;
  padding: 2rem;
  display: flex;
  gap: 1rem;
}

.links button ion-icon {
  font-size: 3rem;
  color: #45a29e;
}
ion-icon:hover {
  transition: 0.5s;
  transform: scale(1.2);
  overflow: hidden;
}
.links button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
}

.right-sect hr {
  width: 50%;
  background-color: #45a29e;
  height: 0.5rem;
}

.di {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  color: #c5c6c7;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #66fcf1;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input:hover {
  background-color: rgba(255, 255, 255, 0.268);
}
.form-select:hover {
  background-color: rgba(255, 255, 255, 0.268);
}

input::placeholder {
  color: #c5c6c758;
}

.opt {
  color: #c5c6c758;
}

.form-select {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #66fcf1;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-primary {
  background-color: transparent;
  border-radius: 0;
  border: 2px solid #66fcf1;
  backdrop-filter: blur(12px);
}
.btn-primary:hover {
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 1.5);
  transform: scale(1.2);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

@media screen and (max-width: 650px) {
  .com {
    width: 15rem;
  }
  #contact {
    display: flex;
    justify-content: center;
  }
}
</style>
