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
              <ion-icon :icon="person" /> Actualizar mi perfil
            </h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Inputs del form -->
          <form
            name="actDeUsuario"
            id="actDeUsuario"
            v-on:submit.prevent="procesar()"
          >
            <ion-item>
              <ion-label color="medium" position="floating">Nombre</ion-label>
              <ion-input
                type="text"
                name="nombre"
                id="nombre"
                v-model="contacto.nombre"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label color="medium" position="floating">Apellido</ion-label>
              <ion-input
                type="text"
                name="apellido"
                v-model="contacto.apellido"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label color="medium" position="floating">DNI</ion-label>
              <ion-input
                type="number"
                name="dni"
                v-model="contacto.dni"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label color="medium" position="floating">Mail</ion-label>
              <ion-input
                type="email"
                name="mail"
                v-model="contacto.mail"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label color="medium" position="floating"
                >Contraseña</ion-label
              >
              <ion-input
                type="password"
                name="password"
                v-model="contacto.password"
              ></ion-input>
            </ion-item>
            <div class="ion-margin ion-text-center">
              <ion-button color="success" type="submit">Actualizar</ion-button>

              <router-link color="success" no-lines to="/editarMisPreferencias">
                <ion-button color="primary">
                  Cancelar
                </ion-button>
              </router-link>
            </div>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script  >
//lang="ts"

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { person } from "ionicons/icons";

import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "ActDeUsuario",
  data() {
    return {
      submited: false,
      contacto: {
        nombre: "",
        apellido: "",
        dni: "",
        mail: "",
        password: "",
      },
    };
  },

  setup() {
    return {
      person,
    };
  },

  methods: {
    procesar() {
      this.submited = true;
      // if (document.getElementById("nombre").value == "hola") {
      //   alert("bien");
      //}
      if (this.$v.$invalid) {
        return false;
      }
    },

    validations: {
      contacto: {
        nombre: {
          required,
          minLength: minLength(2),
        },
      },
    },
  },
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
