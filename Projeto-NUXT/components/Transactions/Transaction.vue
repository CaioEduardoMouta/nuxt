<template>
         <div 
                class="flex items-center px-5 py-6 bg-white rounded-lg shadow"
                >
                <div class="flex items-center">
                <div class="flex items-center space-x-5">
                    <div>
                      <div>
                        <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {{ transaction.category.name}}
                        </div>
                      </div>

                      <div class="mt-1.5">
                        {{ transaction.description}}
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center space-x-4 ml-auto">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-600"
                       fill="none"
                       stroke="currentColor" 
                       viewBox="0 0 24 24" 
                       xmlns="http://www.w3.org/2000/svg">
                       
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                      <div class="font-bold">
                        {{ transaction.amount }}
                      </div>
                    </div>

                    <button @click="isUpdating = !isUpdating">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                  </div>
                </div>

                <TransactionEdit
                v-if="isUpdating" />
            </div>
</template>

<script>
    import TransactionEdit from '~/components/Transactions/TransactionEdit.vue';
    export default {
        name: 'Transaction',

        components: {
            TransactionEdit,
        },

        props: {
            transaction: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                isUpdating: false,
            };
        },

        methods: {},
    };
</script>
