<template>
  <RequestCard></RequestCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import RequestCard from '../request-card/request-card.vue';

export default defineComponent({
  name: 'Home',
  components: {
    RequestCard
  },
    setup() {
      const router = useRouter();
      return { router };
    }
});
</script>