<script setup>
import singlePost from "./singlePost.vue"
const props = defineProps({
    posts: Array,
});

</script>
<template>
    <div class="post-list">
        <div v-for="post in posts" :key=post>
            <singlePost :post="post"/>
        </div>
    </div>
</template> 
<style>

</style>

