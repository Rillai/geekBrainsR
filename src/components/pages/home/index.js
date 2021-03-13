import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../../../redux/articles/actions'

export const Home = () => {
 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getArticles())
 }, [])

 const articles = useSelector(
  (state) => state.articlesPage.articles
 )
 const renderArticles = useCallback((article, i) => {
  return (
   <div key={i}>
    <br />
    <strong>{article.quote}</strong>
    <p>{article.author}</p>
    <p>{article.series}</p>
   </div>
  )
 }, [])

 return <div>{articles.map(renderArticles)}</div>
}
