<template>
    <div  class="Chart">
        <h6>CHART COMPONENT</h6>
        <h2>{{header}}</h2>
        <div :id="id"></div>
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
    border: 2px solid #ff00ff;
    margin: 10px;
    padding: 10px;
}

</style>