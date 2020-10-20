

import axios from 'axios';
import Chart from '../Chart';
import ImageCard from '../ImageCard';

const URLS = require('../../../public/urls.constant');
const IMAGES_URLS = require('../../../public/images.constant');

export default {
  name: 'Main',
  components: {
    Chart,
    ImageCard
  },
  props: [],
  data () {
    for (let i in IMAGES_URLS) {
      this.images = this.images || [];
      this.images.push({
        header: IMAGES_URLS[i].header,
        unique_id: `image_id_${i}`,
        data: IMAGES_URLS[i].url,
        description: IMAGES_URLS[i].description,
      });
    }

    return {
      data: null,
      images: this.images
    }
  },
  computed: {

  },
  mounted () {
    for (let i in URLS) {
      this.data = this.data || [];
      let arr = [];
      for (let j in URLS[i]) { 
        axios
          .get(URLS[i][j])
          .then(response => {
            if (response.status === 200) {
              arr.push({
                header: response.data.header,
                unique_id: `chart_id_${i}_${j}`,
                data: response.data.data,
                description: response.data.description,
              });
            }
          });
        }
        setTimeout(() => {
          this.data.push(arr);
        }, 500); // TODO: what a shame, here should be subscription
    }

    
  },
  methods: {

  }
}


