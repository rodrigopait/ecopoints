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
            <h1 class="ion-text-center">
              <ion-icon :icon="people" /> Alta de usuario
            </h1>
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
            <ion-input type="text"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" type="password" position="floating"
              >Contraseña</ion-label
            >
            <ion-input type="password"></ion-input>
          </ion-item>
          <div class="ion-margin">
            <div class="ion-text-center ion-margin">
              <ion-button color="success" @click="altaUsuario"
                >Guardar</ion-button
              >
              <router-link color="success" no-lines to="/">
                <ion-button color="primary"> Volver </ion-button>
              </router-link>
            </div>
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
} from "@ionic/vue";
import { db } from "@/db";

import { people } from "ionicons/icons";

export default {
  name: "AltaDeUsuario",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

  setup() {
    return {
      people,
    };
  },

  methods: {
    altaUsuario() {
      const example = {
        email: "user@example.com",
        name: "user",
        password: "123",
      };
      db.collection("users")
        .add(example)
        .then((res) => console.log(res));
    },
  },
};
</script>
