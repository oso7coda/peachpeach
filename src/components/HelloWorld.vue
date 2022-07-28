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
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get('https://www.busan.go.kr/market/mktdistributioninfo010102?curPage=1');
  } catch (error) {
    console.error(error);
  }
};

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getPeachPriceBtn(){
        getHtml().then((html) => {
        // axios 응답 스키마 `data`는 서버가 제공한 응답(데이터)을 받는다.
        // load()는 인자로 html 문자열을 받아 cheerio 객체 반환
        const $ = cheerio.load(html.data);
        console.log($)
        const data = {
          mainContents: $('table.boardList > tbody').text(),
        };
        return data;
      })
      .then((res) => log(res));
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
