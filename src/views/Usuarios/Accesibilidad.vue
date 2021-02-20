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

        <p class="ion-margin">
          Separación de la fuente:
          <select id="selectSepararFuente" v-on:change="separarFuente()">
            <option>Elegí un tamaño</option>
            <option>0</option>
            <option>0.1</option>
            <option>0.2</option>
            <option>0.3</option>
            <option>0.4</option>
            <option>0.5</option>
          </select>
        </p>

        <ion-item>
        <ion-label>Separación de la fuente</ion-label>
        <ion-select id="selectSepararFuente" v-on:change="separarFuente()" placeholder="Elegí un tamaño">
          <ion-select-option value="0">0</ion-select-option>
          <ion-select-option value="0.1">0.1</ion-select-option>
          <ion-select-option value="0.2">0.2</ion-select-option>
          <ion-select-option value="0.1">0.1</ion-select-option>
           <ion-select-option value="0.2">0.2</ion-select-option>
        </ion-select>
      </ion-item>



        <p class="ion-margin">
          Tamaño de la fuente:
          <select id="selectTamañoFuente" v-on:change="tamañoFuente()">
            <option>Elegí un tamaño</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
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
            document.body.style.letterSpacing=select.options[select.selectedIndex].text+"em";
      },

      tamañoFuente() {
           let select = 0;
           select=document.getElementById("selectTamañoFuente");
           alert(select.options[select.selectedIndex].text+"em");
            //document.body.style.fontSize=select.options[select.selectedIndex].text+"em"; 
         //   document.body.style.color='#ffffff';
          //  alert(document.body.style.backgoundcolor='#ffffff');
           //const tamañoFuente= select.options[select.selectedIndex].text;
           //alert(tamañoFuente+"px");
          // alert(getComputedStyle(document.body).getPropertyValue('font-size'));  // tamaño actual de la fuente
          //document.documentElement.style.setProperty('--font-size', `${tamañoFuente * 0.9}`)
       
          //this.document.getElementsByTagName("h5").setAttribute("size","2");
         //  document.body.style.fontsize(85+'px');
         // document.body.style.fontsize=tamañoFuente+'px';
           //const x = document.getElementsByClassName("ion-text-center");
        // document.x[0].style.fontsize="60px";
       // document.getElementsByTagName("body")[0].style.fontsize=tamañoFuente+"px";
       // document.body.setAttribute('style', 'font-family:Arial !important');
         //document.body.style.color="#cf3c4f";
/*
          const card=document.getElementsByTagName("ion-content");
      
        const select=document.getElementById("selectTamañoFuente");
        let i;
        for ( i = 0; i < card.length; i++){
          if (select.options[select.selectedIndex].text=="Elegí un tamaño"){
            return false
          }
          card[i].style.fontSize=select.options[select.selectedIndex].text+"px";
      //    card[i].style.fontFamily="Arial";
          
        } */
    
      }

  },
};

</script>

