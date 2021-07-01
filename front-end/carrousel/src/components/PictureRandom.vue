<template>

  <div>
    <div class="container">
      <img v-bind:src="onePicture" alt="">
    </div>
    <div>
      <button type="button" class="btn btn-dark" @click="pictureRandom">Photo aléatoire</button>
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "PictureRandom",
  data () {
    return {
      onePicture: undefined,
      picture: undefined
    }
  },mounted() {
    this.allPicture()
    this.apiOnePicture()
  },
  methods: {

    async apiOnePicture () {
      let one = ""
      await axios.get('http://localhost:3000/photo/'+ this.$route.params.id, {
      }).then(function (response) {
        one = response['data']['link']
      });

      this.$data.onePicture = one
    },

    async pictureRandom () {
      let one = ""

      let randomNumber = Math.floor(Math.random() * this.$data.picture.length);
      await axios.get('http://localhost:3000/photo/'+ this.$data.picture[randomNumber]['_id'], {
      }).then(function (response) {
        one = response['data']['link']
      });
      this.$data.onePicture = one

    },

    async allPicture () {

      let allPicture = undefined
      await axios.get('http://localhost:3000/photo', {
      }).then(function (response) {
        allPicture = response['data']
      });
      this.$data.picture = allPicture
    },

  }
}
</script>

<style scoped>
.picture {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;

}
</style>