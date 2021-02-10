<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="success">
        <ion-title>Ecopoints</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar> </ion-toolbar>
      </ion-header>
      <h3></h3>
      <ion-card-header>
        <ion-text color="success">
          <h1 class="ion-text-center">
            <ion-icon :icon="person" />Mapa de puntos verdes
          </h1>
        </ion-text>
        <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
        <ion-card-title></ion-card-title>
      </ion-card-header>

      <ion-card>
        <img src="assets/img/mapas.jpg" alt="Imagen de un mapa" />
        <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
        <ion-text color="success"> </ion-text>
        <ion-card-content>
          <h2 class="ion-margin">Acá vendría el mapa.</h2>
          <h2 class="ion-margin">La imagen de arriba es ilustrativa</h2>
          <router-link to="/altadepuntoverde">
            <ion-button expand="full" color="success"
              >Agregar punto verde</ion-button
            ></router-link
          >
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCardSubtitle,
  IonText,
  IonCardContent,
  IonCard,
  IonButton,
} from "@ionic/vue";

export default {
  name: "Mapa",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCardSubtitle,
    IonText,
    IonCardContent,
    IonCard,
    IonButton,
  },
};
</script>
