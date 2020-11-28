
<template>
<div>
  <h1>{{this.properties.iconCaption}}</h1>
  <yandex-map
    :coords="coords"
    :zoom="10"
    @click="onClick" 
    @dragstart="getAddress" >
    <ymap-marker :coords="coords"
                  marker-id="123"
                  :properties="properties"
                  />
  </yandex-map></div>
</template>

<script>
import { loadYmap } from "vue-yandex-maps";
export default {
  data: () =>{ return {
    coords: [55.856365, 37.567337],
    properties: {
        iconCaption: ""
    },
  }},

  beforeUpdate() {
      this.getAddress()
  },
  
  methods: {
    onClick(e) {
      this.coords = e.get("coords");
    },
    getAddress(){
      const data = ymaps.geocode(this.coords).then(function (res) {
      return res.geoObjects.get(0).properties.getAll();
      })
      data.then(c => this.$set(this.properties, 'iconCaption', c.text) );
    }
  },
};
</script>

<style scoped>
.ymap-container{
  width: 100%;
  height: 600px;
}
</style>