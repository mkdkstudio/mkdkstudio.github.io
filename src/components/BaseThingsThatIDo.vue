<template>
    <div class="things-that-i-do-content-section">
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
  .things-that-i-do-content-section {
    width: 100%;
    height: 400px;
    background-color: #f1e1f0; /* Cor de fundo para destacar o componente */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>