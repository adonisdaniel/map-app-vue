import { GetterTree } from "vuex"
import { StateInterface } from ".."
import { MapState } from "./state"

const getters:GetterTree<MapState,StateInterface> = {
  // someGetter(){}
  isMapReady(state) {
    return !!state.map
  }
}

export default getters