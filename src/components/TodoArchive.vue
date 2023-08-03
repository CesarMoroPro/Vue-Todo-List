<template>
        <div>
                <h2 v-show="archiveList.length === 1">Tâche archivée</h2>
                <h2 v-show="archiveList.length !== 1">Tâches archivées</h2>

                <div v-for="task, index in archiveList" :key="task.id">
                        <span>{{  task.item }}.</span>
                        <span @click="cancelArchiveItem(task.id, index)">[ Désarchiver ]</span>
                        <span @click="deleteItem(task.id)">[ Supprimer définitivement ]</span>
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
const { archiveList } = storeToRefs(store);

// import de l'action cancelArchive et deleteItem du store, via destructuring
const { cancelArchiveItem, deleteItem } = store;


</script>

<style lang="scss" scoped>

</style>