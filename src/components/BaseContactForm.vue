<template>
    <div class="contact-form-content-section">
        <div class="form-container">
            <div v-if="showSuccessMessage" class="success-message">
                {{ msg }}
            </div>
            <h3 class="form-title">Liked what you heard? Drop us a message!</h3>
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
                <button type="submit" :disabled="showSuccessMessage">SUBMIT</button>
            </form>
        </div>
        <div class="email-address">
            <p>Or contact us at <a href="mailto:contact@mkdkstudio.com">contact@mkdkstudio.com</a></p>
        </div>
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
            showSuccessMessage: false,
            msg: ''
        };
    },
    methods: {
        async submitForm() {
            try {
                const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqkvzjny';

                const response = await axios.post(FORMSPREE_ENDPOINT, this.formData);

                if (response.status === 200) {
                    this.msg = "You message has been received, thank you!";
                    console.log('Dados enviados com sucesso!');
                }
            } catch (error) {
                this.msg = "Sorry, an error occurred. Please try again later.";
                console.error('Erro ao enviar dados:', error);
            }
            this.showSuccessMessage = true;
        },
    },
};
</script>
  
<style>
.contact-form-content-section {
    background-color: #343434;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-container {
    margin-bottom: 20px;
}

.contact-form {
    max-width: 400px;
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

.form-title {
    padding: 10px;
    text-align: center;
    color: whitesmoke;
    max-width: 400px;
}

form input:focus-visible {
    outline: none;
    /* Remove a borda de foco */
}

form textarea:focus-visible {
    outline: none;
    /* Remove a borda de foco */
}

form .success-message {
    padding: 10px;
    text-align: center;
    color: whitesmoke;
}

.email-address {
    text-align: center;
    margin-top: 20px;
    color: whitesmoke;
}
</style>
  