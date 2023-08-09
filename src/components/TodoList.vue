<template>
        <!-- "archiveList" est importée grâce au store "useTodoListStore" dans "/stores/todoList.js" -->
        <section 
                class="all-tasks" 
                :class="archiveList.length === 0 ? 'all-tasks-full' : 'all-tasks-middle'"
        >
                <h2>Liste des tâches ({{ todoList.length }})</h2>
        
                <!-- "todoList" est importée grâce au store "useTodoListStore" dans "/stores/todoList.js" -->
                <div 
                        class="one-task" 
                        v-for="task, index in todoList"
                        :key="task.id"
                >
                        <div class="container">
                                <div class="name-task">
                                        <span 
                                                v-show="!task.completed"
                                                @click.stop="toggleCompleted(task.id)"
                                        >
                                                <font-awesome-icon class="icons-tasks-name" :icon="['far', 'square']" />
                                                {{ task.item }}
                                        </span>
        
                                        <span 
                                                v-show="task.completed"
                                                class="completed"
                                        >
                                                <font-awesome-icon class="icons-tasks-name" :icon="['far', 'square-check']" />
                                                {{ task.item }}
                                        </span>
                                </div>
        
                                <div class="all-icons-for-one-task">
                                        <span class="icons-tasks-buttons" @click.stop="toggleCompleted(task.id)" v-show="task.completed"><font-awesome-icon :icon="['fas', 'arrow-rotate-left']" /></span>
                                        <span class="icons-tasks-buttons" @click="archiveItem(task.id, index)" v-show="task.completed"><font-awesome-icon :icon="['fas', 'box-archive']" /></span>
                                </div>
                        </div>

                        <HorizontalSeparator />
                </div>
        </section>
</template>

<script setup>
// Import du SFC HorizontalSeparator
import HorizontalSeparator from '@/components/visuals/HorizontalSeparator.vue';

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
                flex-direction: column;
                justify-content: center;
                margin-top: 20px;
                
                .container {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-right: 15px;
                        margin-bottom: 20px;
                }

                .separator {
                        display: flex;
                        justify-content: center;
                }

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