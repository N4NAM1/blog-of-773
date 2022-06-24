import { ref } from 'vue';
import axios from 'axios';
const getPosts = () => {


    const posts=ref([]);

    const load = async() =>{
    try {
        let {data} = await axios("http://localhost:3003/posts")
        console.log(data)
        posts.value = data
    }catch (error){
        console.log(error)
    }
    };//进行数据异步串行端口

    load();

    return{ posts, load };
}

export default getPosts