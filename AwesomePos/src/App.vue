<template>
  <div id="app">
    <left-nav></left-nav>
    <transition name="fade">
      <div class="main">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import LeftNav from '@/components/Common/LeftNav'
export default {
  name: 'app',
  data (){
    return {

    }
  },
  components: {
    LeftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;

}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
