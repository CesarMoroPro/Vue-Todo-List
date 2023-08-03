<template>
        <h2>Liste des tâches</h2>

        <!-- "todoList" est importée grâce au store "useTodoListStore" dans "/stores/todoList.js" -->
        <div v-for="todo in todoList" :key="todo.id" >
                <div class="content">
                        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
                        <span class="icons" @click.stop="toggleCompleted(todo.id)" v-show="!todo.completed">[ Valider ]</span>
                        <span class="icons" @click.stop="toggleCompleted(todo.id)" v-show="todo.completed">[ Annuler ]</span>
                        <span class="icons" @click="archiveItem(todo.id)" v-show="todo.completed">[ Archiver ]</span>
                </div>
        </div>
</template>

<script setup>
// Import du store todoList.js pour accéder aux states
import { useTodoListStore } from '@/stores/todoList.js';
/* Import du Helper "storeToRefs"
Cette méthode permet de ramener et utiliser les propriétés du store (donc les states)
tout en garantissant la réactivité de chaque propriété */
import { storeToRefs } from 'pinia';

// Stockage du store dans une constante
const store = useTodoListStore();

/* Utilisation du destructuring pour extraire todoList du store.
Ici, storeToRefs crée des refs pour chaque state de store
Donc todoList contiendra tous les states */
const { todoList } = storeToRefs(store);

// import de l'action toggleCompleted du store, via destructuring
const { toggleCompleted, archiveItem } = store; 

</script>

<style scoped>
.completed {
        text-decoration: line-through;
}

</style>