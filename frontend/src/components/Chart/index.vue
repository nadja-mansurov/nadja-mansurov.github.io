<template>
  <div class="card text-center Chart">
    <div class="card-header">
      {{header}}
    </div>
    <div class="card-body">
      <div :id="id"></div>
      <p class="card-text">{{description}}</p>
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

.vega-bind label span {
    padding: 0 5px;
    font-size: 0.9rem;
}
.vega-bind label select {
    padding: 0 5px;
    font-size: 0.8rem;
}

.card-text {
    font-size: 0.7rem;
}

</style>