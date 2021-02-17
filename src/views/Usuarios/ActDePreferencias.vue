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
          <div>
            <h1 class="ion-text-center">
              <ion-icon :icon="settings" /> Mis Preferencias
            </h1>
          </div>
        </ion-text>
        <ion-card-content>
          <!-- Listado de puntos verdes -->

          <ion-list>
            <ion-item>
              <ion-icon :icon="person" />
              <router-link to="/editarMiPerfil">
                <ion-label color="dark" class="ion-margin"
                  >Actualizar mi perfil</ion-label
                >
              </router-link>
            </ion-item>

            <ion-item>
              <ion-icon :icon="rose" />
              <router-link to="/tabs/favoritos">
                <ion-label color="dark" class="ion-margin"
                  >Puntos verdes favoritos</ion-label
                >
              </router-link>
            </ion-item>

            <ion-item>
              <ion-icon :icon="add" />
              <router-link to="/altaDePuntoVerde">
                <ion-label color="dark" class="ion-margin"
                  >Alta de punto verde</ion-label
                >
              </router-link>
            </ion-item>

            <ion-item>
              <ion-icon :icon="leaf" />
              <router-link to="/listadoDePuntosVerdes">
                <ion-label color="dark" class="ion-margin"
                  >Puntos verdes registrados</ion-label
                >
              </router-link>
            </ion-item>

            <ion-item>
              <ion-icon :icon="home" />
              <router-link to="/">
                <ion-label color="dark" class="ion-margin">Inicio</ion-label>
              </router-link>
            </ion-item>
          </ion-list>
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
  IonIcon,
  IonList,
  IonItem,
  IonText,
} from '@ionic/vue';

import {
  homeOutline,
  mapOutline,
  cogOutline,
  starOutline,
  settings,
  person,
  leaf,
  home,
  rose,
  add,
} from 'ionicons/icons';

export default {
  name: 'config',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonLabel,
    IonIcon,
    IonList,
    IonItem,
    IonText,
  },
  setup() {
    return {
      homeOutline,
      mapOutline,
      cogOutline,
      starOutline,
      settings,
      person,
      leaf,
      home,
      rose,
      add,
    };
  },
};
</script>
