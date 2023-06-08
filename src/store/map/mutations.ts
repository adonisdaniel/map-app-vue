import { MutationTree } from "vuex";
import { MapState } from "./state";
import mapboxgl from "mapbox-gl";

const mutations: MutationTree<MapState> = {
  // someMutation(){}
  setMap(state, map: mapboxgl.Map) {
    state.map = map;
  }
}

export default mutations;