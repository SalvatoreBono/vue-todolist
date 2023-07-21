"use strict";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todo: [
                {
                    id: 1,
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    id: 2,
                    text: "Tagliare la legna",
                    done: true,
                },
                {
                    id: 3,
                    text: "Andare al ristorante",
                    done: false,
                },
                {
                    id: 4,
                    text: "Dare da mangiare al gatto",
                    done: true,
                }
            ],
            addTask: [
                {
                    id: 5,
                    text: "",
                    done: false,
                }
            ],
        };
    },
    methods: {
        /* al click del btn eliminare la todo */
        //prendere l'id
        deleteSingleTodo(singleId) {
            //Recupera l'indice dell'elemento selezionato
            //Se "singleTodo.id" è uguale a "singleId" salva nella variabile "idDelete" solo l'indice
            let iDelete = this.todo.findIndex((singleTodo) => singleTodo.id === singleId);
            //Grazie a splice possiamo eliminare l'elemento
            this.todo.splice(iDelete, 1);
        },
        btnAddTask() {
            //creo una nuova variabile che clona addTask ma eliminando la reattività
            //utilizzando "..." prima di "this.addTask" duplico l'oggetto
            const duplicatedAddTask = { ...this.addTask };
            //pusho nell'array di ogggetti duplicatedAddTask
            this.todo.push(duplicatedAddTask);
        }
    },
}).mount('#app');