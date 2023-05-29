/* CONSEGNA

Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.*/

/* Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */


const{createApp} = Vue

createApp({
    data(){
        return {
            randomEmails: [],
        }
    },
    methods: {
        generateEmail() {
            //svuota array
            this.randomEmails.length = 0;
            // ciclo per generare 10 email random
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
        }
    },
    mounted() {
        this.generateEmail()

        console.log(this.randomEmails);
        
        console.log("ho caricato l'app");
    }
}).mount("#app")