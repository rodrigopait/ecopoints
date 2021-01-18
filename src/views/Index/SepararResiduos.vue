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
        <img src="assets/img/cestos.jpg" alt="Imagen de cestos de basura" />

        <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
        <ion-text color="success">
          <h1 class="ion-text-center">¿Cómo separar los residuos?</h1>
        </ion-text>

        <h5 class="ion-margin ion-text-justify">
          Un punto fundamental dentro del reciclaje, es distinguir correctamente
          los colores del reciclaje.
          <br />
          De esta forma se realizará una separación correcta de todo aquello que
          queramos reciclar.
          <br />
          Dichos colores de reciclaje son visualizados generalmente en los
          contenedores diseñados para tal fin.
          <br />
          Los colores utilizados para tal propósito, son los siguientes:
        </h5>
        <ion-card-content>
          <ion-card color="secondary">
            <ion-card-content>
              En los contenedores azules, se deben depositar todo tipo de
              papeles y cartones. Por ejemplo, diarios, revistas, papeles de
              envolver o folletos publicitarios, entre otros.
            </ion-card-content>
          </ion-card>
          <ion-card color="warning">
            <ion-card-content>
              En los contenedores amarillos se deben depositar todo tipo de
              envases y productos fabricados con plásticos como botellas,
              envases de alimentación o bolsas. Las latas de conservas y de
              refrescos también deben depositarse en estos contenedores.
            </ion-card-content>
          </ion-card>

          <ion-card color="success">
            <ion-card-content>
              En estos contenedores se depositan envases de vidrio, como por
              ejemplo botellas de bebidas alcohólicas.
              <br />
              Es importante no utilizar estos contenedores para cerámica o
              cristal, ya que encarecen notablemente el reciclaje de este tipo
              de material.
            </ion-card-content>
          </ion-card>

          <ion-card color="danger">
            <ion-card-content>
              Los contenedores de reciclaje rojos, son muy útiles ya que evitan
              una grancontaminación ambiental. Son utilizados para almacenar
              desechos como baterías, pilas, insecticidas, aceites, aerosoles, o
              productos tecnológicos.
            </ion-card-content>
          </ion-card>

          <ion-card color="primary">
            <ion-card-content>
              En los contenedores de color gris, se depositan residuos no tan
              comunes en los hogares, como lo es la materia biodegradable.
            </ion-card-content>
          </ion-card>

          <ion-card color="orange">
            <ion-card-content>
              Aunque es difícil encontrar un contenedor de color naranja, estos
              se utilizan exclusivamente para material orgánico. En caso de no
              disponer de este tipo de contenedor, se puede utilizar el gris.
            </ion-card-content>
          </ion-card>
        </ion-card-content>
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
} from "@ionic/vue";

export default {
  name: "SepararResiduos",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
};
</script>
