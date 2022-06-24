<script setup>
import {computed} from 'vue'
const props = defineProps({
    post:Object,
});
const body_limit = computed(() => {
    return props.post.body.substring(0,100)+"...";
});
</script>


<template>
  <div class="post">
    <router-link :to="{name: 'Details',params: {id: post.id}}">
      <h2>{{post.title}}</h2>
    </router-link>
    <p>{{body_limit}}</p>
    <span v-for="tag in post.tags" :key="tag">#{{tag}}</span>
  </div>
</template>


<style scoped>
.post{
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2{
  display: inline-block;
  position:relative;
  font-size: 26px;
  color:white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2::before{
  content:"";
  display: block;
  width:100%;
  height:100%;
  position:absolute;
  background:#55ddee;
  z-index:-1;
  padding-right: 40px;
  left:-30px;
}
</style>
