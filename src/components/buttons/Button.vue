<template>
        <!-- Au submit, déclenchement de la function addItemAndClearInput() -->
        <v-btn 
                variant="outlined" elevation="4" size="x-large" :ripple="true"
                @click="addItemAndClearInput(propsInputValue)"
        >
                Ajouter la tâche
        </v-btn>
</template>

<script setup>
// Puisqu'on fait appel à une fonction qui est dans le store, on doit importer ce store
import { useTodoListStore } from '@/stores/todoList.js';
/* Définition de la const store qui utilise le store useTodoListStore.
À partir de là, on a accès aux states, actions et getters du store useTodoListStore */
const store = useTodoListStore();

// Import de { defineProps, refs } afin d'utiliser des props et qu'elles soient réactives
import { defineProps, ref } from 'vue';
/* Définition des props */
const props = defineProps({
        propsInputValue: String,
})
/* Je peux maintenant utiliser "propsInputValue" dans mon template */
/* ET "input-value" en attribut lors de l'appel de ce composant.
"props-input-value" en HTML correspond à "propsInputValue" dans le script.
"propsInputValue" = valeur brute, reçue lors de l'appel du composant */

/* Définition d'une variable réactive pour la props "propsInputValue" pour changer sa valeur en " " après soumission.
Si besoin de modifier la valeur d'une prop à l'intérieur du composant,
il faut la copier dans une variable réactive (utilisant ref) et travailler avec cette variable à la place. */
const refPropsInputValue = ref(props.propsInputValue);

function addItemAndClearInput(string) {
        if (string.length === 0) {
                return
        } else {
                /* Ici, on appelle "addItem()" qui est définie dans le store */
                store.addItem(string);
                store.addSuccessMessage();
                refPropsInputValue.value = "";
        }
}
</script>

<style lang="scss" scoped>
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