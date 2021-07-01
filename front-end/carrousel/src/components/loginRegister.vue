<template>
    <div>

      <!--    Form pour se connecter  -->
      <div v-if="connect">
        <section class="vh-100">
          <div class="container-fluid h-custom">

            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
                     alt="Sample image">
              </div>
              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                <div class="col-sm-12" v-if="error">
                  <div class="alert fade alert-simple alert-warning show" role="alert" data-brk-library="component__alert">
                    <strong class="font__weight-semibold">Warning!</strong> Pseudo or Password incorrect
                  </div>
                </div>

                <form>
                  <div class="form-outline mb-4">
                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                           placeholder="Enter your user" v-model="user"/>
                    <label class="form-label" for="form3Example3">User</label>
                  </div>

                  <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                           placeholder="Enter password" v-model="password"/>
                    <label class="form-label" for="form3Example4">Password</label>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn btn-primary btn-lg"
                            style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="connectApi">Login</button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <span style="cursor: pointer; color: #9f3023" @click="register">register</span></p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>
      </div>



<!--    Form pour s'incrire  -->
      <div v-else>
        <section class="vh-100">
          <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">

              <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div class="col-sm-12" v-if="error === 1">
                    <div class="alert fade alert-simple alert-warning show" role="alert" data-brk-library="component__alert">
                      <strong class="font__weight-semibold">Warning!</strong> Champs incorrect
                    </div>
                  </div>
                  <div class="col-sm-12" v-else-if="error === 2">
                    <div class="alert fade alert-simple alert-warning show" role="alert" data-brk-library="component__alert">
                      <strong class="font__weight-semibold">Warning!</strong> Your password is different
                    </div>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="user" class="form-control form-control-lg"
                           placeholder="Enter your new user" v-model="user"/>
                    <label class="form-label" for="user">User</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" id="password" class="form-control form-control-lg"
                           placeholder="Enter your password" v-model="password"/>
                    <label class="form-label" for="password">Password</label>
                  </div>
                  <div class="form-outline mb-3">
                    <input type="password" id="confirmPassword" class="form-control form-control-lg"
                           placeholder="Enter your password" v-model="confirmPassword"/>
                    <label class="form-label" for="confirmPassword">Confirm password</label>
                  </div>

                  <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn btn-primary btn-lg"
                            style="padding-left: 2.5rem; padding-right: 2.5rem;" @click="registerApi">Register</button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">You have an account ? <span style="cursor: pointer; color: #9f3023" @click="register">Connect</span></p>
                  </div>

                </form>
              </div>
              <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
                     alt="Sample image">
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "loginRegister",
  data () {
    return {
      connect: true,
      error: false,

      password: '',
      confirmPassword: '',
      user: ''
    }
  },
  methods: {

    register () { // function pour changer de vue
      this.$data.user = ''
      this.$data.password = ''
      this.$data.confirmPassword = ''
      this.error = false
      this.$data.connect = !this.$data.connect;
    },

    async connectApi () { // fonction pour ce connecter
      localStorage.clear()
      if (this.$data.user === '' || this.$data.password === '') {
        this.error = true
      }else {
        this.error = false
        await axios.post('http://localhost:3000/user/login', {
          "username": this.$data.user,
          "password": this.$data.password
        }).then(function (response) {
          if (response.data.username !== '') {
            localStorage.name = response.data.username
            localStorage.role = response.data.role
            window.location = '/'
          }
        });
      }
    },

    async registerApi () { // fonction pour s'incrire
      if (this.$data.user === '' || this.$data.password === '' || this.$data.confirmPassword === '') {
        this.error = 1
      }else if (this.$data.password !== this.$data.confirmPassword) {
        this.error = 2
      }else {
        this.error= false
        await axios.post('http://localhost:3000/user', {
          "username": this.$data.user,
          "password": this.$data.password
        }).then(function (response) {
          console.log(response)
        });
      }
    }

  }
}
</script>

<style scoped>
body
{
  background: #000e29;
}



.alert-simple.alert-warning
{
  border: 1px solid rgba(241, 142, 6, 0.81);
  background-color: rgba(220, 128, 1, 0.16);
  box-shadow: 0px 0px 2px #ffb103;
  color: #000e29;
  transition:0.5s;
}



.alert:before {
  content: '';
  position: absolute;
  width: 0;
  height: calc(100% - 44px);
  border-left: 1px solid;
  border-right: 2px solid;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  left: 0;
  top: 50%;
  transform: translate(0,-50%);
  height: 20px;
}


@-webkit-keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes blink-1 {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}

.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>