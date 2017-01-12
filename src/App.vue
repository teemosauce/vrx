<template>
  <div id="app">

   
    
    <head></head>

    <router-view></router-view>
    <footer>
   
      <router-link to="/index">首页</router-link>
      <router-link to="/discover">发现</router-link>
      <router-link to="/message">消息</router-link>
      <router-link to="/my">我</router-link>
    </footer>

  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions(['next']),
    handleOpen:function(key, keyPath){
      console.log(key, keyPath)
    },
    handleClose:function(key, keyPath){
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    padding-bottom: 50px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  p.doc{
    /*position: */
  }
  

  footer{
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: #000;
  }

</style>
