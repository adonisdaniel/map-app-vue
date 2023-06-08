import { MutationTree } from "vuex";
import { PlacesState } from "./state";

const mutations: MutationTree<PlacesState> = {
  // someMutation(){}
  setLangLat(state: PlacesState, coords:GeolocationCoordinates) {
    console.log('coords', coords);
    state.userLocation = [coords.longitude,coords.latitude];
    state.isLoading = false
    
  }
}

export default mutations;