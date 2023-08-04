<template>
        <div>
                <!-- Création d'un formulaire avec un prevent.default -->
                <!-- Au submit par la touche "entrée", déclenchement de la function addItemAndClearInput() dans ce fichier -->
                <form @submit.prevent="addItemAndClearInput(todo)">
                        <!-- L'input doit stocker la valeur utilisateur dans une data, donc via un v-model -->
                        <input type="text" v-model="todo" />
                        <Button :props-input-value="todo" />
                </form>

                <!-- Message de confirmation d'ajout d'une tâche -->
                <div id="add-item-success-message">
                        <AddTaskMessage />
                </div>
        </div>
</template>

<script setup>
// import de SFC
import Button from '@/components/buttons/Button.vue';

// Import de { refs } afin que la data "todo" du v-model soit réactive
import { ref } from "vue";
// Puisqu'on fait appel à une fonction qui est dans le store, on doit importer ce store
import { useTodoListStore } from '@/stores/todoList.js';

// Import du composant AddTaskMessage
import AddTaskMessage from '@/components/messages/AddTaskMessage.vue';

// Définition de la const todo qui est bindée par v-model
const todo = ref('');
/* Définition de la const store qui utilise le store useTodoListStore.
À partir de là, on a accès aux states, actions et getters du store useTodoListStore */
const store = useTodoListStore();

function addItemAndClearInput(item) {
        if (item.length === 0) {
                return
        } else {
                /* Ici, on appelle addItem qui se trouve dans le store */
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
        flex-direction: column;
        align-items: center;

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
                width: 100%;
                color: white;
                padding: 2px;
        }

        button {
                color: white;
                margin-top: 10px;
        }

        button:hover {
                color: #E9FB5F;
        }
}

#add-item-success-message {
        text-align: center;
}
</style>