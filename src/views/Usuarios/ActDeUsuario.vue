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
      <ion-card>
        <ion-card-header>
          <ion-text color="success">
            <h1 class="ion-text-center">Actualizar mi perfil</h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Inputs del form -->
          <ion-item>
            <ion-label color="medium" position="floating">Nombre</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">Apellido</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">DNI</ion-label>
            <ion-input type="number"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">Mail</ion-label>
            <ion-input type="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">Contraseña</ion-label>
            <ion-input type="password"></ion-input>
          </ion-item>
          <div class="ion-margin">
            <ion-button color="success">Actualizar</ion-button>
            <ion-button color="primary">Cancelar</ion-button>
          </div>
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
} from "@ionic/vue";

export default {
  name: "ActDeUsuario",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
