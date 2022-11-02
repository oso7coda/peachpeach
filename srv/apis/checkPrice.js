const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get('https://onlydev.tistory.com/102');
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then((html) => {
    // axios 응답 스키마 `data`는 서버가 제공한 응답(데이터)을 받는다.
    // load()는 인자로 html 문자열을 받아 cheerio 객체 반환
    const $ = cheerio.load(html.data);
    const data = {
      mainContents: $('div.entry-content > div > p:nth-child(25)').text(),
    };
    return data;
  })
  .then((res) => log(res));