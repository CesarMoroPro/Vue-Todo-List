import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todo-List', {
        // state
        state: () => ({
                todoList: [],
                id: 0,
                completedTasksArray: [],
                tasksProgression: 0,
                archiveList: [],
                successAddTask: false,
                errorAddTask: false,
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
                                displayConfirmationDeleteMessage: false,
                        });
                        // console.log(this.completedTasksArray)
                },

                addTaskMessage(errorOrSuccess) {
                        if (errorOrSuccess === "error") {
                                this.errorAddTask = true;
                                setTimeout( () => {
                                        this.errorAddTask = false;
                                }, 2000);
                        } else if (errorOrSuccess === "success") {
                                this.successAddTask = true;
                                setTimeout( () => {
                                        this.successAddTask = false;
                                }, 2000);
                        }
                },

                toggleCompleted(idToFind) {
                        /* Dans le tableau todoList, pour chaque élément, si l'id d'un éléménent correspond à l'id donné en argument
                        alors je stocke cet élément dans la constante task */
                        const task = this.todoList.find(object => object.id === idToFind);
                        // si "task" existe
                        if(task) {
                                // alors la nouvelle valeur de completed devient son contraire
                                task.completed = !task.completed;
                                // Je déclenche une méthode pour ajouter ou retirer la tâche du tableau des tâches terminées mais non archivées
                                this.addOrRemoveFromCompletedTasksArray(task);
                        }
                },

                addOrRemoveFromCompletedTasksArray(task) {
                        /* Si la propriété "completed" d'une tâche est à true */
                        if(task.completed) {
                                /* alors j'ajoute cette tâche dans le tableau des tâches terminées */
                                this.completedTasksArray.push(task);
                        } else {
                                /* sinon, je retire cette tâche du tableau avce splice 
                                qui utilise l'index du tableau completedTasksArray, différent de l'index du tableau todoList !)
                                Donc il faut trouver l'index de la tâche concernée pour fournir cet index dans la fonction splice */
                                const taskToUncompleteID = this.completedTasksArray.findIndex(object => object.id === task.id);
                                this.completedTasksArray.splice(taskToUncompleteID, 1); 
                        }

                        this.percentageTasksProgression();
                },

                percentageTasksProgression() {
                        this.tasksProgression = Math.round((this.completedTasksArray.length * 100 / this.todoList.length));
                        console.log(this.tasksProgression)
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

                askConfirmationDeletion(itemID) {
                        /* Dans le tableau archiveList, pour chaque élément, si l'id d'un éléménent correspond à l'id donné en argument
                        alors je stocke cet élément dans la constante task */
                        const task = this.archiveList.find(objectElement => objectElement.id === itemID);
                        // si "task" existe
                        if(task) {
                                /* alors la valeur de sa propriété displayConfirmationDeleteMessage vaut true */
                                task.displayConfirmationDeleteMessage = true;
                        }
                },

                cancelDeleteTask(itemID) {
                        /* Raisonnement inverse de "askConfirmationDeletion()" */
                        const task = this.archiveList.find(objectElement => objectElement.id === itemID);
                        if (task) {
                                task.displayConfirmationDeleteMessage = false;
                        }
                },

                deleteTask(itemID) {
                        /* le tableau todoList sera mise à jour selon le filtre : */
                        this.archiveList = this.archiveList.filter(object => {
                                /* retourne tous les objets dont l'id NE correspond PAS à l'id en argument */
                                return object.id !== itemID;
                        })
                        /* Le booléen confirmationDeleteMessage doit revenir à fasle */
                        this.confirmationDeleteMessage = false;
                },

        }
})