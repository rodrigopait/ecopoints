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

      <ion-chip color="success" class="ion-margin-top">
        <ion-label color="success"
          >Bienvenid@ a Ecopoints, la primera app de reciclaje
          accesible</ion-label
        >
      </ion-chip>
      <div class="ion-text-center">
      <ion-button expand="" class="text-center" color="success" router-link="/altaDeUsuario"
          >Registrate ahora!</ion-button
        >
    </div>
      <ion-card color="primary">
        <img
          src="assets/img/ecopoints.jpg"
          alt="Imagen de una persona introducciendo elementos a recicilar en un contenedor"
        />
        <ion-route url="/login" component="page-login"></ion-route>
        <ion-card-header color="primary">
          <ion-card-subtitle> </ion-card-subtitle>
          <ion-card-title>Donde llevar los elementos a reciclar</ion-card-title>
        </ion-card-header>
        <ion-card-content> Ingresá y conocé donde llevarlos. </ion-card-content>
        <ion-button expand="full" color="success" router-link="/tabs/mapa"
          >Ver más</ion-button
        >
      </ion-card>

      <ion-card color="primary" class="mt-4">
        <ion-card-header color="primary">
          <img
            src="assets/img/separacion.jpeg"
            alt="Imagen de una persona ingresando elementos en un cesto de basura"
          />
          <ion-card-subtitle> </ion-card-subtitle>
          <ion-card-title>¿Cómo separar los residuos?</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Informate como separar los residuos y así ayudar a evitar la
          contaminación.
        </ion-card-content>
        <ion-button
          expand="full"
          color="success"
          router-link="/tabs/home/separar-residuos"
          >Ver más</ion-button
        >
      </ion-card>

      <ion-card color="primary">
        <ion-card-header color="primary">
          <img
            src="assets/img/reciclado.jpg"
            alt="Imagen con el símbolo universal del reciclado"
          />
          <ion-card-subtitle> </ion-card-subtitle>

          <ion-card-title>La importancia del reciclado</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Conocé de que manera, tu aporte permite reutilizar los materiales,
          reintroduciendolos en el sistema productivo.
        </ion-card-content>
        <ion-button
          expand="full"
          color="success"
          router-link="/tabs/home/importancia-reciclado"
          >Ver más</ion-button
        >
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
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonButton,
  IonChip,
} from "@ionic/vue";

export default {
  name: "home",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCardTitle,
    IonLabel,
    IonButton,
    IonChip,
  },
};
</script>

<style scoped>
ion-toolbar {
  background-color: #dbdbdb;
}
</style>
