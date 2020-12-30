import { PEOPLE_LIST_FAIL, PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS } from "../actions/peopleAction"

export const peopleListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PEOPLE_LIST_REQUEST:
      return { loading: true, peoples: [] }
    case PEOPLE_LIST_SUCCESS:
      return { loading: false, peoples: action.paylaod }
    case PEOPLE_LIST_FAIL:
      return { loading: false, error: action.paylaod }
    default:
      return state
  }
}