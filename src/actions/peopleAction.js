import axios from 'axios'

// == Types
export const PEOPLE_DETAIL_REQUEST = 'PRODUCT_DETAIL_REQUEST'
export const PEOPLE_DETAIL_SUCCESS = 'PRODUCT_DETAIL_SUCCESS'
export const PEOPLE_DETAIL_FAIL = 'PEOPLE_DETAIL_FAIL'

// == Creators
export const detailPeople = () => async (dispatch) => {
  try {
    dispatch({ type: PEOPLE_DETAIL_REQUEST })

    const { data } = await axios.get('https://swapi.dev/api/people/1/')

    dispatch({
      type: PEOPLE_DETAIL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PEOPLE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
