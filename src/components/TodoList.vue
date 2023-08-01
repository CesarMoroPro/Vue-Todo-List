<template>
        <div v-for="todo in todoList" :key="todo.id" >
                <div class="content">
                        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
                        <span class="icons" @click.stop="toggleCompleted(todo.id)">&#10004;</span>
                        <span class="icons" @click="toggleCompleted(todo.id)">&#10060;</span>
                </div>
        </div>
</template>

<script setup>
// Import du store todoList.js pour accéder aux states
import { useTodoListStore } from '../stores/todoList';
/* Import du Helper "storeToRefs"
Cette méthode permet de ramener et utiliser les propriétés du store (donc les states)
tout en garantissant la réactivité de chaque propriété */
import { storeToRefs } from 'pinia';

// Stockage du store dans une constante
const store = useTodoListStore();
/* Utilisation du destructuring pour extraire todoList dans le store.
Ici, storeToRefs crée des refs pour chaque state de store
Donc todoList contiendra tous les states */
const { todoList } = storeToRefs(store);

</script>

<style lang="scss" scoped>

</style>