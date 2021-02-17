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
            <h1 class="ion-text-center">Actualizar punto verde</h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form
            name="actDePuntoVerde"
            id="actDePuntoVerde"
            v-on:submit.prevent="actualizarPuntoVerde()"
          >
            <ion-item>
              <ion-label color="medium" position="floating">Nombre</ion-label>
              <ion-input
                type="text"
                name="nombre"
                id="nombre"
                v-on:click="limpiarNombre()"
              ></ion-input>
            </ion-item>
            <ion-text id="nombreMsg" color="danger"> </ion-text>

            <ion-item>
              <ion-label color="medium" type="text" position="floating"
                >Ubicación</ion-label
              >
              <ion-input
                type="text"
                name="ubicacion"
                id="ubicacion"
                v-on:click="limpiarUbicacion()"
              ></ion-input>
            </ion-item>
            <ion-text id="ubicacionMsg" color="danger"> </ion-text>

            <ion-item>
              <ion-label color="medium" position="floating">Horarios</ion-label>
              <ion-input
                type="text"
                name="horarios"
                id="horarios"
                v-on:click="limpiarHorarios()"
              ></ion-input>
            </ion-item>
            <ion-text id="horariosMsg" color="danger"> </ion-text>

            <ion-item>
              <ion-label color="medium"
                >Tipos de residuos que acepta:</ion-label
              >
            </ion-item>
            <ion-item>
              <ion-list>
                <ion-item>
                  <ion-checkbox
                    color="success"
                    slot="start"
                    name="residuos"
                    id="papeles"
                    value="papeles"
                    v-on:click="limpiarResiduos()"
                  ></ion-checkbox>
                  <ion-label>Papeles</ion-label>
                </ion-item>
                <ion-item>
                  <ion-checkbox
                    color="success"
                    slot="start"
                    name="residuos"
                    id="cartones"
                    value="cartones"
                    v-on:click="limpiarResiduos()"
                  ></ion-checkbox>
                  <ion-label>Cartones</ion-label>
                </ion-item>
                <ion-item>
                  <ion-checkbox
                    color="success"
                    slot="start"
                    name="residuos"
                    id="plasticos"
                    value="plasticos"
                    v-on:click="limpiarResiduos()"
                  ></ion-checkbox>
                  <ion-label>Plásticos</ion-label>
                </ion-item>
                <ion-item>
                  <ion-checkbox
                    color="success"
                    slot="start"
                    name="residuos"
                    id="vidrios"
                    value="vidrios"
                    v-on:click="limpiarResiduos()"
                  ></ion-checkbox>
                  <ion-label>Vidrios</ion-label>
                </ion-item>
                <ion-item>
                  <ion-checkbox
                    color="success"
                    slot="start"
                    name="residuos"
                    id="metales"
                    value="metales"
                    v-on:click="limpiarResiduos()"
                  ></ion-checkbox>
                  <ion-label>Metales</ion-label>
                </ion-item>
              </ion-list>
            </ion-item>
            <ion-text id="residuosMsg" color="danger"> </ion-text>

            <ion-item>
              <ion-textarea
                type="text"
                placeholder="Observaciones"
                name="observaciones"
                id="observaciones"
                v-on:click="limpiarObservaciones()"
              ></ion-textarea>
            </ion-item>
            <ion-text id="observacionesMsg" color="danger"> </ion-text>

            <div class="ion-text-center ion-margin">
              <ion-button color="success" type="submit">Actualizar</ion-button>
              <router-link color="success" no-lines to="/listadoDePuntosVerdes">
                <ion-button color="primary"> Volver </ion-button>
              </router-link>
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

export default {
  name: "ActDePuntoVerde",
  methods: {
    
    actualizarPuntoVerde() {
      //this.submited = true;
      if (
        document.actDePuntoVerde.nombre.value.length > 35 ||
        document.actDePuntoVerde.nombre.value.length == 0 ||
        document.actDePuntoVerde.nombre.value.length < 2
      ) {
        document.getElementById("nombreMsg").innerHTML =
          "Por favor, el nombre debe tener entre 2 y 35 caracteres.";
        return false;
      }

      if (document.actDePuntoVerde.ubicacion.value.length == 0) {
        document.getElementById("ubicacionMsg").innerHTML =
          "Por favor, ingresá una ubicación.";
        return false;
      }

      if (
        document.actDePuntoVerde.horarios.value.length > 35 ||
        document.actDePuntoVerde.horarios.value.length == 0 ||
        document.actDePuntoVerde.horarios.value.length < 5
      ) {
        document.getElementById("horariosMsg").innerHTML =
          "Por favor, el horario debe tener entre 5 y 35 caracteres.";
        return false;
      }

      if (
        !document.getElementById("papeles").checked &&
        !document.getElementById("cartones").checked &&
        !document.getElementById("plasticos").checked &&
        !document.getElementById("vidrios").checked &&
        !document.getElementById("metales").checked
      ) {
        document.getElementById("residuosMsg").innerHTML =
          "Por favor, seleccioná al menos un tipo de residuo.";
        return false;
      }

      if (document.actDePuntoVerde.observaciones.value.length != 0) {
        if (
          document.actDePuntoVerde.observaciones.value.length > 120 ||
          document.actDePuntoVerde.observaciones.value.length < 5
        ) {
          document.getElementById("observacionesMsg").innerHTML =
            "Por favor, las observaciones deben tener entre 5 y 120 caracteres.";
          return false;
        }
      }
    },

    limpiarNombre() {
      document.getElementById("nombreMsg").innerHTML = "";
    },

    limpiarUbicacion() {
      document.getElementById("ubicacionMsg").innerHTML = "";
    },

    limpiarHorarios() {
      document.getElementById("horariosMsg").innerHTML = "";
    },

    limpiarResiduos() {
      document.getElementById("residuosMsg").innerHTML = "";
    },

    limpiarObservaciones() {
      document.getElementById("observacionesMsg").innerHTML = "";
    },
  },

  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
