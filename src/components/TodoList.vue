<template>
        <section 
                class="all-tasks" 
                :class="archiveList.length === 0 ? 'all-tasks-full' : 'all-tasks-middle'"
        >
                <h2>Liste des tâches</h2>
        
                <!-- "todoList" est importée grâce au store "useTodoListStore" dans "/stores/todoList.js" -->
                <div v-for="task, index in todoList" :key="task.id" >
                        <div class="one-task">
                                <div class="name-task">
                                        <span :class="{ completed: task.completed }"><font-awesome-icon class="icons-tasks-name" :icon="['fas', 'arrow-right']" />{{ task.item }}</span>
                                </div>

                                <div class="all-icons-for-one-task">
                                        <span class="icons-tasks-buttons" @click.stop="toggleCompleted(task.id)" v-show="!task.completed"><font-awesome-icon :icon="['far', 'square']" /></span>
                                        <span class="icons-tasks-buttons" @click.stop="toggleCompleted(task.id)" v-show="task.completed"><font-awesome-icon :icon="['far', 'square-check']" /></span>
                                        <span class="icons-tasks-buttons" @click.stop="toggleCompleted(task.id)" v-show="task.completed"><font-awesome-icon :icon="['fas', 'arrow-rotate-left']" /></span>
                                        <span class="icons-tasks-buttons" @click="archiveItem(task.id, index)" v-show="task.completed"><font-awesome-icon :icon="['fas', 'box-archive']" /></span>
                                </div>
                        </div>
                </div>
        </section>
</template>

<script setup>
// Import du store todoList.js pour accéder aux states
import { useTodoListStore } from '@/stores/todoList.js';
/* Import du Helper "storeToRefs"
Cette méthode permet de ramener et utiliser les propriétés du store (donc les states)
tout en garantissant la réactivité de chaque propriété */
import { storeToRefs } from 'pinia';

// Stockage du store dans une constante
const store = useTodoListStore();

/* Utilisation du destructuring pour extraire todoList du store.
Ici, storeToRefs crée des refs pour chaque state de store
Donc todoList contiendra tous les states */
/* J'ai besoin d'archiveList également pour la classe conditionnelle */
const { todoList, archiveList } = storeToRefs(store);

// import de l'action toggleCompleted du store, via destructuring
const { toggleCompleted, archiveItem } = store; 

</script>

<style scoped>
/* .icons-taks... définie dans App.vue en non-scoped ! */
.all-tasks {
        width: 100%;
        margin-right: 5%;
        display: flex;
        flex-direction: column;

        .one-task {     
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-right: 15px;

                .completed {
                        text-decoration: line-through;
                }
        }
}

.all-tasks-full {
        width: 100%;
}

.all-tasks-middle {
        width: 50%;
        border-right: solid 2px #CF308B;
}

</style>