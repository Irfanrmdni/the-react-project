import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        document.title = 'Blog';

        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();
            setArticles(response);
            setLoading(false);
        }

        getArticles();
    }, []);

    return (
        <section className="blog">
            <h1>Blog Page</h1>

            {loading ? <i>loading articles...</i> : <div>
                {articles.map(function (art) {
                    return <article key={art.id}>
                        <h2><Link to={`/blog/${art.id}`} >{art.title}</Link></h2>
                        <time>{new Date(art.publishedAt).toLocaleDateString()}</time>
                    </article>
                })}
            </div>}

        </section>
    );
}