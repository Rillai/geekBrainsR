import {
 GET_ARTICLES_REQUEST,
 GET_ARTICLES_SUCCESS,
 GET_ARTICLES_FAILURE,
} from './types'

export const getArticlesRequest = () => ({
 type: GET_ARTICLES_REQUEST,
})

export const getArticlesSuccess = (data) => ({
 type: GET_ARTICLES_SUCCESS,
 payload: data,
})

export const getArticlesFailure = (err) => ({
 type: GET_ARTICLES_FAILURE,
 payload: err,
})

export const getArticles = () => async (dispatch) => {
 try {
  const res = await fetch(
   'https://www.breakingbadapi.com/api/quotes/'
  )
  const response = await res.json()
  dispatch(getArticlesSuccess(response))
 } catch (err) {
  console.log(err)
 }
}
