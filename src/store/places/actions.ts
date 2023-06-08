import { ActionTree } from "vuex"
import { PlacesState } from "./state"
import { StateInterface } from ".."

const actions: ActionTree<PlacesState,StateInterface> = {
  // someAction(){}
  getInitialLocation({commit}) {
    // TODO: loading
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit("setLangLat", coords),
      (error) => {
        console.log('error', error);
        throw new Error("No geolocation");
        
        
      }
    )
  }
}

export default actions