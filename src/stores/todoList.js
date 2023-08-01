import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todo-List', {
        // state
        state: () => ({
                todoList: [],
                id: 0,
        }),

        // getters

        // actions
        actions: {
                addItem(item) {
                        this.todoList.unshift({
                                item, /* = item: item */
                                id: this.id++,
                                completed: false,
                                archived: false,
                        })
                },

                deleteItem(itemID) {
                        /* le tableau todoList sera mise à jour selon le filtre : */
                        this.todoList = this.todoList.filter(object => {
                                /* retourne tous les objets dont l'id NE correspond PAS à l'id en argument */
                                return object.id !== itemID;
                        })
                },

                toogleCompleted(idToFind) {
                        /* Dans le tableau todoList, pour chaque élément, si l'id d'un éléménent correspond à l'id donné en argument
                        alors je stocke cet élément dans la constante todo */
                        const todo = this.todoList.find(object => object.id === idToFind);
                        // si "todo" existe
                        if(todo) {
                                // alors la nouvelle valeur de completed est son contraire
                                todo.completed = !todo.completed;
                        }
                }
        }
})