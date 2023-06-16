<template>
  <button class="btn btn-primary" @click="onMyLocationClick" v-if="isBtnReady">
    Ir a my ubicacion
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from '@/composables';
import { computed, defineComponent } from 'vue';


export default defineComponent({
  name: "MyLoactionBtn",
  setup() {

    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();

    return {

      isBtnReady: computed<boolean>(() => isUserLocationReady.value && isMapReady),

      onMyLocationClick: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14
        })
      }

    }
  }
})

</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>