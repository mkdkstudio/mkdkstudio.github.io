<template>
    <div class="platform-content-section">
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
  .platform-content-section {
    width: 100%;
    height: 400px;
    background-color: #a0dfd4; /* Cor de fundo para destacar o componente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>