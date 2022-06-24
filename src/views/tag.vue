<script setup>
import {useRoute} from 'vue-router';
import {computed} from 'vue';/* 计算属性数据处理用 */
import getPosts from "../composibles/getPosts.js"
import Postlist from "../components/Postlist.vue"
import TagCloud from "../components/TagCloud.vue"

const route =useRoute();/*获取路由数据参数（）此处里的param的tag要用*/
const {posts, load} = getPosts();
load();
const postWithTag =computed(()=>{
    return posts.value.filter((p)=>p.tags.includes(route.params.tag));
});
</script>
<template>
    <div class="tag">
        <div v-if="posts.length">
            <Postlist :posts="postWithTag" />
            <TagCloud :posts="posts" />
        </div>
    </div>
</template>

<style scoped>
    .tag{
        max-width: 1000px;
        margin:0 auto;
        padding: 10px;
    }
</style>