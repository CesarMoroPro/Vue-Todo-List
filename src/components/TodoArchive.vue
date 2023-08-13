<template>
        <div 
                class="all-tasks"
                v-show="archiveList.length > 0"
        >
        
                <h2 v-show="archiveList.length === 1">{{ archiveList.length }} tâche archivée</h2>
                <h2 v-show="archiveList.length !== 1">{{ archiveList.length }} tâches archivées</h2>

                <div 
                        class="one-task" 
                        v-for="archivedTask, indexInArchiveList in archiveList" :key="archivedTask.id"
                        v-show="!displayConfirmationDeleteAllArchivedTasks"
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
                                        <AddConfirmationDeletionOneArchivedTask
                                                v-show="archivedTask.displayConfirmationDeleteMessage"
                                                :targetArchivedTaskID="archivedTask.id"
                                                :targetArchivedTaskContent="archivedTask.item"
                                                class="confirmation-message"
                                        />
                                </div>
                        </div>

                        <HorizontalSeparator />
                </div>

                <div v-show="!displayConfirmationDeleteAllArchivedTasks" class="delete-all-archived-tasks-span">
                        <span>Supprimer toutes les tâches archivées ?</span>
                        <br>
                        <font-awesome-icon 
                                :icon="['fas', 'explosion']" 
                                class="icons-tasks-buttons delete-all-archived-tasks"
                                @click="askConfirmationDeletionAllArchivedTasks()"
                        />
                </div>

                <AddConfirmationDeletionAllArchivedTasks
                        v-show="displayConfirmationDeleteAllArchivedTasks"
                        class="confirmation-message"
                />
        </div>
</template>

<script setup>
import AddConfirmationDeletionAllArchivedTasks from "./messages/AddConfirmationDeletionAllArchivedTasks.vue";
import AddConfirmationDeletionOneArchivedTask from "./messages/AddConfirmationDeletionOneArchivedTask.vue";
import HorizontalSeparator from "./visuals/HorizontalSeparator.vue";

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
const { archiveList, displayConfirmationDeleteAllArchivedTasks } = storeToRefs(store);

// import des actions du store, via destructuring
const { cancelArchiveItem, askConfirmationDeletion, askConfirmationDeletionAllArchivedTasks } = store;


</script>

<style lang="scss" scoped>
.all-tasks {
        width: 50%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        .one-task {     
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

        .delete-all-archived-tasks-span {
                margin-top: 1rem;
                text-align: center;
        }
        .delete-all-archived-tasks {
                font-size: 1.85rem;
        }
}

</style>