import { PEOPLE_LIST_FAIL, PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS } from "../actions/peopleAction"

export const peopleListReducer = (state = { peoples: [] }, action) => {
  switch (action.type) {
    case PEOPLE_LIST_REQUEST:
      return { loading: true, peoples: [] }
    case PEOPLE_LIST_SUCCESS:
      return { loading: false, peoples: action.payload }
    case PEOPLE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}