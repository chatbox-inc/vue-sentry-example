<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ desc }}</p>
    <h3>Functions</h3>
    <ul>
      <li><a href="#" @click.prevent="openModal">open modal</a></li>
      <li><a href="#" @click.prevent="openModalDelay">open modal with delay</a></li>
      <li><a href="#" @click.prevent="loadData">load data</a></li>
    </ul>
    <h3>Links</h3>
    <ul>
      <li><a href="/" >top</a></li>
      <li><a href="/handle_error">handle error</a></li>
      <li><a href="/sentry" >with sentry</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    desc: String,
  },
  methods:{
    openModal(){
      document.querySelector(".modal").classList.add("active")
    },
    openModalDelay(){
      setTimeout(()=>{
        this.openModal()
      },1000)
    },
    loadData(){
      fetch("http://example.com/api/hoge")
    }
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
