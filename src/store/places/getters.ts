import { GetterTree } from "vuex"
import { StateInterface } from ".."
import { PlacesState } from "./state"

const getters:GetterTree<PlacesState,StateInterface> = {
  loading(state) {
    return state.isLoading
  },
  isUserLocationReady(state) {
    return !!state.userLocation
  }
}

export default getters