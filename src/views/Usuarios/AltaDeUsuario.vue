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
           <form
            name="actDeUsuario"
            id="actDeUsuario"
            v-on:submit.prevent="altaDeUsuario()"
          >
          <!-- Inputs del form -->
          <ion-item>
            <ion-label color="medium" position="floating">Nombre</ion-label>
            <ion-input type="text"
                name="nombre"
                id="nombre"
                v-on:click="limpiarNombre()"></ion-input>
          </ion-item>
          <ion-text id="nombreMsg" color="danger"> </ion-text>


          <ion-item>
            <ion-label color="medium" position="floating">Apellido</ion-label>
            <ion-input type="text" name="apellido"
                id="apellido"
                v-on:click="limpiarApellido()"></ion-input>
          </ion-item>
          <ion-text id="apellidoMsg" color="danger"> </ion-text>

          <ion-item>
            <ion-label color="medium" position="floating">DNI</ion-label>
            <ion-input type="text" name="dni" id="dni" v-on:click="limpiarDNI()"></ion-input>
          </ion-item>
          <ion-text id="dniMsg" color="danger"> </ion-text>

          <ion-item>
            <ion-label color="medium" position="floating">Mail</ion-label>
            <ion-input type="text" name="mail" id="dni" v-on:click="limpiarMail()"></ion-input>
          </ion-item>
          <ion-text id="mailMsg" color="danger"> </ion-text>

          <ion-item>
            <ion-label color="medium" type="password" position="floating"
              >Contraseña</ion-label
            >
            <ion-input type="password"
                name="password"
                id="password"
               v-on:click="limpiarPassword()"></ion-input>
          </ion-item>
           <ion-text id="passwordMsg" color="danger"> </ion-text>


          <div class="ion-margin">
            <div class="ion-text-center ion-margin">
              <ion-button color="success"  type="submit" @click="altaUsuario"
                >Guardar</ion-button
              >
              <router-link color="success" no-lines to="/">
                <ion-button color="primary"> Volver </ion-button>
              </router-link>
            </div>
          </div>
        </form>
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
         if (document.actDeUsuario.nombre.value.length > 35 ||
        document.actDeUsuario.nombre.value.length == 0 ||
        document.actDeUsuario.nombre.value.length < 2) {
        document.getElementById("nombreMsg").innerHTML="Por favor, tu nombre debe tener entre 2 y 35 caracteres.";
        return false;
     }

      if (document.actDeUsuario.apellido.value.length > 20 ||
          document.actDeUsuario.apellido.value.length == 0 ||
          document.actDeUsuario.apellido.value.length < 2) {
          document.getElementById("apellidoMsg").innerHTML="Por favor, tu apellido debe tener entre 2 y 20 caracteres.";
          return false;
      }

      if (document.actDeUsuario.dni.value.length > 20 ||
          document.actDeUsuario.dni.value.length == 0 ||
          document.actDeUsuario.dni.value.length < 7 ) {
          document.getElementById("dniMsg").innerHTML="Por favor, tu dni debe tener entre 7 y 20 caracteres.";
          return false;
      }

      if (!/^[0-9]+$/.test(document.actDeUsuario.dni.value)) {
          document.getElementById("dniMsg").innerHTML="Por favor, tu dni sólo puede contener números.";
          return false;
      }

      if (document.actDeUsuario.mail.value.length > 30 ||
          document.actDeUsuario.mail.value.length == 0 ||
          document.actDeUsuario.mail.value.length < 5) {
          document.getElementById("mailMsg").innerHTML="Por favor, tu mail debe tener entre 5 y 30 caracteres.";
          return false;
      }

      if (!(/\S+@\S+\.\S+/.test(document.actDeUsuario.mail.value))) {
          document.getElementById("mailMsg").innerHTML="Por favor, ingresá tu email con el formato mimail@dominio.com.";   
          return false;
      }

      if (document.actDeUsuario.password.value.length > 30 ||
          document.actDeUsuario.password.value.length == 0 ||
          document.actDeUsuario.password.value.length < 10) {
          document.getElementById("passwordMsg").innerHTML="Por favor, tu contraseña debe tener entre 10 y 30 caracteres.";
          return false;
      } else {
         const example = {
        email: "userexample@example.com",
        name: "userxp",
        password: "12347",
      };
      db.collection("users")
        .add(example)
        .then((res) => console.log(res));
          return true;
      }
    },

    limpiarNombre() {
      document.getElementById("nombreMsg").innerHTML = "";
    },

    limpiarApellido() {
      document.getElementById("apellidoMsg").innerHTML = "";
    },

    limpiarDNI() {
      document.getElementById("dniMsg").innerHTML = "";
    },

    limpiarMail() {
      document.getElementById("mailMsg").innerHTML = "";
    },

    limpiarPassword() {
      document.getElementById("passwordMsg").innerHTML = "";
    },        
  },

  mounted() {
    const fontSize = window.localStorage.getItem("fontSize");
    const fontColor = window.localStorage.getItem("fontColor");
    const fontSpacing = window.localStorage.getItem("fontSpacing");
    const fontFamily = window.localStorage.getItem("fontFamily");
    
    const elems = document.getElementsByTagName("*");
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.fontSize = fontSize;
      elems[i].style.color = fontColor;  
      elems[i].style.fontFamily=fontFamily;       
    }
     document.body.style.letterSpacing = fontSpacing;
  },
};
</script>
