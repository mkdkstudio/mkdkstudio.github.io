<template>
  <div class="platform-content-section">
  <div class="image-grid">
    <h1 class="image-grid-title">Online Portifolio</h1>
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
  min-height: 400px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Espaçamento entre as imagens */
  padding: 10px;
  justify-content: center;
}

.image-grid-title {
  text-align: center; 
  width: 100%;
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
