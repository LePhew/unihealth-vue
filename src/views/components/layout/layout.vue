<template>
  <ion-page>
    <!--- Header --->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Unihealth</ion-title>
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
  IonMenuButton
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
    IonMenuButton
  },
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
