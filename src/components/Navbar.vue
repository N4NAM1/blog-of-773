/*导航 */
<script setup>

  
</script>

<template>
  <header>
    <h1>BLOG OF 773</h1>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/create">新建</router-link>
    </nav>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1000px;
    margin:0 auto;
    padding: 10px;
  }
  header h1{
    background-image: url("../picture/1.png");
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 48px;
  }
  header a{
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active{
    color: #444;
    font-weight:bold;
  }
</style>