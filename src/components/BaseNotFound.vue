<template>
  <div class="not-found-container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The Page you are looking for doesn't exist or an other error occured. Go to <a href="/">Home Page.</a></p>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Not found'
  }
}
</script>

<style>
.not-found-container h1 {
  font-size: 90px;
  text-align: center;
  line-height: inherit;
}

.not-found-container h2 {
  font-size: 25px;
  text-align: center;
}

.not-found-container p {
  text-align: center;
  font-size: 12px;
}

.not-found-container {
  width: 300px;
  margin: 0 auto;
  margin-top: 15%;
  font-family: 'Raleway', sans-serif;
  color: #656565;
}
</style>
  