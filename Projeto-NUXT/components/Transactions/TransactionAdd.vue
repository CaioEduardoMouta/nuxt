<template>
    <div class="my-4 mt-10 space-y-4">
                    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                      <div>
                        <AppFormLabel>Data da transação</AppFormLabel>
                        <AppFormInput v-model="form.date" type="date" />
                      </div>

                      <div>
                        <AppFormLabel>Valor</AppFormLabel>
                        <AppFormInput v-model="form.amount" type="number" />
                      </div>

                      <div>
                        <AppFormLabel>Descrição</AppFormLabel>
                        <AppFormInput v-model="form.description"/>
                      </div>

                      <div>
                        <AppFormLabel>Categoria</AppFormLabel>
                        <AppFormSelect 
                        v-model="form.categoryId"
                        :options="[{ name: 'Licença de softwares', id: 1 }]" 
                        />
                      </div>
                    </div>

                   

                    <div class="space-x-4 flex items-center justify-end">
                      <a href="" 
                      class="inline-flex text-gray-700 text-sm"
                      @click.stop.prevent="$emit('cancel')">
                        Cancelar
                      </a>

                      <AppButton @click="addTransaction">
                        Adicionar
                      </AppButton>
                    </div>
                  </div>
                
            
    
</template>

<script>

import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';
import AppButton from '../Ui/AppButton.vue';
import AppFormLabel from '../Ui/AppFormLabel.vue';



export default {
    name: 'TransactionAdd',

    components: {
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    AppFormLabel
},

    data() {
        return {
            form: {
                date: '',
                amount: 0,
                description: '',
                categoryId: ''
            },

            categories: [],
        };
    },

    async fetch() {
        this.categories = await this.$store.dispatch('categories/getCategories')
    },

    methods: {
        addTransaction() {
            
            this.$store.dispatch('transactions/addTransaction', this.form).then((response) => {
              this.emit('after-add', {
                ...response,
                category: this.categories.find(o => o.id == this.form.categoryId)
              } )
            });
        },

        onCancel() {
          this.$emit('cancel');
        }
    },
};
</script>
