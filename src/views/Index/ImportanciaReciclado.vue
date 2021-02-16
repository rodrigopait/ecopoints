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
        <img
          src="assets/img/residuos.jpg"
          alt="Imagen del logo universal del reciclaje"
        />
        <ion-card-header>
          <div class="font-controls">
            <div class="font-control" id="font-up">A<sup>+</sup></div>
            <div class="font-control" id="font-down">A<sup>-</sup></div>
          </div>
          <ion-card-subtitle class="ion-text-center"> </ion-card-subtitle>
          <br />
          <ion-text color="tertiary">
            <h1 class="ion-text-center ion-margin-top">
              La importancia del reciclado
            </h1>
          </ion-text>
          <ion-card-title></ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <!-- Inputs del form -->

          <ion-text color="success">
            <ion-badge color="success">
              <h2>+ Cuando se recicla..</h2></ion-badge
            >
          </ion-text>
          <ion-card color="light">
            <ion-card-header color="primary">
              <img
                src="assets/img/cuidar-el-planeta-reciclando.jpg"
                alt="Imagen del planeta Tierra en alusión al reciclaje"
              />
            </ion-card-header>
            <h1 class="ion-text-center">Se evita la contaminación desmedida</h1>
            <ion-card-content color="success">
              Al reciclar, se evita la contaminación de los rios y del suelo,
              protegiendo los acuíferos y preservando el hábitat natural de
              muchas especies.
            </ion-card-content>
          </ion-card>

          <ion-card color="light">
            <ion-card-header color="primary">
              <img
                src="assets/img/ofertas-de-empleo-reciclaje.jpg"
                alt="Imagen de trabajadores del reciclaje"
              />
            </ion-card-header>
            <h1 class="ion-text-center">Se crean puestos de trabajo</h1>
            <ion-card-content color="success">
              Reciclar implica no sólo preservar el medio ambiente sino tambien
              ayudar a la creación de puestos de trabajo, ya que el proceso de
              reciclaje necesita de empresas y personas trabajadoras que recojan
              los distintos materiales y los clasifiquen.
            </ion-card-content>
          </ion-card>

          <ion-card color="light">
            <ion-card-header color="primary">
              <img
                src="assets/img/productos-materiales-reciclados.jpg"
                alt="Imagen de productos generados con el reciclaje"
              />
            </ion-card-header>
            <h1 class="ion-text-center">Se fabrican nuevos productos</h1>
            <ion-card-content color="success">
              Al promoverse la industria del reciclado, estos materiales se
              reintroducen en el sistema productivo como materias primas para la
              elaboración de nuevos productos.
            </ion-card-content>
          </ion-card>

          <ion-card color="light">
            <ion-card-header color="primary">
              <img
                src="assets/img/recursos-naturales-reciclaje.jpg"
                alt="Imagen de bosques de donde se obtiene la materia prima"
              />
            </ion-card-header>
            <h1 class="ion-text-center">Se utilizan menos materias primas</h1>
            <ion-card-content color="success">
              Si se logra reciclar elementos como vidrio, papel o plástico, no
              hay necesidad de hacer uso de nuevas materias primas para fabricar
              productos. De este modo, se permiten preservar los recursos
              naturales y los bosques.
            </ion-card-content>
          </ion-card>

          <ion-card color="light">
            <ion-card-header color="primary">
              <img
                src="assets/img/cambio-climatico-y-reciclaje.jpg"
                alt="Imagen del cuidado del planeta"
              />
            </ion-card-header>
            <h1 class="ion-text-center">Se ahorra energía</h1>
            <ion-card-content color="success">
              Al reciclar, se reduce el trabajo de extracción, transporte y
              elaboración de nuevas materias primas, lo que conlleva una
              disminución importante del uso de la energía necesaria para llevar
              a cabo estos procesos.
            </ion-card-content>
          </ion-card>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "ImportanciaReciclado",
components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    methods: {
      
 
 


},
};

</script>



<style>
:root {
  --font-size: 1;
}

body {
  font-size: calc(var(--font-size) * 1em);
}

.font-controls {
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  display: flex;
  font-size: 1.5em;
}

.font-control {
  margin-left: 0.5em;
  padding: 0.25em;
  border: 1px solid #000;
  cursor: pointer;
}
</style>
