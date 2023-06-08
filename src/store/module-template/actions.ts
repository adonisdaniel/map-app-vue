import { ActionTree } from "vuex"
import { ExampleStateInterface } from "./state"
import { StateInterface } from ".."

const actions: ActionTree<ExampleStateInterface,StateInterface> = {
  someAction(){}
}

export default actions