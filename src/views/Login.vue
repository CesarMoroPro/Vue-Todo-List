<template>
        <h1 class="main-title">Vue3 To Do List</h1>

        <form class="form-connexion">
                <label>Identifiant :</label>
                <input v-model="userName" />

                <label>Mot de passe :</label>
                <input v-model="password" />
        </form>
</template>

<script setup>
// import { ref } pour créer une variable réactive pour le v-model
import { ref } from 'vue';

const userName = ref('');
const password = ref('');
</script>

<style scoped lang="scss">
.main-title {
        text-align: center;
        color: white;
}

.form-connexion {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;

        label {
                color: white;
        }

        input {
                width: 50%;
                background-color: white;
                color: #f0f;
                margin-bottom: 1.2rem;
                padding: 5px;
        }
}
</style>