<template>
  <div class="hello">
    
  </div>
</template>

<script>
import { request } from '../network/request.js'
import axios from 'axios'
// axios的参数配置以及并发请求
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created() {
    request({
        url: '/headers',
      method: 'get'
    }).then(res => {
        console.log(res)
        }).catch(err => {
        console.log(err)
    })
    axios.get('https://httpbin.org/headers')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  mounted() {
    axios.defaults.baseURL = 'https://httpbin.org'
    axios.all([
      axios({
        url: '/headers',
        method: 'get',
        params: {
          type: 'sell'
        }
      }),
      axios({
        url: '/get',
        method: 'get',
      }),
      axios({
        method: 'post',
        data: {
          name: 'cuizhiqiang',
          age: 33
        },
        url: 'https://httpbin.org/post'
      }),
      ]).then(axios.spread((res1, res2, res3) => {
        console.log(res1)
        console.log(res2)
        console.log(res3)
      }))
  }
}
console.log('-------------------------')
// 创建axios的实例
const instance = axios.create({
  baseURL: 'https://httpbin.org',
  timeout: 5000
})
instance({
  url: '/headers',
  method: 'get'
}).then(res => {
  console.log(res)
})
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
