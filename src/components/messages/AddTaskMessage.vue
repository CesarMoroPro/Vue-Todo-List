<template>
                <p class="success-alert" v-show="successAddTaskMessage" >{{ successMessage }}</p>
                <p class="error-alert" v-show="errorAddTaskMessage" >{{ errorMessage }}</p>
</template>

<script setup>
// Import du store useTodoListStore
import { useTodoListStore } from "@/stores/todoList.js";
// Import de storeToRefs pour garantir les Reactive Properties
import { storeToRefs } from "pinia";

// Stockage de tout le store dans une variable
const store = useTodoListStore();

const successMessage = "La tâche a été ajoutée à la liste.";
const errorMessage = "Une tâche ne peut pas être vide.";

/* Je rend accessible la state "successAddTask", avec storeToRefs puisque c'est une state et non une action */
const { successAddTaskMessage, errorAddTaskMessage } = storeToRefs(store);

</script>

<style lang="scss" scoped>
.success-alert {
        margin-top: 10px;
        padding: 5px;
        color: #247013;
        outline: solid 1px #97E786;
        border-radius: 6px;
        background-color: rgba(#97E786, 0.3);
}

.error-alert {
        margin-top: 10px;
        padding: 5px;
        color: #8a0000;
        outline: solid 1px #fe2828;
        border-radius: 6px;
        background-color: rgba(#fe2828, 0.5);
}
</style>