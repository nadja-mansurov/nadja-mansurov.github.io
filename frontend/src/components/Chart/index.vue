<template>
  <div class="card text-center Chart">
    <div class="card-header">
      <div>{{header}}</div>
    </div>
    <div class="card-body">
      <div :id="id"></div>
      <p class="card-text">{{description}}</p>
      <p class="card-text" v-if="description2">{{description2}}</p>
    </div>
  </div>
</template>

<script>


import embed from 'vega-embed';

export default {
  name: 'Chart',
  components: {
  },
  props: ['code'],
  data () {
    return {
        data: null,
        description: this.code.description,
        description2: this.code.description2,
        id: `vis_${this.code.unique_id}`,
        header: this.code.header
    }
  },
  computed: {
  },
  mounted () {
    embed(`#${this.id}`, this.code.data).then(result => {
      this.data = result.view;
    });
  },
  methods: {

  }
}


        
</script>

<style>

.Chart {
  margin: 10px;
}

.Chart canvas {
  max-width: 100%;
}

.vega-bind label span {
    padding: 0 5px;
    font-size: 0.9rem;
}
.vega-bind label select {
    padding: 0 5px;
    font-size: 0.8rem;
}

.card-text {
    font-size: 0.8rem;
    text-align: justify;
}

.card-header {
  min-height: 75px;
  text-align: center;
  vertical-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.card-header div {
  flex: 1 1;
  text-align: center;
}
</style>