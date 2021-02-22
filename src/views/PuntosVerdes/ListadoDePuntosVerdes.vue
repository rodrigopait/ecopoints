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
            <ion-icon :icon="leaf" /> Puntos verdes registrados
          </h1>
        </ion-text>
        <ion-card-content>
          <!-- Listado de puntos verdes -->
          <ion-list>
            <ion-item v-for="punto of puntosVerdes" :key="punto.nombre" button>
              <ion-label @click.self="mostrarDetalle(punto)">{{
                punto.nombre
              }}</ion-label>
              <ion-button size="small" color="">
                <router-link to="/editarPuntoVerde">
                  <ion-icon :icon="create" /> </router-link
              ></ion-button>
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

import ModalPuntoVerde from "./DetallePuntoVerde";

import { leaf, create, close } from "ionicons/icons";

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
      leaf,
      create,
      close,
    };
  },
  data() {
    return {
      // ESTO TIENE QUE SER EL LISTADO TRAIDO DESDE LA DB, A FUTURO
      puntosVerdes: [
        { nombre: "Punto Verde La Plata" },
        { nombre: "Punto Verde Centro" },
        { nombre: "Punto Verde Parque Sicardi" },
        { nombre: "Punto Verde Tolosa" },
        { nombre: "Punto Verde Arturo Segui" },
      ],
    };
  },
  methods: {
    async mostrarDetalle(puntoVerde) {
      const modal = await modalController.create({
        component: ModalPuntoVerde,
        componentProps: {
          // Aca va el punto verde correspondiente que fue clickeado
          puntoVerde,
        },
      });
      return modal.present();
    },
  },
  mounted() {
      const fontSize = window.localStorage.getItem("fontSize");
      const fontColor = window.localStorage.getItem("fontColor");
      const fontSpacing = window.localStorage.getItem("fontSpacing");
      const elems = document.getElementsByTagName("*");
      for (let i = 0; i < elems.length; i++) {
        elems[i].style.fontSize = fontSize;
        elems[i].style.color = fontColor;         
      }
      document.body.style.letterSpacing = fontSpacing;
    },
  
};
</script>
