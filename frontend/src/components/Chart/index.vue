<template>
  <div class="card text-center Chart">
    <div class="card-header">
      {{header}}
    </div>
    <div class="card-body">
      <div :id="id"></div>
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

</style>