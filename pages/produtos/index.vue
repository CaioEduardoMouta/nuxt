<template>
    <div>
        
            <h1 class="text-lg font-bold">Produtos</h1>
            <NuxtLink to="/produtos/produto-a">Produtos A</NuxtLink>
            <NuxtLink to="/produtos/produto-b">Produtos B</NuxtLink>
            <br><br>
            <div 
            v-for="product in products" :key="product.id"
            class="border-b border-gray-400 py-3"
            >
                {{ product.title }}
            </div>

          
            
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime omnis natus quisquam sunt in laboriosam aut quam, ea qui quos! Doloremque, inventore sed placeat voluptates minima quas ducimus sequi voluptatem?</p>
    </div>
</template>

<script>
export default {
     name: '',

    data() {
        return{

        };
        
    },
    async asyncData({ $axios }) {
        const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
        return {
           products,
        }
    },

  

    methods: {},

};
</script>
