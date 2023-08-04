import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todo-List', {
        // state
        state: () => ({
                todoList: [],
                id: 0,
                archiveList: [],
        }),

        // getters

        // actions
        actions: {
                addItem(valueOfVModel) {
                        this.todoList.unshift({
                                item: valueOfVModel,
                                id: this.id++,
                                completed: false,
                                archived: false,
                        });
                },

                toggleCompleted(idToFind) {
                        /* Dans le tableau todoList, pour chaque élément, si l'id d'un éléménent correspond à l'id donné en argument
                        alors je stocke cet élément dans la constante task */
                        const task = this.todoList.find(object => object.id === idToFind);
                        // si "todo" existe
                        if(task) {
                                // alors la nouvelle valeur de completed est son contraire
                                task.completed = !task.completed;
                        }
                },

                archiveItem(itemID, taskIndex) {
                        /* Stocke dans une variable l'élément dont l'id correspond à l'id passé en argument */
                        const task = this.todoList.find(object => object.id === itemID);
                        /* le tableau archive est mis à jour en ajoutant cet élément */
                        this.archiveList.unshift(task);
                        /* le tableau todoList est mis à jour en supprimant cet élément.
                        ATTENTION ! La méthode .splice() prend en premier paramètre l'INDEX du tableau
                        OR l'index du tableau N'EST PAS ÉGAL à task.id !! */
                        this.todoList.splice(taskIndex, 1);
                        /* la propriété "archived" sera passée à true */
                        task.archived = true;
                },

                cancelArchiveItem(itemID, taskIndex) {
                        /* je bascule la tâche cliquée, du tableau "archive[]" vers le tableau "todoList[]" */
                        const task = this.archiveList.find(object => object.id === itemID);
                        this.todoList.unshift(task);
                        this.archiveList.splice(taskIndex, 1);
                        task.archived = false;
                },

                deleteItem(itemID) {
                        /* le tableau todoList sera mise à jour selon le filtre : */
                        this.archiveList = this.archiveList.filter(object => {
                                /* retourne tous les objets dont l'id NE correspond PAS à l'id en argument */
                                return object.id !== itemID;
                        })
                },

        }
})