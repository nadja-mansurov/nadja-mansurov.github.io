<template>
  <div class="card text-center ImageCard">
    <div class="card-header">
      {{header}}
    </div>
    <div class="card-body">
      <div :id="id">
            <img :src="data" />
            <p class="card-text">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ImageCard',
  components: {
  },
  props: ['code'],
  data () {
    return {
        data: this.code.data,
        id: `image_${this.code.unique_id}`,
        description: this.code.description,
        header: this.code.header
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {

  }
}


        
</script>

<style>

.ImageCard {
  margin: 10px;
}

.card-text {
    font-size: 0.7rem;
}

</style>