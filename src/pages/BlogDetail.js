import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {

    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {

        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            const response = await request.json();

            if (!request.ok) {
                return setNotFound(true);
            }
            document.title = response.title;
            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params]);

    if (notFound) {
        return <h1 className="not-found">Article tidak ditemukan...</h1>;
    }

    return (
        <section className="blog-detail">
            {loading ? (<i>loading article...</i>) : (
                <article>
                    <h1>{article.title}</h1>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img src={article.imageUrl} alt={article.title} />
                    <p>{article.summary}</p>
                    <p>Source : <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
                </article>
            )}
        </section>
    );
}