<template>
  <div class="about-content-section">
    <div class="image-with-text">
      <div class="image-container">
        <img src="../assets/img/logo-2.png" alt="Logo" />
      </div>
      <div class="text-container">
        <p class="justified-text">
          MkDk Studio is a dynamic and creative production music studio specializing in crafting captivating soundtracks
          for various media projects.
          With a passion for delivering high-quality compositions, MkDk Studio offers a wide range of original music
          tracks tailored to evoke emotion and enhance storytelling. Explore our portfolio, experience our passion, and
          let us help you elevate your projects with our exceptional production music.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.about-content-section {
  width: 100%;
  height: 400px;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-with-text {
  display: flex;
  /* Define o layout como flexível */
  align-items: center;
  /* Alinha os itens verticalmente no centro */
  gap: 20px;
  /* Espaçamento entre a imagem e o texto */
}

.image-container {
  flex: 1;
  /* A imagem ocupará a maior parte do espaço disponível */
}

.text-container {
  flex: 2;
  /* O texto ocupará duas vezes mais espaço do que a imagem */
}

.justified-text {
  text-align: justify;
  /* Justifica o texto */
}</style>
