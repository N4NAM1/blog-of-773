<script setup>
import {ref} from 'vue';
const props = defineProps({
    posts: Array,
});
const tags = ref([]);
const tagSet = new Set();/* 非重复数据结构*/

props.posts.forEach(item =>{
    item.tags.forEach((tag) => tagSet.add(tag));
})

tags.value = [...tagSet];

</script>

<template >
    <div class="tag-cloud">
        <h2>标签</h2>
        <div v-for="tag in tags" :key=tag>
            <router-link :to="{name: 'Tag', params:{ tag }}">#{{tag}}</router-link>
        </div>
        
    </div>
</template>

<style scoped>
    .tag-cloud{
        padding:10px;
    }
    .tag-cloud h2{
        border-bottom:1 px solid #eee;
        padding:16px 8px;
        color:#444;
    }
    .tag-cloud div{
        display: inline-block;
        padding: 10px;
    }
    .tag-cloud a {
        color:#ccc;
        text-decoration:none;
    }
    .tag-cloud a.router-link-active{
        color:#55ddee;
        font-weight: bold;
    }
</style>