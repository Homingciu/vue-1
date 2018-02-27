<template>
  <div id="app">
    <ul id="nav">
      <li>
        <router-link to="/position">position</router-link>
      </li>
      <li>
        <router-link to="/picture">picture</router-link>
      </li> 
      <li>
        <router-link to="/photo">photo</router-link>
      </li>   
    </ul>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
      margin: 0;
      padding: 0;
  }
  a>img.position{
      width: 50px;
  }

  canvas,
  video{
      border: 1px solid black;
  }
</style>
