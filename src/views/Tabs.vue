<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="mapa" href="/tabs/mapa">
          <ion-icon :icon="mapOutline" />
          <ion-label>Mapa</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="favoritos" href="/tabs/favoritos">
          <ion-icon :icon="starOutline" />
          <ion-label>Favoritos</ion-label>
        </ion-tab-button>

        <!-- Falta agregar esta seccion -->
        <!-- <ion-tab-button tab="config" href="/config">
          <ion-icon :icon="cogOutline" />
          <ion-label>Configuración</ion-label>
        </ion-tab-button> -->
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  homeOutline,
  mapOutline,
  cogOutline,
  starOutline,
  personOutline,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeOutline,
      mapOutline,
      cogOutline,
      starOutline,
      personOutline,
    };
  },
};
</script>
