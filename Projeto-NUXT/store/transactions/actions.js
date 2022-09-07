export default {
    getTransactions(context, filter) {
        return this.$axios.$get('transactions', {
            params: {
                _expand: 'category',
                ...filter
            }
        });
    },
    addTransaction(context, data) {
        return this.$axios.$post('transaction',data)
    },
    updateTransaction(context, {id, data}) {
        return this.$axios.$patch(`transaction/${id}`,data)
    },
}