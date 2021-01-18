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
      <ion-card>
        <ion-card-header>
          <ion-text color="success">
            <h1 class="ion-text-center">Alta de punto verde</h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label color="medium" position="floating">Nombre</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" type="text" position="floating"
              >Ubicación</ion-label
            >
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">Horarios</ion-label>
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium">Tipos de residuos que acepta:</ion-label>
          </ion-item>
          <ion-item>
            <ion-list>
              <ion-item>
                <ion-checkbox color="success" slot="start"></ion-checkbox>
                <ion-label>Papeles</ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="success" slot="start"></ion-checkbox>
                <ion-label>Cartones</ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="success" slot="start"></ion-checkbox>
                <ion-label>Plásticos</ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="success" slot="start"></ion-checkbox>
                <ion-label>Vidrios</ion-label>
              </ion-item>
              <ion-item>
                <ion-checkbox color="success" slot="start"></ion-checkbox>
                <ion-label>Metales</ion-label>
              </ion-item>
            </ion-list>
          </ion-item>
          <ion-item>
            <ion-textarea
              type="text"
              placeholder="Observaciones"
            ></ion-textarea>
          </ion-item>
          <div class="ion-margin">
            <ion-button color="success">Guardar</ion-button>
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
  name: "AltaDePuntoVerde",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
