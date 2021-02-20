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
        <ion-text color="success">
          <h1 class="ion-text-center">
            <ion-icon :icon="rose" />
            Mis Puntos Verdes Favoritos
          </h1>
        </ion-text>
        <ion-card-content>
          <!-- Listado de puntos verdes -->
          <ion-list>
            <ion-item v-for="punto of puntosVerdes" :key="punto.nombre" button>
              <ion-label @click.self="mostrarDetalle(punto)">
                {{ punto.nombre }}</ion-label
              >
              <ion-button size="small" color="">
                <ion-icon :icon="close"
              /></ion-button>
            </ion-item>
          </ion-list>
          <div class="ion-text-center ion-margin">
            <router-link
              color="success"
              no-lines
              to="/tabs/editarMisPreferencias"
            >
              <ion-button color="primary">
                Volver
              </ion-button>
            </router-link>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonLabel,
  IonButton,
  modalController,
} from "@ionic/vue";

import ModalPuntoVerde from "../PuntosVerdes/DetallePuntoVerde";

import { rose, close } from "ionicons/icons";

export default {
  name: "Favoritos",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonLabel,
    IonButton,
  },
  setup() {
    return {
      rose,
      close,
    };
  },
  data() {
    return {
      // ESTO TIENE QUE SER EL LISTADO TRAIDO DESDE LA DB, A FUTURO
      puntosVerdes: [
        {
          nombre: "Punto Verde La Plata",
          observaciones: "Observaciones del punto",
        },
        {
          nombre: "Punto Verde Villa Elisa",
          observaciones: "Observaciones del punto",
        },
        {
          nombre: "Punto Verde City Bell",
          observaciones: "Observaciones del punto",
        },
        {
          nombre: "Punto Verde Villa Elvira",
          observaciones: "Observaciones del punto",
        },
        {
          nombre: "Punto Verde Ringuelet",
          observaciones: "Observaciones del punto",
        },
      ],
    };
  },
  methods: {
    async mostrarDetalle(puntoVerde) {
      const modal = await modalController.create({
        component: ModalPuntoVerde,
        componentProps: {
          puntoVerde,
          // Aca va el punto verde correspondiente que fue clickeado
        },
        cssClass: "punto-verde-modal",
      });
      return modal.present();
    },
  },
};
</script>
