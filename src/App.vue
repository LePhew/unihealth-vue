<template>
  <IonApp>
    <Layout></Layout>
  </IonApp>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import Layout from "@/views/components/layout/layout.vue"; 

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    Layout
  },
});
</script>