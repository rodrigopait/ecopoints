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
          <h1 class="ion-text-center"><ion-icon :icon="leaf" /> Puntos verdes registrados</h1>
        </ion-text>
        <ion-card-content>
          <!-- Listado de puntos verdes -->
          <ion-list>
            <ion-item>
              <ion-label>Punto verde La Plata</ion-label>
              <ion-button size="small" color=""> <router-link to="/editarPuntoVerde"> <ion-icon :icon="create" />  </router-link></ion-button>
              <ion-button size="small" color=""> <ion-icon :icon="close" /></ion-button>
            </ion-item>

            <ion-item>
              <ion-label>Punto verde Centro</ion-label>
              <ion-button size="small" color=""> <router-link to="/editarPuntoVerde"> <ion-icon :icon="create" /> </router-link></ion-button>
              <ion-button size="small" color=""> <ion-icon :icon="close" /></ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Parque Sicardi</ion-label>
              <ion-button size="small" color=""><router-link to="/editarPuntoVerde"> <ion-icon :icon="create" /> </router-link></ion-button>
              <ion-button size="small" color=""> <ion-icon :icon="close" /></ion-button>        
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Tolosa</ion-label>
                <ion-button size="small" color=""><router-link to="/editarPuntoVerde"> <ion-icon :icon="create" /> </router-link></ion-button>
              <ion-button size="small" color=""> <ion-icon :icon="close" /></ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Arturo Segui</ion-label>
               <ion-button size="small" color=""><router-link to="/editarPuntoVerde"> <ion-icon :icon="create" /> </router-link></ion-button>
              <ion-button size="small" color=""> <ion-icon :icon="close" /></ion-button>
            </ion-item>
          </ion-list>
           <div class="ion-text-center ion-margin">
            <router-link color="success" no-lines to="/editarMisPreferencias">
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
} from "@ionic/vue";


import {
 leaf,
 create,
 close,
} from "ionicons/icons";


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
  
};

</script>
