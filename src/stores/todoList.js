import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todo-List', {
        // state
        state: () => ({
                todoList: [],
                id: 0,
                archive: [],
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

                toggleCompleted(idToFind) {
                        /* Dans le tableau todoList, pour chaque élément, si l'id d'un éléménent correspond à l'id donné en argument
                        alors je stocke cet élément dans la constante todo */
                        const todo = this.todoList.find(object => object.id === idToFind);
                        // si "todo" existe
                        if(todo) {
                                // alors la nouvelle valeur de completed est son contraire
                                todo.completed = !todo.completed;
                        }
                },

                archiveItem(itemID) {
                        /* Stocke dans une variable l'élément dont l'id correspond à l'id passé en argument */
                        const todo = this.todoList.find(object => object.id === itemID);
                        /* le tableau archive est mis à jour en ajoutant cet élément */
                        this.archive.unshift(todo);
                        /* et le tableau todoList est mis à jour en supprimant cet élément */
                        this.todoList.splice(todo.id, 1);

                        /* et le tableau todoList sera mis  à jour également */
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