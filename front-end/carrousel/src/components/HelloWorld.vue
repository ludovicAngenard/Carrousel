<template>
  <div class="body">
    <div>

      <div class="carousel mt-5">
        <ul class="slides">
          <div  v-for="(value,index) in img" v-bind:key="index">
            <input type="radio" name="radio-buttons" v-bind:id="value.id" checked />
            <li class="slide-container">
              <div class="slide-image image-wrap">
                <img v-bind:src="value.lien">
              </div>
              <div class="carousel-controls">
                <label v-if="value.id === '1'" v-bind:for="img.length" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label v-else v-bind:for="value.id-1" class="prev-slide">
                  <span>&lsaquo; </span>
                </label>
                <label v-if="value.id === img.length.toString()" v-bind:for="img[0]['id']" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
                <label v-else v-bind:for="img[index+1]['id']" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <div class="container mt-5" v-if="validInput">
        <div class="col-sm-12">
          <div class="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
            <i class="start-icon far fa-check-circle faa-tada animated"></i>
            <strong class="font__weight-semibold">Ajouter !</strong> Votre photo est ajoutée à la liste !
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <label for="basic-url" class="form-label">Url de votre photo</label>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">https://example.com/photo/</span>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" v-model="link">
          <button type="button" class="btn btn-secondary" @click="addPicture(link)">Ajouter</button>
          <button type="button" class="btn btn-dark" @click="pictureRandom">Photo aléatoire</button>
        </div>
      </div>

    </div>



  </div>


</template>

<script>

const axios = require('axios');

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return  {
      link: '',
      img: undefined,
      picture: undefined,
      validInput: false
    }
  },async mounted() {
    await this.allPicture()
  },
  methods : {

    async allPicture () {

      let format = []
      let allPicture = undefined
      await axios.get('http://localhost:3000/photo', {
      }).then(function (response) {
        allPicture = response['data']
        for (let i = 1; i < response['data'].length+1; i++) {
          format.push({
            'id': i.toString(),
            'lien': response['data'][i-1]['link']
          })
        }
      });
      this.$data.picture = allPicture
      this.$data.img = format
    },
    async addPicture (link) {
      this.$data.validInput = false

      let result = false
      await axios.post('http://localhost:3000/photo', {
          "link" : link
      }).then(function (response) {

        console.log(response)
        if (response['data']['valid'] === "valid input") {
          result = true
        }
      });
      this.$data.validInput = result;
      this.$data.link = ""
      await this.allPicture()
    },

    pictureRandom () {
      let randomNumber = Math.floor(Math.random() * this.$data.picture.length);
      this.$router.push({
        name: "picture",
        params: {
          id : this.$data.picture[randomNumber]['_id']

        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.image-wrap {
  width: 100%;
  height: 50vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

img {
  width: 100%;
  animation: move 40s ease;
  /* Add infinite to loop. */

  -ms-animation: move 40s ease;
  -webkit-animation: move 40s ease;
  -moz-animation: move 40s ease;
  position: absolute;
}

@-webkit-keyframes move {
  0% {
    -webkit-transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    -ms-transform-origin: bottom left;
    -o-transform-origin: bottom left;
    transform-origin: bottom left;
    transform: scale(1.0);
    -ms-transform: scale(1.0);
    /* IE 9 */

    -webkit-transform: scale(1.0);
    /* Safari and Chrome */

    -o-transform: scale(1.0);
    /* Opera */

    -moz-transform: scale(1.0);
    /* Firefox */
  }
  100% {
    transform: scale(1.2);
    -ms-transform: scale(1.2);
    /* IE 9 */

    -webkit-transform: scale(1.2);
    /* Safari and Chrome */

    -o-transform: scale(1.2);
    /* Opera */

    -moz-transform: scale(1.2);
    /* Firefox */
  }
}



.carousel {
  margin-left: 15%;
  margin-right: 15%;
}

ul.slides {
  display: block;
  position: relative;
  height: 600px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.slides * {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

ul.slides input {
  display: none;
}

.slide-container {
  display: block;
}

.slide-image {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  transition: all 0.7s ease-in-out;
}

.slide-image img {
  width: auto;
  min-width: 100%;
  height: 100%;
}

.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  font-size: 100px;
  line-height: 600px;
  color: #fff;
}

.carousel-controls label {
  display: none;
  position: absolute;
  padding: 0 20px;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
}

.slide-image:hover + .carousel-controls label {
  opacity: 0.5;
}

.carousel-controls label:hover {
  opacity: 1;
}

.carousel-controls .prev-slide {
  width: 49%;
  text-align: left;
  left: 0;
}

.carousel-controls .next-slide {
  width: 49%;
  text-align: right;
  right: 0;
}

.carousel-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  z-index: 999;
  text-align: center;
}

.carousel-dots .carousel-dot {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  margin: 10px;
}

input:checked + .slide-container .slide-image {
  opacity: 1;
  transform: scale(1);
  transition: opacity 1s ease-in-out;
}

input:checked + .slide-container .carousel-controls label {
  display: block;
}

input#img-1:checked ~ .carousel-dots label#img-dot-1,
input#img-2:checked ~ .carousel-dots label#img-dot-2,
input#img-3:checked ~ .carousel-dots label#img-dot-3,
input#img-4:checked ~ .carousel-dots label#img-dot-4,
input#img-5:checked ~ .carousel-dots label#img-dot-5,
input#img-6:checked ~ .carousel-dots label#img-dot-6 {
  opacity: 1;
}

input:checked + .slide-container .nav label {
  display: block;
}


</style>
