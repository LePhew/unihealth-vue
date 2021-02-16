<template>
   <ion-card>
    <ion-card-header>
      <ion-card-title>Donante urgente</ion-card-title>
      <ion-card-subtitle>Santo Domingo Oeste</ion-card-subtitle>
      <ion-card-subtitle>809-596-5032</ion-card-subtitle>
    </ion-card-header>

  </ion-card>
</template>

<script lang="ts">
import {
    IonCard, IonCardSubtitle, IonCardTitle,
} from "@ionic/vue";

export default {
  name: "RequestCard",
  components: {
    IonCard, IonCardSubtitle, IonCardTitle,
  },
};
</script>

