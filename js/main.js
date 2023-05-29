/* CONSEGNA

Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.*/


const{createApp} = Vue

createApp({
    data(){
        return {
            randomEmail: '',
        }
    },
    methods: {
        methodName() {
            //code
        }
    },
    mounted() {
        //tramite una API generiamo una email random
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
            response => {
                this.randomEmail = response.data.response;
                console.log(this.randomEmail);
            }
        );
        console.log("ho caricato l'app");
    }
}).mount("#app")