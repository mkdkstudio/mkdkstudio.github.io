<!-- <template>
  <div class="platform-content-section">
    <div class="links-container">
      <a href="#" class="link-item">
        <img src="../assets/img/p5logo_350px.png" alt="Link 1" class="link-image" />
      </a>
      <a href="#" class="link-item">
        <img src="../assets/img/123rf-logo-blackbg.webp" alt="Link 2" class="link-image" />
      </a>
    </div>
  </div>
</template>
  
<script>

</script>
  
<style>
.platform-content-section {
  width: 100%;
  height: 400px;
  background-color: #a0dfd4;
  /* Cor de fundo para destacar o componente */
  display: flex;
  justify-content: center;
  align-items: center;
}

.links-container {
  display: flex;
  justify-content: space-between;
}

.link-item {
  flex: 1;
  max-width: 300px;
}

.link-image {
  width: 100%;
  height: auto;
}
</style> -->

<!-- --- -->

<template>
  <div class="platform-content-section">
    <h3 class="image-grid-title">Online Portifolio</h3>
  <div class="image-grid">
    <div class="image-item">
      <a href="https://www.pond5.com/pt/artist/MaykonDeykon?ref=MaykonDeykon">
        <img
          src="../assets/img/p5logo_350px.png"
          alt="Pond 5"
          title="Pond 5"
          class="grid-image"
        />
      </a>
    </div>
    <div class="image-item">
      <a href="https://pt.123rf.com/profile_maykondeykon/audio">
        <img
          src="../assets/img/123rf-logo-blackbg.webp"
          alt="123RF"
          title="123RF"
          class="grid-image"
        />
      </a>
    </div>
    <!-- Adicione mais divs de "image-item" e "img" conforme necessário -->
  </div>
</div>
</template>

<style>
.platform-content-section {
  width: 100%;
  height: auto;
  background-color: #a0dfd4;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; 
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espaçamento entre as imagens */
  padding: 10px;
}

.image-item {
  flex: 1;
  max-width: 300px; /* Largura máxima de cada item da grade */
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
}

.grid-image {
  width: 100%;
  height: auto;
}
</style>
