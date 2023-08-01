<template>
        <div>
                <h2>Tâches archivées</h2>

                <div v-for="todo in archive" :key="todo.id">
                        <span>{{  todo.item }}</span>
                </div>
        </div>
</template>

<script setup>
// Import du store useTodoListStore
import { useTodoListStore } from "@/stores/todoList.js";

/* Import du Helper "storeToRefs"
Cette méthode permet de ramener et utiliser les propriétés du store (donc les states)
tout en garantissant la réactivité de chaque propriété */
import { storeToRefs } from 'pinia';

// Définition d'une constante stockant le store
const store = useTodoListStore();

/* Utilisation du destructuring pour extraire archive du store.
Ici, storeToRefs crée des refs pour chaque state de store
Donc archive contiendra tous les states */
const { archive } = storeToRefs(store);

// import de l'action cancelArchive et deleteTask du store, via destructuring
const { cancelArchive, deleteItem } = store; 


</script>

<style lang="scss" scoped>

</style>