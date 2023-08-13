import { defineStore } from "pinia";

export const useTodoListStore = defineStore('todo-List', {
        // state
        state: () => ({
                successAddTaskMessage: false,
                errorAddTaskMessage: false,
                todoList: [],
                id: 0,
                completedTasksArray: [],
                tasksProgression: 0,
                archiveList: [],
                displayConfirmationDeleteAllArchivedTasks: false,
        }),

        // getters

        // actions
        actions: {
                //! TAUX DE PROGRESSION DES TÂCHES
                percentageTasksProgression() {
                        this.tasksProgression = Math.round((this.completedTasksArray.length * 100 / this.todoList.length));
                },

                //! AJOUT D'UNE TÂCHE
                addItem(valueOfVModel) {
                        this.todoList.unshift({
                                item: valueOfVModel,
                                id: this.id++,
                                completed: false,
                                archived: false,
                                displayConfirmationDeleteMessage: false,
                        });
                        // console.log(this.completedTasksArray)
                /* Je mets à jour l'avancement des tâches */
                this.percentageTasksProgression();
                },

                addTaskMessage(errorOrSuccess) {
                        if (errorOrSuccess === "error") {
                                this.errorAddTaskMessage = true;
                                setTimeout( () => {
                                        this.errorAddTaskMessage = false;
                                }, 2000);
                        } else if (errorOrSuccess === "success") {
                                this.successAddTaskMessage = true;
                                setTimeout( () => {
                                        this.successAddTaskMessage = false;
                                }, 2000);
                        }
                },

                //! MARQUER UNE TÂCHE COMME TERMINÉE
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

                //! ARCHIVAGE OU DÉSARCHIVAGE D'UNE TÂCHE
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

                        /* Quand une tâche passe en "archivée", elle ne doit plus être calculée dans le pourcentage d'avancement de la TodoList.
                        Je commence par récupérer l'index de la tâche dans le tableau "completedTasksArray" */
                        const taskToUncompleteID = this.completedTasksArray.findIndex(object => object.id === itemID);
                        /* Puis je supprime cette tâche du tableau "completedTasksArray" */
                        this.completedTasksArray.splice(taskToUncompleteID, 1);
                        /* Je relance le calcul d'avancement (pourcentage) des tâches */
                        this.percentageTasksProgression(); 
                },

                cancelArchiveItem(itemID) {
                        /* Je bascule la tâche cliquée, du tableau "archive[]" vers le tableau "todoList[]".
                        Pour celà, je récupère l'objet dont la propriété "id" correspond à l''id" fourni en argument */
                        const task = this.archiveList.find(object => object.id === itemID);
                        /* Et j'ajoute cet objet au tableau "todoList" */
                        this.todoList.unshift(task);
                        /* Puis je récupère l'index dans le tableau ARCHIVELIST de l'objet dont la propriété "id" correpond à l'"id" passé en argument  */
                        const taskIndex = this.archiveList.findIndex(object => object.id === itemID);
                        /* Et je fourni cet index pour splice dans ce tableau */
                        this.archiveList.splice(taskIndex, 1);
                        /* la propriété "archived" de la task devient alors : false */
                        task.archived = false;

                        /* Quand une tâche n'est finalement plus archivée et remise dans la todoList,
                        alors par défaut elle est déjà en "completed: true".
                        Donc le tableau "completedTasksArray" doit être remis à jour avec cette tâche */
                        this.completedTasksArray.push(task);
                        /* Il faut donc que le calcul d'avancement des tâches soit mis à jour */
                        this.percentageTasksProgression();
                },

                //! SUPPRESSION DÉFINITIVE D'UNE TÂCHE
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

                cancelDeleteOneArchivedTask(itemID) {
                        /* Raisonnement inverse de "askConfirmationDeletion()" */
                        const task = this.archiveList.find(objectElement => objectElement.id === itemID);
                        if (task) {
                                task.displayConfirmationDeleteMessage = false;
                        }
                },

                deleteOneArchivedTask(itemID) {
                        /* le tableau todoList sera mise à jour selon le filtre : */
                        this.archiveList = this.archiveList.filter(object => {
                                /* retourne tous les objets dont l'id NE correspond PAS à l'id en argument */
                                return object.id !== itemID;
                        })
                        /* Le booléen confirmationDeleteMessage doit revenir à fasle */
                        this.confirmationDeleteMessage = false;
                },

                //! SUPPRESSION DÉFINITIVE DE TOUTES LES TÂCHES
                askConfirmationDeletionAllArchivedTasks() {
                        /*  Je demande confirmation à l'utilisateur de supprimer toutes les tâches archivées.
                        Si oui, je vide complètement le tableau des tâches archivées
                        Si non, je fais simplement disparaitre le message */
                        this.displayConfirmationDeleteAllArchivedTasks = true;
                },
                
                cancelDeleteAllArchivedTasks() {
                        this.displayConfirmationDeleteAllArchivedTasks = false;
                },

                deleteAllArchivedTasks() {
                        this.archiveList.splice(0, this.archiveList.length);
                        this.displayConfirmationDeleteAllArchivedTasks = false;
                },
        }
})