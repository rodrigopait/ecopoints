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
            <h1 class="ion-text-center">
              <ion-icon :icon="add" /> Alta de punto verde
            </h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form
            name="altaDePuntoVerde"
            id="altaDePuntoVerde"
            v-on:submit.prevent="altaDePuntoVerde()"
          >
            <ion-item>
              <ion-label color="medium" position="floating">Nombre</ion-label>
              <ion-input
                v-model="puntoVerdeActual.nombre"
                type="text"
                name="nombre"
                id="nombre"
                v-on:click="limpiarNombre()"
              ></ion-input>
            </ion-item>
            <ion-item>
              <ion-text id="nombreMsg" color="danger"> </ion-text>

              <ion-label color="medium" type="text" position="floating"
                >Ubicación</ion-label
              >
              <ion-input
                v-model="puntoVerdeActual.ubicacion"
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
                v-model="puntoVerdeActual.horarios"
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
                <ion-item
                  v-for="tipo in [
                    'Papeles',
                    'Cartones',
                    'Plásticos',
                    'Vidrios',
                    'Metales',
                  ]"
                  :key="tipo"
                  :value="tipo"
                  :name="tipo"
                >
                  <ion-checkbox
                    name="residuos"
                    color="success"
                    slot="start"
                    :id="tipo"
                    v-on:click="limpiarResiduos()"
                    @update:modelValue="agregarTipo(tipo)"
                    :modelValue="puntoVerdeActual.tipos.includes(tipo)"
                  ></ion-checkbox>
                  <ion-label>{{ tipo }}</ion-label>
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

            <div class="ion-margin">
              <div class="ion-text-center ion-margin">
                <ion-button color="success" @click="altaDePuntoVerde"
                  >Guardar</ion-button
                >
                <ion-button color="primary" @click="$router.go(-1)"
                  >Cancelar</ion-button
                >
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
  alertController,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { add } from "ionicons/icons";

import { db } from "@/db";
import { useRouter } from "vue-router";

export default {
  name: "AltaDePuntoVerde",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonTextarea,
    IonCardContent,
    IonCard,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonInput,
    IonList,
  },
  setup() {
    const router = useRouter();
    return { router, add };
  },

  data() {
    return {
      puntoVerdeActual: {
        nombre: "",
        ubicacion: "",
        horarios: "",
        tipos: [],
        observaciones: "",
      },
      alertOpen: false,
    };
  },
  methods: {
    altaDePuntoVerde() {
      //this.submited = true;
      if (
        document.altaDePuntoVerde.nombre.value.length > 35 ||
        document.altaDePuntoVerde.nombre.value.length == 0 ||
        document.altaDePuntoVerde.nombre.value.length < 2
      ) {
        document.getElementById("nombreMsg").innerHTML =
          "Por favor, el nombre debe tener entre 2 y 35 caracteres.";
        return false;
      }

      if (document.altaDePuntoVerde.ubicacion.value.length == 0) {
        document.getElementById("ubicacionMsg").innerHTML =
          "Por favor, ingresá una ubicación.";
        return false;
      }

      if (
        document.altaDePuntoVerde.horarios.value.length > 35 ||
        document.altaDePuntoVerde.horarios.value.length == 0 ||
        document.altaDePuntoVerde.horarios.value.length < 5
      ) {
        document.getElementById("horariosMsg").innerHTML =
          "Por favor, el horario debe tener entre 5 y 35 caracteres.";
        return false;
      }
      /*   
       if (!this.tipo) {
        document.getElementById("residuosMsg").innerHTML =
          "Por favor, seleccioná al menos un tipo de residuo.";
        return false;
      }*/

      if (
        !document.getElementById("Papeles").checked &&
        !document.getElementById("Cartones").checked &&
        !document.getElementById("Plásticos").checked &&
        !document.getElementById("Vidrios").checked &&
        !document.getElementById("Metales").checked
      ) {
        document.getElementById("residuosMsg").innerHTML =
          "Por favor, seleccioná al menos un tipo de residuo.";
        return false;
      }

      if (document.altaDePuntoVerde.observaciones.value.length != 0) {
        if (
          document.altaDePuntoVerde.observaciones.value.length > 120 ||
          document.altaDePuntoVerde.observaciones.value.length < 5
        ) {
          document.getElementById("observacionesMsg").innerHTML =
            "Por favor, las observaciones deben tener entre 5 y 120 caracteres.";
          return false;
        } else {
          db.collection("puntosVerdes")
            .add(this.puntoVerdeActual)
            .then(() => {
              this.mostrarAlerta().then(() => this.router.push("/tabs/home"));
            });
        }
      } else {
        db.collection("puntosVerdes")
          .add(this.puntoVerdeActual)
          .then(() => {
            this.mostrarAlerta().then(() => this.router.push("/tabs/home"));
          });
      }
    },

    agregarTipo(tipo) {
      if (this.puntoVerdeActual.tipos.includes(tipo)) {
        const index = this.puntoVerdeActual.tipos.indexOf(tipo);
        this.puntoVerdeActual.tipos.splice(index, 1);
      } else {
        this.puntoVerdeActual.tipos.push(tipo);
      }
      console.log(this.puntoVerdeActual.tipos);
    },

    async mostrarAlerta() {
      const alerta = await alertController.create({
        header: "Punto verde creado",
        subHeader: "El punto fue creado con éxito!",
        message: "Pronto lo podrás ver junto con los otros",
        buttons: ["OK"],
      });
      return alerta.present();
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
};
</script>
