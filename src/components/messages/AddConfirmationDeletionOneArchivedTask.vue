<template>
        <div class="ask-confirmation">
                        <p class="confirmation-message">Voulez-vous vraiment supprimer la tâche <span class="important-task-content">{{ targetArchivedTaskContent }}</span> ? La suppression est définitive.</p>
                
                <div class="buttons">
                        <v-btn 
                                variant="outlined" elevation="4" size="x-large" :ripple="true"
                                @click="cancelDeleteOneArchivedTask(targetArchivedTaskID)"
                        >
                                NON
                        </v-btn>
                
                        <v-btn 
                                variant="outlined" elevation="4" size="x-large" :ripple="true"
                                @click="deleteOneArchivedTask(targetArchivedTaskID)"
                        >
                                OUI
                        </v-btn>
                </div>
        </div>
</template>

<script setup>
// Import du store useTodoListStore
import { useTodoListStore } from "@/stores/todoList.js";
/* Import de { defineProps } de vue */
import { defineProps } from "vue";

// Stockage de tout le store dans une variable
const store = useTodoListStore();

// Je définis la props qui recevra l'id de la tâche depuis le SFC TodoArchive.vue
const props = defineProps({
        targetArchivedTaskID: Number,
        targetArchivedTaskContent: String,
});

/* Je rends accessible les actions du store */
const { deleteOneArchivedTask, cancelDeleteOneArchivedTask } = store;
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