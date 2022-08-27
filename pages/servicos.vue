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

            <NuxtChild />
        
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