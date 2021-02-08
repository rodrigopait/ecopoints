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
            <h1 class="ion-text-center">Alta de usuario</h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Inputs del form -->
          <ion-item>
            <ion-label color="medium" position="floating">Nombre</ion-label>
            <ion-input type="text" id="nombre" name="nombre"></ion-input>
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
            <ion-button color="success" @click="altaUsuario"
              >Guardar</ion-button
            >
            <ion-button color="primary">Cancelar</ion-button>
            <ion-button @click="validacion">Alta</ion-button>
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
  toastController
} from "@ionic/vue";
import { db } from "@/db";

export default {
  name: "AltaDeUsuario",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

  methods: {
    validacion() {
      if (this.nombre == "") {
        alert("nombre vacio");
        console.log("vacio nombre");
      }
        alert("nombre vacio");
      
    },

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
