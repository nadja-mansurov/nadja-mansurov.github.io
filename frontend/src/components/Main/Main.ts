

import axios from 'axios';
import Chart from '../Chart';

const URLS = require('../../../public/urls.constant');
//import  chartData from "../../assets/vega/2.json";

export default {
  name: 'Main',
  components: {
    Chart
  },
  props: [],
  data () {
    return {
      data: null
    }
  },
  computed: {

  },
  mounted () {
    for (let i in URLS) {
      axios
        .get(URLS[i])
        .then(response => {
          if (response.status === 200) {
            this.data = this.data || [];
            this.data.push({
              header: response.data.header,
              unique_id: `chart_id_${i}`,
              data: response.data.data
            });
            return this.data;
          }
        });
    }
  },
  methods: {

  }
}


