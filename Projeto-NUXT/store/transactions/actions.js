export default {
    addTransaction(context, data) {
        return this.$axios.$post('transaction',data)
    }
}