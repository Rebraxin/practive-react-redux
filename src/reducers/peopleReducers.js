import { PEOPLE_DETAIL_FAIL, PEOPLE_DETAIL_REQUEST, PEOPLE_DETAIL_SUCCESS } from "../actions/peopleAction"

export const peopleDetailReducer = (state = { details: [] }, action) => {
  switch (action.type) {
    case PEOPLE_DETAIL_REQUEST:
      return { loading: true, details: [] }
    case PEOPLE_DETAIL_SUCCESS:
      return { loading: false, details: action.payload }
    case PEOPLE_DETAIL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}