<template>
        <div>
                <h2>Tâches archivées</h2>

                <div v-for="archive in archiveList" :key="archive.id">
                        <span>{{  archive.item }}</span>
                        <span @click="cancelArchiveItem(archive.id)">[ Désarchiver ]</span>
                        <span @click="deleteItem(archive.id)">[ Supprimer définitivement ]</span>
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