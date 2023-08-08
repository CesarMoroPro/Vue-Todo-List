<script setup>
import { RouterLink, RouterView } from 'vue-router';

import TodoApp from '@/views/TodoApp.vue';
</script>

<template>
        <TodoApp />
</template>

<style lang="scss">
body {
        margin: 50px;
        height: 1200px;
        font-family: Arial, Helvetica, sans-serif;
        background-image: linear-gradient(to bottom, #cf308b, #eb4866, #ef7147, #e29936, #c8be45, #c0ce54, #b6de67, #a9ed7d, #b8f176, #c7f56e, #d8f866, #e9fb5f);

        h2 {
                font-size: 1.75rem;
                color: white;
        }

        /* Classes des icônes pour la todo-list et la liste de tâches archivées */
        .icons-tasks-name, .icons-tasks-buttons {
                color: white;
        }

        .icons-tasks-name {
                margin-right: 15px;
        }

        .all-icons-for-one-task {
                        display: flex;
                        flex-direction: row;
                        gap: 8px;
                }
}
</style>