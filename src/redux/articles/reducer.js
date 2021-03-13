import { GET_ARTICLES_SUCCESS } from './types'

const initialState = {
 articles: [],
}
const handlersInfo = {
 [GET_ARTICLES_SUCCESS]: (state, action) => ({
  ...state,
  articles: action.payload,
 }),
}

export const ArticleseReducer = (
 state = initialState,
 action
) => {
 if (handlersInfo[action.type]) {
  return handlersInfo[action.type](state, action)
 }
 return state
}
