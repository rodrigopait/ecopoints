<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title color="primary">Detalle de {{ puntoVerde.nombre }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-button size="large">
            Editar
            <ion-icon slot="end" :icon="create" />
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col v-if="true">
          <ion-button @click="cambiarFavorito" size="large">
            {{ esFavorito ? "Eliminar favorito" : "Agregar Favorito" }}
            <ion-icon slot="end" :icon="star" />
          </ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col class="ion-text-center">
          <ion-text>
            <h2>Observaciones</h2>
          </ion-text>
          {{ puntoVerde.observaciones }}
        </ion-col>
      </ion-row>
      <!-- <ion-row>
        <star-rating :config="config"></star-rating>
      </ion-row> -->
    </ion-grid>
  </ion-content>
</template>

<script>
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/vue";
import { defineComponent } from "vue";
// import StarRating from "vue-dynamic-star-rating";

import { create, star } from "ionicons/icons";

export default defineComponent({
  name: "ModalPuntoVerde",
  setup() {
    return {
      create,
      star,
    };
  },
  data() {
    return {
      esFavorito: false,
    };
  },
  props: {
    puntoVerde: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    // Este booleano indica si se viene de la pagina de favoritos o del mapa,
    // para mostrar diferente
    desdeMapa: Boolean,
  },
  computed: {
    // esFavorito() {
    //   // ACA IRIA EL CHEQUEO DE SI EL USER TIENE AGREGADO ESTE PUNTO COMO FAVORITO
    //   return false;
    // },
  },
  methods: {
    cambiarFavorito() {
      // ACA Logica que cambia si es favorito en la DB
      this.esFavorito = !this.esFavorito;
    },
  },

  mounted() {
    const fontSize = window.localStorage.getItem("fontSize");
    const fontColor = window.localStorage.getItem("fontColor");
    const fontSpacing = window.localStorage.getItem("fontSpacing");
    const elems = document.getElementsByTagName("*");
    for (let i = 0; i < elems.length; i++) {
      elems[i].style.fontSize = fontSize;
      elems[i].style.color = fontColor;         
    }
     document.body.style.letterSpacing = fontSpacing;
  },
  components: { IonContent, IonHeader, IonTitle, IonToolbar },

});
</script>
