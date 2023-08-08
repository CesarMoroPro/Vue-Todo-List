<template>
        <header>
                <span class="connexion-button">Connexion</span>
                <h1 class="main-title">Vue3 To Do List</h1>

                <TodoForm />
        </header>
</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue';

</script>

<style lang="scss" scoped>
header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 50px;

        h1 {
                font-weight: 500;
        }

        .connexion-button {
                color: white;
                text-decoration: underline;
                font-weight: 100;
        }
        .main-title {
                font-size: 3rem;
        }
}
</style>