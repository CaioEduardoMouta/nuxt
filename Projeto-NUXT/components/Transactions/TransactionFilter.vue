<template>
       <div class="mt-6 pb-6 flex items-center space-x-4 border-b border-gray-300">
      <div>
        <AppFormLabel>Descrição</AppFormLabel>
        <AppFormInput v-model="description" />
      </div>

      <div>
        <AppFormLabel>Categoria</AppFormLabel>
        <AppFormSelect 
        v-model="categoryId" 
        :options="categories" />
      </div>
    </div>
</template>

<script>
    import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';
export default {
    
    name: 'transactionFilter',

    components: {
        AppFormInput,
        AppFormLabel,
        AppFormSelect,
    },

    async fetch() {
    this.categories = await this.$store.dispatch('categories/getCategories');
  },

    data() {
        return {
            form: {
                description: '',
                categoryId: '',
            },
           categories: [],
        };
    },

    methods: {},
}
</script>
