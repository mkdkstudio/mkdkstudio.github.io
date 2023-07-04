<template>
    <div class="full-page-background">
      <!-- Adicione a imagem de logo centralizada -->
      <img class="logo" src="../assets/img/logo-1.png" alt="Logo">
      <!-- Conteúdo do componente aqui, se necessário -->
    </div>
  </template>
  
  <style>
  .full-page-background {
    /* Define a imagem de fundo e ajusta-a para cobrir todo o componente */
    background-image: url('../assets/img/header-2.jpg');
    background-size: cover;
    background-position: center;
    
    /* Define a altura do componente para ocupar toda a tela */
    height: 100vh;
    
    /* Centraliza o conteúdo verticalmente */
    display: flex;
    align-items: center;
  }

  .full-page-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Cor de fundo com 50% de opacidade (mais escura) */
}
  
  /* Estilos da imagem de logo */
  .logo {
    /* Defina o tamanho da imagem de logo conforme necessário */
    width: 45vw;
    height: auto;
    
    /* Centraliza a imagem horizontalmente */
    margin: 0 auto;

    /* Aplica o filtro para inverter as cores (preto vira branco, branco vira preto) */
  filter: invert(1);
  }
  </style>