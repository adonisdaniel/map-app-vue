import { useMapStore, usePlacesStore } from "@/composables";
import mapboxgl from "mapbox-gl";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  name: "MapView",
  setup() {
    //

    const mapContainer = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {

      if(!mapContainer.value) throw new Error("mapContainer not exist");
      
      if(!userLocation.value) throw new Error("userLocation not exist");
      
      await Promise.resolve();

      const map = new mapboxgl.Map({
          container: mapContainer.value, // container ID
          style: 'mapbox://styles/mapbox/dark-v10', // style URL
          center: userLocation.value, // starting position [lng, lat]
          zoom: 15, // starting zoom
      });

      const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value).setHTML(`
        <h4>Aqui estoy</h4>
      `)

      const myLocationMarker = new mapboxgl.Marker({
        color: "#fa23bc"
      }).setLngLat(userLocation.value).setPopup(myLocationPopUp).addTo(map)

      setMap(map);
    }
    
    onMounted(() => {
      if (isUserLocationReady.value) return initMap();
    })
    
    watch(isUserLocationReady, (newVal) => {

      if(isUserLocationReady.value) initMap()
    })

    return {
      isUserLocationReady,
      mapContainer
    }
  }
})