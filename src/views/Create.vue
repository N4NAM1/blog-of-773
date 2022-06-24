<script setup>
import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from "vue-router";

const title = ref("")
const body = ref("")
const tags = ref([])
const tag = ref("")
const router = useRouter();

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
        id:Math.floor(Math.random()*10000),
        title: title.value,
        body: body.value,
        tags: tags.value,
    }

    const data = await axios.post("http://localhost:3003/posts", post);/* 进行传数据 */
    console.log(data)
    if(data.status === 201){
        router.push("/")
    }
}
</script>
<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label for="title">标题</label>
            <input type="text" v-model="title" required/>
            <label for="body">内容</label>
            <textarea v-model="body"></textarea>
            <label for="tag">标签（回车添加标签）</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown"/>
            <!-- 显示标签 -->
            <div v-for="tag in tags" :key="tag" class="pill">
                #{{tag}}
            </div>

            <button>添加</button>
        </form>
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
</style>