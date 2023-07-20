<template>
  <div>
    <BaseFullPageBackground />
    <BaseAbout />
    <BasePlatform/>
    <BaseMusicPlayer />
    <!-- <BaseThingsThatIDo text="Este é um texto que será exibido no componente Things that I do" /> -->
    <BaseContactForm />
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>


<style>
body {
  font-family: 'Raleway', sans-serif;
  color: #656565;
}
</style>