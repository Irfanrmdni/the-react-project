import React, { useEffect } from "react";

export default function Home() {

    useEffect(function () {
        document.title = 'Home';
    }, []);

    return (
        <section className="home">
            <h1>Welcome to My Website</h1>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, maxime.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat esse, necessitatibus quae ad error mollitia laboriosam quas dicta maxime?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis fugiat consequatur fugit! Facere cumque illum tempore quisquam ullam eius pariatur necessitatibus maxime, quod, molestiae dolores eligendi sunt maiores officia recusandae.</p>
        </section>
    );
}