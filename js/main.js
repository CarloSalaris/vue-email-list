/* CONSEGNA

Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.*/


const{createApp} = Vue

createApp({
    data(){
        return {
            //code
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
                console.log(response.data.response);
            }
        );
        console.log("ho caricato l'app");
    }
}).mount("#app")