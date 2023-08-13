<template>
        <div class="ask-confirmation">
                <p class="confirmation-message">Voulez-vous supprimer toutes les tâches archivées ? La suppression est définitive.</p>

                <div class="buttons">
                        <v-btn 
                                variant="outlined" elevation="4" size="x-large" :ripple="true"
                                @click="cancelDeleteAllArchivedTasks()"
                        >
                                NON
                        </v-btn>
                
                        <v-btn 
                                variant="outlined" elevation="4" size="x-large" :ripple="true"
                                @click="deleteAllArchivedTasks()"
                        >
                                OUI
                        </v-btn>
                </div>
        </div>
</template>

<script setup>

/* J'importe le fichier store "useTodoListStore" */
import { useTodoListStore } from '../../stores/todoList';

/* Je stocke mon store dans une constante */
const store = useTodoListStore();

/* J'extrais les actions du store nécessaires dans ce composant */
const { cancelDeleteAllArchivedTasks, deleteAllArchivedTasks } = store;

</script>



<style lang="scss" scoped>
.ask-confirmation {
        text-align: center;

        .important-task-content {
                font-weight: bold;
                color: white;
        }
}
.buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
}

button {
                border-radius: 6px;
                outline: solid 1px #E9FB5F;
                border: none;
                height: 1.5rem;
        }

button:hover {
        outline: solid 3px #E9FB5F;
}

button {
        color: white;
        margin-top: 10px;
}

button:hover {
        color: #E9FB5F;
}
</style>