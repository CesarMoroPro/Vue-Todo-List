<template>
        <div>
                <!-- Création d'un formulaire avec un prevent.default -->
                <!-- Au submit, déclenchement de la function addItemAndClearInput() -->
                <form @submit.prevent="addItemAndClearInput(todo)">
                        <!-- L'input doit stocker la valeur utilisateur dans une data, donc via un v-model -->
                        <input type="text" v-model="todo"/>
                        <button>Ajouter la tâche</button>
                </form>
        </div>
</template>

<script setup>
// Import de { refs } afin que la data "todo" du v-model soit réactive
import { ref } from "vue";
// Puisqu'on fait appel à une fonction qui est dans le store, on doit importer ce store
import { useTodoListStore } from '@/stores/todoList.js';

// Définition de la const todo qui est bindée par v-model
const todo = ref('');
/* Définition de la const store qui utilise le store useTodoListStore.
À partir de là, on a accès aux states, actions et getters du store useTodoListStore */
const store = useTodoListStore();

function addItemAndClearInput(item) {
        if (item.length === 0) {
                return
        } else {
                store.addItem(item);
                todo.value = '';
        }
}


</script>

<style lang="scss" scoped>
form {
        min-width: 400px;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;

        input, button {
                border-radius: 6px;
                outline: solid 1px #E9FB5F;
                border: none;
                height: 1.5rem;
        }

        input:focus, input:hover, button:hover {
                outline: solid 3px #E9FB5F;
        }

        input {
                width: 60%;
        }

        button {
                width: 35%;
        }
}
</style>