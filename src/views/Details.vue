<script setup>
import getPost from '../composibles/getPost';
import Spinner from "../components/Spinner.vue";
import {useRoute,useRouter} from 'vue-router';
import axios from 'axios';


const route = useRoute()
const router = useRouter()
const {post,load} = getPost(route.params.id)/* 拿数据 */
load();
const props = defineProps({
    id: String,
});
const deletePost = async() =>{
   await axios.delete("http://localhost:3003/posts/"+route.params.id);
   router.push("/");
};
</script>

<template>
 <div class="post" v-if="post">
  <h2>{{post.title}}</h2>  
  <p class="pre">{{post.body}}</p>
  <div class="tag-cloud">
        <div v-for="tag in post.tags" :key=tag>
            #{{tag}}
        </div>
   </div>
  <div class=button>
   <router-link :to="{name: 'Change', params:{id:route.params.id}}"><button>修改</button></router-link>
   <button @click="deletePost">删除</button>
  </div>
  
 </div>
 <div v-else>
    <Spinner/>
 </div>

</template>

<style scoped>
   .tags a{
    margin-right: 10px;
   }
   .post{
    max-width:1000px;
    margin:0 auto;
   }
   .post p{
    color:#444;
    line-height:1.5em;
    margin-top:40px;
   }
   .pre{
    white-space: pre-wrap;
   }
   .button{
      display:flex;
      justify-content: space-around;
   }
   button{
        margin-top: 30px;
        background: #55ddee;
        color:white;
        border:none;
        padding:8px 16px;
        font-size:18px;
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
.tag-cloud{
        padding:10px;
}
.tag-cloud div{
        display: inline-block;
        padding: 10px;
}
</style>