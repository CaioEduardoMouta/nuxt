<template>
      <div>
        <div class="bg-gray-50">
           <div class="container mx-auto flex items-center space-x-4 h-10 mb-10"> </div>
            <NuxtLink :to="{name: 'a-empresa', params: {}}">A empresa</NuxtLink>
            <NuxtLink to="/servicos">Serviços</NuxtLink>
            <NuxtLink to="/produtos">Produtos</NuxtLink>
        </div>
       <div>
        <div class="container mx-auto">
            <h1 class="text-lg font-bold">A empresa</h1>
            <Nuxt />
        </div>
       </div>
    </div>
</template>

<script>
export default {
  name: '',

    data() {
        return{

        };
        
    },
    methods: {},
}
</script>

<style>

</style>