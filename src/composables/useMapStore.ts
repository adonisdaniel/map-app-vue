import { StateInterface } from "@/store";
import mapboxgl from "mapbox-gl";
import { computed } from "vue";
import { useStore } from "vuex"

export const useMapStore = () => {

  const store = useStore<StateInterface>();

  return {
    map: computed(() => store.state.map.map),
    distance: computed(() => store.state.map.distance),
    duration: computed(() => store.state.map.duration),
    // getters 
    isMapReady: computed(() => store.getters["map/isMapReady"]),
    // mutations
    setMap: (map: mapboxgl.Map) => store.commit("map/setMap",map)
    // actions
  }
}