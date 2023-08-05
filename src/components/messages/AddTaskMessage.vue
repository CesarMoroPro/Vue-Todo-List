<template>
                <p class="success-alert" v-show="successAddTask" >{{ successMessage }}</p>
</template>

<script setup>
// Import du store useTodoListStore
import { useTodoListStore } from "@/stores/todoList.js";
// Import de storeToRefs pour garantir les Reactive Properties
import { storeToRefs } from "pinia";

// Stockage de tout le store dans une variable
const store = useTodoListStore();

const successMessage = "La tâche a été ajoutée à la liste."

/* Je rend accessible la state "successAddTask", avec storeToRefs puisque c'est une state et non une action */
const { successAddTask } = storeToRefs(store);

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
</style>