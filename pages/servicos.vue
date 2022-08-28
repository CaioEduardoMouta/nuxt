<template>
    <div>
            <h1 class="text-lg font-bold">Servicos</h1>

            <NuxtLink to="/servicos/desenvolvimeno-de-site">
                Desenvolvimento de Sites
            </NuxtLink>
             <NuxtLink to="/servicos/marketing-digital">
                Marketing digital
            </NuxtLink>

            <br><br>


            <div v-if="$fetchState.peding">
                Carregando...
            </div>

            <div v-else>
                <div
                v-for="service in services" :key="service.id"
                class="border-b border-gray-400 py-4"
                >
                {{ service.username}}
                </div>
            </div>

           

            <NuxtChild />
        
    </div>
</template>

<script>
export default {
  name: '',

    head() {
        return {
            title: this.title,
            meta: [
            { hid: 'description', name: 'description', content: 'Minha Descrição do Serviço' },
            ],
            bodyAttrs: {
                class: 'bg-gray-400'
            }       
        }
    },

    data() {
        return{
            title: '',
            services:[]
        };
        
    },

    async fetch() {
        this.services = await this.$axios.$get('https://jsonplaceholder.typicode.com/users?_limit=3') 
       
    },

    created() {
        this.getTitle();
    },

    methods: {
        getTitle() {
            setTimeout(() => {
                this.title = 'Serviços'
            }, 3000)
        }
    },
};
</script>

