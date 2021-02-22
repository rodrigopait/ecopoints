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
              <ion-icon :icon="walk" /> Accesibilidad
            </h1>
          </ion-text>
          <ion-card-subtitle class="ion-text-center"></ion-card-subtitle>
          <ion-card-title></ion-card-title>
        </ion-card-header>

        <p class="ion-margin success">
          Separación de la fuente:
          <select
            id="selectSepararFuente"
            class="content-select"
            v-on:change="separarFuente()"
          >
            <option>Elegí un tamaño</option>
            <option>0</option>
            <option>0.1</option>
            <option>0.2</option>
            <option>0.3</option>
            <option>0.4</option>
            <option>0.5</option>
          </select>
        </p>

        <p class="ion-margin">
          Tamaño de la fuente:
          <select id="selectTamañoFuente" v-on:change="cambiarTamañoFuente()">
            <option>Elegí un tamaño</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </p>

        <p class="ion-margin">
          Tipo de la fuente:
          <select id="selectTipoDeFuente" v-on:change="cambiarTipoDeFuente()">
            <option>Elegí una fuente</option>
            <option>Arial</option>
            <option>Symbol</option>
            <option>Verdana</option>
            <option>Courier</option>
            <option>Helvetica</option>
            <option>Calibri</option>
            <option>Futura</option>
          </select>
        </p>

        <p class="ion-margin">
          Color de la fuente:
          <select id="selectColorFuente" v-on:change="cambiarColor()">
            <option>Elegí un color</option>
            <option value="#ffffff">Blanco</option>
            <option value="#737373">Gris</option>
            <option value="#5083BA">Celeste</option>
            <option value="#C93434">Rojo</option>
          </select>
        </p>

        <ion-item id="tema">
          <ion-label>Tamaño de la fuente</ion-label>
          <ion-select
            :interface-options="customAlertOptions"
            interface="alert"
            id="valor"
            v-on:change="CambioTexto()"
            multiple="false"
            placeholder="Selecciona un tamaño"
          >
            <ion-select-option :value="10">10</ion-select-option>
            <ion-select-option :value="20">20</ion-select-option>
            <ion-select-option :value="30">30</ion-select-option>
            <ion-select-option :value="40">40</ion-select-option>
            <ion-select-option :value="50">50</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Separación de la fuente</ion-label>
          <ion-select
            id="selectSepararFuente"
            v-on:change="separarFuente()"
            placeholder="Elegí un tamaño"
          >
            <ion-select-option value="0">0</ion-select-option>
            <ion-select-option value="0.1">0.1</ion-select-option>
            <ion-select-option value="0.2">0.2</ion-select-option>
            <ion-select-option value="0.1">0.1</ion-select-option>
            <ion-select-option value="0.2">0.2</ion-select-option>
          </ion-select>
        </ion-item>

        <h5 class="ion-margin ion-text-justify">
          TEXTO DE EJEMPLO PARA PROBAR LA ACCESIBILIDAD
          <br />
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
        <div class="ion-text-center ion-margin">
          <router-link
            color="success"
            no-lines
            to="/tabs/editarMisPreferencias"
          >
            <ion-button color="primary"> Volver </ion-button>
          </router-link>
        </div>
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
  IonSelect,
  IonSelectOption,
  IonLabel,
} from "@ionic/vue";


import { walk } from "ionicons/icons";

export default {
  name: "SepararResiduos",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSelectOption, IonLabel, IonSelect, },

   setup() {
    return {
      walk,
    };
  },

   methods: {

      separarFuente() {
            let select = 0;
            select=document.getElementById("selectSepararFuente");
            const fontSpacing = document.body.style.letterSpacing=select.options[select.selectedIndex].text+"em";
            window.localStorage.setItem('fontSpacing', fontSpacing)            
      },

      cambiarTamañoFuente() {         
        const card=document.getElementsByTagName("*");

        const select=document.getElementById("selectTamañoFuente");
        const fontSize = select.options[select.selectedIndex].text
        let i;
        for ( i = 0; i < card.length; i++){
          if (select=="Elegí un tamaño"){
            return false
          }
          card[i].style.fontSize=fontSize+"px";
        // card[i].style.fontFamily="Symbol";
        }
        window.localStorage.setItem('fontSize', fontSize + 'px')       
      },

      cambiarTipoDeFuente() {
        const card=document.getElementsByTagName("*");

        const select=document.getElementById("selectTipoDeFuente");
        const fontFamily = select.options[select.selectedIndex].text
        let i;
        for ( i = 0; i < card.length; i++){
          if (select=="Elegí un tamaño"){
            return false
          }
          //card[i].style.fontSize=fontSize+"px";
         card[i].style.fontFamily=fontFamily;
        }
        window.localStorage.setItem('fontFamily', fontFamily)       
      },

      cambiarColor(){
        const body=document.getElementsByTagName("*");

        const select=document.getElementById("selectColorFuente");
        const fontColor = select.options[select.selectedIndex].value        
        let i;
        for ( i = 0; i < body.length; i++){
          if (select=="Elegí un tamaño"){
            return false
          }
         body[i].style.color=fontColor;                   
        }
        window.localStorage.setItem('fontColor', fontColor)            
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


