<template>
  <div class="body">
    <div>
      <div class="carousel mt-5">
        <ul class="slides">
          <div  v-for="(value,index) in img" v-bind:key="index">
            <input type="radio" name="radio-buttons" v-bind:id="value.id" checked />
            <li class="slide-container">
              <div class="slide-image">
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
      img: [
        {
          'id': '1',
          'lien': 'https://s1.qwant.com/thumbr/0x380/1/8/da98c75d97df560eb8b318a3da4878c1a9ed754634b2ea14b5e4820dd8f7fc/Lapin-nain-en-exterieur-731x1024.jpg?u=https%3A%2F%2Fmonsieur-lapin.com%2Fwp-content%2Fuploads%2F2020%2F12%2FLapin-nain-en-exterieur-731x1024.jpg&q=0&b=1&p=0&a=0'
        },
        {
          'id': '2',
          'lien':'https://s2.qwant.com/thumbr/0x380/4/9/8edacb8d5d7b323df03b3aad3936f85202244077a068d04138f2bbb3430d39/cochon-d-inde-rongeur-17-48-32.jpeg?u=https%3A%2F%2Fwww.animal.ch%2Fuploads%2F2020%2F04%2Fcochon-d-inde-rongeur-17-48-32.jpeg&q=0&b=1&p=0&a=0'
        },
        {
          'id': '3',
          'lien':'https://s2.qwant.com/thumbr/0x0/5/3/12907660ae635e0377820a85e3b73d5d40f0489c159ee962935374440aa93b/hasmter_sirio_adulto-300x300.jpg?u=http%3A%2F%2Fportalmelhoresamigos.com.br%2Fwp-content%2Fuploads%2F2015%2F07%2Fhasmter_sirio_adulto-300x300.jpg&q=0&b=1&p=0&a=0'
        },
        {
          'id': '4',
          'lien':'https://s1.qwant.com/thumbr/0x380/0/3/e1aa4bed7084fa35a6bb25036c889e20efe214514e6b99c80778731aaa9973/branch-mouse-wildlife-mammal-squirrel-rodent-fauna-vertebrate-marsupial-florida-andymorffew-morffew-269042.jpg?u=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Fbranch-mouse-wildlife-mammal-squirrel-rodent-fauna-vertebrate-marsupial-florida-andymorffew-morffew-269042.jpg&q=0&b=1&p=0&a=0'
        }
      ]
    }
  },methods : {

    async test () {
      await axios.get('http://localhost:3000/', {
      }).then(function (response) {
        console.log(response)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
