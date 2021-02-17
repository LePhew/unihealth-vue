<template>
  <ion-card>
    <ion-card-header>
      <ion-grid>
        <ion-row>
          <ion-col size="2.5">
            <ion-avatar>
              <ion-img src="/assets/pictures/dark-red-solid-color-background.jpg"></ion-img>
            </ion-avatar>
          </ion-col>
          <ion-col>
            <ion-card-title>Donante urgente</ion-card-title>
            <ion-card-subtitle>Santo Domingo Oeste</ion-card-subtitle>
            <ion-card-subtitle>809-596-5032</ion-card-subtitle>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card-header>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/vue";

export default {
  name: "RequestCard",
  components: {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonImg,
    IonGrid,
    IonRow,
    IonCol
  }
};
</script>

<style lang="css" scoped>
  @import url("./request-card.scss");
</style>
 