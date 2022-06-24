<script setup>
import getPost from '../composibles/getPost';
import Spinner from "../components/Spinner.vue";
import {useRoute,useRouter} from 'vue-router';
import axios from 'axios';
import {ref} from 'vue'
const route = useRoute()
const router = useRouter()
const {post,load} = getPost(route.params.id)/* 拿数据 */
load();
const title = ref("")
const body = ref("")
const tags = ref([])
const tag = ref("")
const props = defineProps({
    id: String,
});
const handleKeydown = () => {
    if(!tags.value.includes(tag.value)){
        tag.value.replace(/\s/g,"");
        tags.value.push(tag.value);
    }

    tag.value = ""
}
const handleSubmit = async() => {
    //准备数据
    const post= {
        id: route.params.id,
        title: title.value,
        body: body.value,
        tags: tags.value,
    }

    const data = await axios.patch("http://localhost:3003/posts/"+route.params.id, post);/* 进行改数据 */
    console.log(data)
    if(data.status === 200){
        router.push("/")
    }
}

    

</script>
<template>
  
<div class="change" v-if="post">
    <h2>{{post.title}}</h2>  
    <p class="pre">{{post.body}}</p>
    <div class="tag-cloud">
        <div v-for="tag in post.tags" :key=tag>
            #{{tag}}
        </div>
    </div>
        <form @submit.prevent="handleSubmit">
            <label for="title">修改的标题</label>
            <input type="text" placeholder=标题 v-model="title" required/>
            <label for="body">修改的内容</label>
            <textarea placeholder=内容 v-model="body"></textarea>
            <label for="tag">标签（回车添加标签）</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown"/>
            <!-- 显示标签 -->
            <div v-for="tag in tags" :key="tag" class="pill">
                #{{tag}}
            </div>

            <button>修改</button>
        </form>
</div>
 <div v-else>
    <Spinner/>
 </div>
</template>
<style scoped>
    form{
        max-width: 400px;
        margin :0 auto;
        text-align: left;
    }
    input,textarea{
        display: block;
        margin: 10px 0;
        width: 100%;
        box-sizing:border-box;
        padding:10px;
        border:1px solid #eee;
    }
    textarea{
        height:160px;
    }
    button{
        display:block;
        margin-top: 30px;
        background: #55ddee;
        color:white;
        border:none;
        padding:8px 16px;
        font-size:18px;
    }
    .pill{
        display:inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background:#ddd;
        border-radius:8px;
        padding:8px;
        font-size:14px;
    }
    .tag-cloud{
        padding:10px;
    }
    .tag-cloud div{
        display: inline-block;
        padding: 10px;
    }
    .tags a{
        margin-right: 10px;
    }

    .change h2{
        display: inline-block;
        position:relative;
        font-size: 26px;
        color:white;
        margin-bottom: 10px;
        max-width: 400px;
    }
    .change h2::before{
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
   .change{
        max-width:1000px;
        margin:0 auto;
    }
   .change p{
    color:#444;
    line-height:1.5em;
    margin-top:40px;
   }
   .pre{
    white-space: pre-wrap;
   }
</style>