<template>
  <ion-content class="ion-padding">
    <ion-list v-for="item in items" :key="item">
      <RequestCard></RequestCard>
    </ion-list>
    
    <ion-infinite-scroll
      @ionInfinite="loadData($event)"
      threshold="100px"
      id="infinite-scroll"
      :disabled="isDisabled"
    >
      <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading..."></ion-infinite-scroll-content>
    </ion-infinite-scroll>
    <!-- <RequestCard></RequestCard> -->
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
       <ion-fab-button color="success">+</ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script lang="ts">
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonContent,
  IonFab,
  IonFabButton
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import RequestCard from "../request-card/request-card.vue";

export default defineComponent({
  name: "Home",
  components: {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonContent,
    RequestCard,
    IonFab,
    IonFabButton
  },
  setup() {
    const router = useRouter();
    const isDisabled = ref(false);
    const items = ref([]) as any;
    const pushData = () => {
      const max = items.value.length + 20;
      const min = max - 20;
      for (let i = min; i < max; i++) {
        items.value.push(i);
      }
    };

    const loadData = (ev: any) => {
      setTimeout(() => {
        pushData();
        console.log("Loaded data");
        ev.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true;
        }
      }, 500);
    };

    pushData();
    return { router, isDisabled, loadData, items };
  },
});
</script>

<style lang="css" scoped>
@import url("./home.scss");
</style>