import ArticleItem from '../components/ArticleItem'
import ArticleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div className={ArticleStyles.grid}>
            {articles.map((article, index) => (
               <ArticleItem key={index} article={article} />
            ))}
        </div>
    )
}

export default ArticleList
