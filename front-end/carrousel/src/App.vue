<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand text-white" to="/">Home</router-link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active text-white"  to="/about">Login / register </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active text-white"  to="/about"> {{ name }}</router-link>
            </li>
            <li class="nav-item" v-if="name">
              <div class="nav-link active text-white" style="cursor: pointer" @click="clear">Déconnexion</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>
<script>


export default {
  name: 'app',
  props: {
    msg: String
  },
  data () {
    return  {
      name: '',
    }
  },mounted() {
    this.$data.name = localStorage.name
  },
  methods: {

    clear () {
      localStorage.clear()
      window.location = '/'
    }
  }
}
</script>

<style>
</style>
