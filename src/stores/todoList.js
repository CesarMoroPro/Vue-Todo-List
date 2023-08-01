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
                        this.todoList.push({
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
        }
})