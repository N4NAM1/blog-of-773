<script setup>
import { ref, reactive, computed, watch, watchEffect  } from 'vue';
import Postlist from "../components/Postlist.vue";
import getPosts from "../composibles/getPosts.js"
import Spinner from "../components/Spinner.vue"
import TagCloud from "../components/TagCloud.vue"
const {posts,load} = getPosts()
load()
const search = ref("");
const match = computed(()=>{
  return posts.value.filter((item) => item.title.includes(search.value))
});
</script>

<template>
  
  <div class="home">  
    <input type="text" placeholder=搜索 v-model="search">
    <div v-if="posts.length" class="layout">
      <Postlist :posts="match" />
      <TagCloud :posts="match" />
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
  
</template> 

<style scoped> 
input{
  flex : 1;
  width: 80%;
  font-size: 20px;
  color: rgb(222, 156, 101);
  font-weight: bold;
}
.home{
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
