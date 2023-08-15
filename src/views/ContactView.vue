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
                  <option selected disabled value="" class="opt">Choose...</option>
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
      <div class="contact-right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact {
  min-width: 100%;
  max-height: 100%;
  /* display: flex; */
  /* position: relative; */
  overflow-y: scroll;
}

.contact {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.di {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 2px solid red; */
}

label {
  color: #c5c6c7;
}

input{
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #66fcf1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

input:hover{
    background-color: rgba(255, 255, 255, 0.268);
}
.form-select:hover{
    background-color: rgba(255, 255, 255, 0.268);
}

input::placeholder{
    color: #c5c6c758;
}

.opt{
    color: #c5c6c758;
}


.form-select {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #66fcf1;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.btn-primary{
    background-color: transparent;
    border-radius: 0;
    border: 2px solid #66fcf1;
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
