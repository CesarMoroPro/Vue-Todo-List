<template>
        <div>
                <h2 v-show="archiveList.length === 1">Tâche archivée</h2>
                <h2 v-show="archiveList.length !== 1">Tâches archivées</h2>

                <div v-for="archivedTask in archiveList" :key="archivedTask.id">
                        <span>{{  archivedTask.item }}.</span>
                        <span @click="cancelArchiveItem(archivedTask.id)">[ Désarchiver ]</span>
                        <span @click="askConfirmationDeletion(archivedTask.id)">[ Supprimer définitivement ]</span>
                        <AddConfirmationMessage v-show="archivedTask.displayConfirmationDeleteMessage" :targetArchivedTask="archivedTask.id"/>
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
import AddConfirmationMessage from "./messages/AddConfirmationMessage.vue";

// Définition d'une constante stockant le store
const store = useTodoListStore();

/* Utilisation du destructuring pour extraire archive du store.
Ici, storeToRefs crée des refs pour chaque state de store
Donc archive contiendra tous les states */
const { archiveList } = storeToRefs(store);

// import de l'action cancelArchive et deleteItem du store, via destructuring
const { cancelArchiveItem, askConfirmationDeletion } = store;


</script>