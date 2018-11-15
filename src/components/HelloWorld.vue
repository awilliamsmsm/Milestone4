<template>
  <div class="hello">
    <h1>{{ times }}</h1>
    <h2>{{ msg }}</h2>
    <h3> {{canadaTime}}</h3>
    <ul>
      <li>
        <a
        >

        </a>
      </li>
      <li>
        <a

        >

        </a>
      </li>
      <li>
        <a

        >

        </a>
      </li>
      <li>
        <a

        >

        </a>
      </li>
      <br>
      <li>
        <a

        >

        </a>
      </li>
    </ul>
    <h2></h2>
    <ul>
      <li>
        <a
        >

        </a>
      </li>
      <li>
        <a
        >

        </a>
      </li>
      <li>
        <a
        >
        </a>
      </li>
      <li>
        <a

        >

        </a>
      </li>
    </ul>
  </div>
</template>

<script>
//import axios from 'axios';
import timeService from '../services/timeService';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Local Time',
      times: null,
      canadaTime: null
    }
  },

  async mounted() {
    //const { data } = await axios.get('http://localhost:9000/getTime');
    this.times = (await timeService.getTime()).data;
    this.canadaTime = (await timeService.getCanadaTime()).data;
    //this.msg = data;
  },
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #41b983
}
</style>
