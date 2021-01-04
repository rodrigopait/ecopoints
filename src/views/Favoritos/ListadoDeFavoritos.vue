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
          <h1 class="ion-text-center">Mis puntos favoritos</h1>
        </ion-text>
        <ion-card-content>
          <!-- Listado de puntos verdes -->
          <ion-list>
            <ion-item>
              <ion-label>Punto verde La Plata</ion-label>
              <ion-button
                @click="presentAlertConfirm"
                size="small"
                color="danger"
                >X</ion-button
              >
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Villa Elisa</ion-label>
              <ion-button size="small" color="danger">X</ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Punto verde City Bell</ion-label>
              <ion-button size="small" color="danger">X</ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Villa Elvira</ion-label>
              <ion-button size="small" color="danger">X</ion-button>
            </ion-item>
            <ion-item>
              <ion-label>Punto verde Ringuelet</ion-label>
              <ion-button size="small" color="danger">X</ion-button>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

