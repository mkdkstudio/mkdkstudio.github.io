<template>
    <div class="about-content-section">
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .about-content-section {
    width: 100%;
    height: 400px;
    background-color: #f0f0f0; /* Cor de fundo para destacar o componente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>