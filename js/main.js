/* CONSEGNA

Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.*/


const{createApp} = Vue

createApp({
    data(){
        return {
            randomEmails: [],
        }
    },
    methods: {
        methodName() {
            //code
        }
    },
    mounted() {
        // creare un ciclo per generare 10 email random
        for (let i = 0; i < 10; i++) {
            //tramite una API generare una email random
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(
                response => {
                    this.randomEmails.push(response.data.response);
                }
            );    
        }
        console.log(this.randomEmails);
        
        console.log("ho caricato l'app");
    }
}).mount("#app")