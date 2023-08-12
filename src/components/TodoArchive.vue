<template>
        <div 
                class="all-tasks"
                v-if="archiveList.length > 0"
        >
        
                <h2 v-show="archiveList.length === 1">{{ archiveList.length }} tâche archivée</h2>
                <h2 v-show="archiveList.length !== 1">{{ archiveList.length }} tâches archivées</h2>

                <div 
                        class="one-task" 
                        v-for="archivedTask, indexInArchiveList in archiveList" :key="archivedTask.id"
                >
                        <div class="container">
                                <div 
                                        class="container__task"
                                        v-show="!archivedTask.displayConfirmationDeleteMessage"
                                >
                                        <div class="name-task">
                                                <span>{{  archivedTask.item }}</span>
                                        </div>
                
                                        <div class="all-icons-for-one-task">
                                                <span class="icons-tasks-buttons" @click="cancelArchiveItem(archivedTask.id)"><font-awesome-icon :icon="['fas', 'backward-fast']" /></span>
                                                <span class="icons-tasks-buttons" @click="askConfirmationDeletion(archivedTask.id)"><font-awesome-icon :icon="['far', 'trash-can']" /></span>
                                        </div>
                                </div>
        
                                <div class="container__message">
                                        <AddConfirmationMessage 
                                                v-show="archivedTask.displayConfirmationDeleteMessage"
                                                :targetArchivedTaskID="archivedTask.id"
                                                :targetArchivedTaskContent="archivedTask.item"
                                                class="confirmation-message"
                                        />
                                </div>
                        </div>
                </div>

                <HorizontalSeparator />
        </div>
</template>

<script setup>
import HorizontalSeparator from "./visuals/HorizontalSeparator.vue";

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

<style lang="scss" scoped>
.all-tasks {
        width: 50%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        .one-task {     
                margin-top: 20px;
                margin-bottom: 20px;
                .container__task {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;

                }

                .container__message {
                        position: relative;
                        z-index: 1;
                }
        }
}

</style>