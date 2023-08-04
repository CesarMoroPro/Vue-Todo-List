<template>
        <!-- Au submit, déclenchement de la function addItemAndClearInput() -->
        <v-btn 
                variant="outlined" elevation="4" size="x-large" :ripple="true"
                @click="addItemAndClearInput(inputValue)"
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
import { defineProps } from 'vue';
/* Définition des props */
const props = defineProps({
        inputValue: String,
})

function addItemAndClearInput(item) {
        if (item.length === 0) {
                return
        } else {
                /* Ici, on appelle "addItem()" qui est définie dans le store */
                store.addItem(item);
                item = "";
        }
}



 // Ce commentaire concerne les props avec ref :
/* Et, pour que la valeur soit réactive, je dois utiliser "ref()" */
// const propsInputValue = ref(props.inputValue);
/* Je peux maintenant utiliser "propsInputValue" dans mon template */
/* ET "input-value" en attribut lors de l'appel de ce composant.
"input-value" en HTML correspond à "inputValue" dans le script.
"inputValue" = valeur brute, reçue par lors de l'appel du composant 
ET "propsInputValue" = traitement de "inputValue" pour en faire une reactive. */
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