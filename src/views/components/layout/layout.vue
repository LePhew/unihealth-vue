<template>
  <ion-page>
    <!--- Header --->
    <ion-header :translucent="true">
      <ion-toolbar class="header-background-color">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title color="light">Health</ion-title>
      </ion-toolbar>
    </ion-header>
    <!--- Content --->
    <ion-content class="ion-padding">
      <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-content>
  
  </ion-page>
</template>

<script lang="ts">
import {
  IonRouterOutlet,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent
} from "@ionic/vue";

export default {
  name: "Layout",
  components: {
    IonRouterOutlet,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent
  },
};
</script>

<style lang="css" scoped>
  @import url("./layout.scss");
</style>
 
