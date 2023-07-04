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
  height: auto;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
}

.image-with-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%; 
  height: auto;
}

.text-container {
  flex: 2;
  max-width: 700px;
}

.justified-text {
  text-align: justify;
  word-break: break-word;
  font-size: larger;
  color: #656565;
}

/* Media query para telas pequenas */
@media screen and (max-width: 768px) {
  .image-with-text {
    flex-direction: column;
  }

  .image-container {
    width: 100%;
    max-width: none; /* Para ignorar a largura máxima definida anteriormente */
  }
}
</style>
