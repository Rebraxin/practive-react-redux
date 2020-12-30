import axios from 'axios'

// == Types
export const PEOPLE_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PEOPLE_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PEOPLE_LIST_FAIL = 'PEOPLE_LIST_FAIL'

// == Creators
export const listPeoples = () => async (dispatch) => {
  try {
    dispatch({ type: PEOPLE_LIST_REQUEST })

    const { data } = await axios.get('https://swapi.dev/api/people/1/')

    dispatch({
      type: PEOPLE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PEOPLE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
