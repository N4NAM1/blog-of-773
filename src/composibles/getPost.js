import { ref } from 'vue';
import axios from 'axios';
const getPost = (id) => {


    const post=ref({});

    const load = async() =>{
    try {
        let {data} = await axios("http://localhost:3003/posts/"+id)
        console.log(data)
        post.value = data
    }catch (error){
        console.log(error)
    }
    };//进行数据异步串行端口

    load();

    return{ post, load };
}

export default getPost