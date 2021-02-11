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
            <h1 class="ion-text-center"><ion-icon :icon="add" /> Alta de punto verde</h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label color="medium" position="floating">Nombre</ion-label>
            <ion-input
              v-model="puntoVerdeActual.nombre"
              type="text"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" type="text" position="floating"
              >Ubicación</ion-label
            >
            <ion-input
              v-model="puntoVerdeActual.ubicacion"
              type="text"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium" position="floating">Horarios</ion-label>
            <ion-input
              v-model="puntoVerdeActual.horarios"
              type="text"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label color="medium">Tipos de residuos que acepta:</ion-label>
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
              >
                <ion-checkbox
                  color="success"
                  slot="start"
                  @update:modelValue="agregarTipo(tipo)"
                  :modelValue="puntoVerdeActual.tipos.includes(tipo)"
                ></ion-checkbox>
                <ion-label>{{ tipo }}</ion-label>
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
             <div class="ion-text-center ion-margin">  
            <ion-button color="success" @click="guardarPuntoVerde"
              >Guardar</ion-button
            >
            <ion-button color="primary" @click="$router.go(-1)"
              >Cancelar</ion-button
            >
             </div>
          </div>
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

import {
 add,
} from "ionicons/icons";

import {db} from "@/db";
import {useRouter} from "vue-router";

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
    return { router,add };
    
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
    agregarTipo(tipo) {
      if (this.puntoVerdeActual.tipos.includes(tipo)) {
        const index = this.puntoVerdeActual.tipos.indexOf(tipo);
        this.puntoVerdeActual.tipos.splice(index, 1);
      } else {
        this.puntoVerdeActual.tipos.push(tipo);
      }
      console.log(this.puntoVerdeActual.tipos);
    },
    guardarPuntoVerde() {
      db.collection("puntosVerdes")
        .add(this.puntoVerdeActual)
        .then(() => {
          this.mostrarAlerta().then(() => this.router.push("/tabs/home"));
        });
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
  },
};
</script>
