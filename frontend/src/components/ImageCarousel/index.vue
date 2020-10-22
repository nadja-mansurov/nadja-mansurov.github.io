<template>
  <div class="card text-center Chart">
    <div class="card-header">
       Twitter word cloud day by day
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button class="btn btn-outline-primary btn-sm" v-on:click="start" v-bind:disabled="isStarted">Start slideshow</button>
            <button class="btn btn-outline-danger btn-sm" v-on:click="stop" v-bind:disabled="!isStarted">Stop slideshow</button>
          </div>
        </div>
      </div>
      
      
      <div v-for="(item, index) of items" v-bind:key="item" :id="'slider_'+ index" 
        class="image-container"
        v-bind:class="{ active: index == active}">
        <h5>Date: {{item}}</h5>
        <img :src="'/images/slider/' + item+ '.jpg'" />
      </div>
      <p class="card-text">
        With something as fast moving as a virus pandemic, the discussion on twitter needs to adapt. Find the most used terms and phrases from our twitter data for each day in these worldclouds. The bigger a word is, the more often it has been used.
      </p>
    </div>
  </div>
</template>


<script>

  const SLIDER_DATA = require('../../../public/slider.constant');

  export default {
    name: 'ImageCarousel',
    components: {
    },
    props: [],
    data() {
      return {
        slider_size: SLIDER_DATA.length,
        items: SLIDER_DATA,
        active: 0,
        isStarted: true
      };
    },
    mounted() {
      let i = 0;
      let interv;
      if (this.isStarted ) {
        interv = setInterval(() => {
          this.active = i;
          if (i < this.slider_size) {
            i++;
          } else {
            i = 0;
          }
        }, 1500);
      }
      this.start = function() {
        this.isStarted = true;
        interv = setInterval(() => {
          this.active = i;
          if (i < this.slider_size) {
            i++;
          } else {
            i = 0;
          }
        }, 1500);
      }
      this.stop = function() {
        this.isStarted = false;
        clearInterval(interv)
      }
      
    }
  };
</script>

<style>
  .image-container {
    display: none;
  }

  .image-container.active {
    display: block;
  }


  .card-text {
      font-size: 0.8rem;
      text-align: justify;
  }
</style>