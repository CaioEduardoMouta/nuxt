<template>
  <div>


    
        <div class="flex items-center justify-between">
          <h1 class="font-bold text-2xl">
            Transações
          </h1>

          <AppButton @click="isAdding = !isAdding">
            Nova transação
          </AppButton>
        </div>

        <TransactionAdd
         v-if="isAdding" 
         @after-add="afterAdd"
         @cancel="isAdding = false"
         />

      <div class="mt-6 pb-6 flex items-center space-x-4 border-b border-gray-300">
      

    <div class="mt-4">
      <div class="space-y-8">

      </div>
      
        <div 
        v-for="transaction in transactionsGrouped"
        :key="transaction.id"
        class="flex items-center px-5 py-5 bg-white rounded-lg shadow"
        >
        
       
        </div>

       
            <div 
            v-for="(group, index) in transactionGrouped"
            :key="index">

              <div class="mb-1">
                <div class="font-bold text-sm">
                  {{ formatDate(index) }}
                </div>
              </div>

              <div class="space-y-3">
                <Transaction 
                v-for="transaction in group"
                :key="transaction.id"
                :transaction="transaction"
                @update="onUpdate"
                />
                
              </div>
            </div>
          </div>
        </div>
        </div>
     
  
</template>

<script>
import { groupBy, orderBy } from 'loadash';
import TransactionAdd from '~/components/Transactions/TransactionAdd.vue';
import AppButton from '~/components/Ui/AppButton';
import AppFormInput from '~/components/Ui/AppFormInput';
import AppFormLabel from '~/components/Ui/AppFormLabel';
import AppFormSelect from '~/components/Ui/AppFormSelect';
import TransactionAdd from '~/components/Transactions/TransactionAdd.vue';
import Transaction from '~/components/Transactions/Transaction.vue';
import Transaction from '~/components/Transactions/Transaction.vue';
export default {
  name: 'IndexPage',

  components: {
    TransactionAdd,
    AppButton,
    AppFormInput,
    AppFormLabel,
    AppFormSelect,
    Transaction,
    Transaction
},

  async asyncData({ store }) {
    return {
      transactions: await store.dispatch('transactions/getTransactions'),

    }
  },

  data() {
    return {
      isAdding: false,
    }
  },

  computed: {
    transactionsGroup() {
      return groupBy(orderBy(this.transactions, 'date', 'desc'), 'date')
    },
  },

  methods: {
    formatDate(date) {
      return this.$dayjs(date).format('DD/MM/YYYY');
    },

    afterAdd(transaction) {
      this.transactions.push(transaction)
    },
    onUpdate(transaction) {
      const idx = this.transactions.findIndex(o => o.id === transaction.id);
      this.transactions.splice(idx, 1, transaction)
    }
  },
}
</script>
