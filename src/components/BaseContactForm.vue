<template>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      async submitForm() {
        try {
          // Substitua o 'YOUR_FORMSPREE_ENDPOINT' pelo endpoint fornecido pelo Formspree
          const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqkvzjny';
  
          const response = await axios.post(FORMSPREE_ENDPOINT, this.formData);
  
          if (response.status === 200) {
            console.log('Dados enviados com sucesso!');
            // Você pode adicionar aqui uma mensagem de sucesso ou redirecionar para outra página
          }
        } catch (error) {
          console.error('Erro ao enviar dados:', error);
          // Você pode adicionar aqui uma mensagem de erro para o usuário
        }
      },
    },
  };
  </script>
  
  <style>
  .contact-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  