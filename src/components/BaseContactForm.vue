<template>
    <div class="contact-form-content-section">
    <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
            <input type="text" id="name" placeholder="NAME" v-model="formData.name" required>
        </div>
        <div class="form-group">
            <input type="email" id="email" placeholder="EMAIL" v-model="formData.email" required>
        </div>
        <div class="form-group">
            <textarea id="message" placeholder="MESSAGE" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">SUBMIT</button>
    </form>
</div>
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
  .contact-form-content-section {
    background-color: #343434; /* Cor de fundo para destacar o componente */
    height: 400px;
    display: flex;
    align-items: center;
  }


.contact-form {
    width: 400px;
    margin: 0 auto;
    padding: 20px;
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
    border: 2px solid #cc6666;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #cc6666;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #ea4c69;
}

form input:focus-visible {
    outline: none;
    /* Remove a borda de foco */
}

form textarea:focus-visible {
    outline: none;
    /* Remove a borda de foco */
}
</style>
  