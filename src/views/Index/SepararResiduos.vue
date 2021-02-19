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
          <ion-button color="success"   @click="cambiarTema()"
                >Cambiar tema</ion-button
              >
   

        <h4 class="ion-margin">Color de la fuente:
          <select id="valor2" v-on:change="cambiarColor()">
            <option>Elegí un color</option>
            <option value="#ffffff">Blanco</option>        
            <option value="#737373">Gris</option> 
            <option value="#5083BA">Celeste</option>
            <option value="#C93434">Rojo</option>        
          </select>
        </h4>  

        <h4 class="ion-margin">Tamaño de la fuente:
          <select id="valor" v-on:change="CambioTexto()">
            <option>Elegí un tamaño</option>
            <option>10</option>        
            <option>20</option> 
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </h4>  

        <h4 class="ion-margin">Separacion de la fuente:
          <select id="valorFuente" v-on:change="separarFuente()">
            <option>Elegí un tamaño</option>
            <option>0</option>  
            <option>0.1</option>        
            <option>0.2</option> 
            <option>0.3</option>
            <option>0.4</option>
            <option>0.5</option>
          </select>
        </h4>  

       <ion-item id="tema">
          <ion-label>Tamaño de la fuente</ion-label>
          <ion-select :interface-options="customAlertOptions" interface="alert" id="valor" v-on:change="CambioTexto()" multiple="false" placeholder="Selecciona un tamaño">
            <ion-select-option :value="10">10</ion-select-option>
            <ion-select-option :value="20">20</ion-select-option>
            <ion-select-option :value="30">30</ion-select-option> 
            <ion-select-option :value="40">40</ion-select-option> 
            <ion-select-option :value="50">50</ion-select-option> 
          </ion-select>
        </ion-item>

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

<script lang="js">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/vue";

export default {
  name: "SepararResiduos",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage,  IonSelect, IonSelectOption,  IonButton, },

   methods: {

      CambioTexto(){
        const card=document.getElementsByTagName("ion-card-content");
        const h5=document.getElementsByTagName("h5");
        const select=document.getElementById("valor");
        let i;
        for ( i = 0; i < card.length; i++){
          if (select.options[select.selectedIndex].text=="Elegí un tamaño"){
            return false
          }
          card[i].style.fontSize=select.options[select.selectedIndex].text+"px";
          card[i].style.fontFamily="Arial";
          
        }
        for ( i = 0; i < h5.length; i++){
          if (select.options[select.selectedIndex].text=="Elegí un tamaño"){
            return false
          }
          h5[i].style.fontSize=select.options[select.selectedIndex].text+"px";
          h5[i].style.fontFamily="Arial";
          
        }
    }, 

    cambiarColor(){
        //  document.style.backgroundColor = "#0000FF";
         //  document.getElementsByTagName("ion-card").style.webkitFilter = "#0000FF";
        const card=document.getElementsByTagName("ion-card-content");
        const h5=document.getElementsByTagName("h5");
        const select=document.getElementById("valor2");
        let i;
        for ( i = 0; i < card.length; i++){
          if (select.options[select.selectedIndex].text=="Elegí un color"){
            return false
          }
          card[i].style.color=select.options[select.selectedIndex].value;
        //  card[i].style.fontFamily="Arial";
          
        }
        for ( i = 0; i < h5.length; i++){
          if (select.options[select.selectedIndex].text=="Elegí un color"){
            return false
          }
          h5[i].style.color=select.options[select.selectedIndex].value;
        //  h5[i].style.fontFamily="Arial";        
        }
    },
     
      separarFuente() {
            let select = 0;
             select=document.getElementById("valorFuente");           
            document.body.style.letterSpacing=select.options[select.selectedIndex].text+"em";
      },

  },
};
</script>

