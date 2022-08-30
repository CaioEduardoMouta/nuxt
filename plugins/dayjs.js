import dayjs from 'dayjs';
import { inject } from 'vue';

export default (context, inject) => {
    inject('dayjs',dayjs)
}