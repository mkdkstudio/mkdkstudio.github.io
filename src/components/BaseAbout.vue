<template>
  <div class="about-content-section">
    <div class="image-with-text">
      <div class="image-container">
        <img src="../assets/img/space_studio.jpg" alt="Logo" />
      </div>
      <div class="text-container">
        <h1>About us</h1>
        <p class="justified-text">
          Check out MkDk Studio! We're a super cool and creative production music studio that loves making awesome
          soundtracks for all sorts of media projects. We're all about delivering top-notch tunes that'll make your
          project shine and take storytelling to the next level. Take a dive into our portfolio, feel the passion, and let
          us be the secret sauce for your next big thing with our mind-blowing production music.
        </p>
        <div class="about-social-container">
          <a href="https://www.instagram.com/mkdkstudio/" target="_blank"><i class="fab fa-instagram"></i><span
              class="social-user"> @mkdkstudio</span></a>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
.about-content-section {
  width: 100%;
  min-height: 400px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
}

.about-social-container {
  font-size: 3em;
}

.about-social-container .social-user {
  font-size: 0.4em;
  vertical-align: middle;
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
  max-height: 600px;
}

.text-container {
  flex: 2;
  max-width: 700px;
}

.text-container h1 {
  text-align: center;
}

.justified-text {
  text-align: justify;
  word-break: break-word;
  font-size: larger;

}

/* Media query para telas pequenas */
@media screen and (max-width: 768px) {
  .image-with-text {
    flex-direction: column;
  }

  .image-container {
    width: 100%;
    max-width: none;
    /* Para ignorar a largura máxima definida anteriormente */
  }
}
</style>
