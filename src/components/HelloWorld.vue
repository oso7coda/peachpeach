<template>
  <div class="hello">
    <button v-on:click="getPeachPriceBtn">데이터 가져오기?</button>
     복숭아 가격을 조사해 보자..
    <div>
      여기 표도 넣고
    </div>
    <div>

      크롤링도 하고..
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getPeachPriceBtn(){
      axios.post('check');
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
