import { useEffect } from "react";

export default function About() {

    useEffect(function () {
        document.title = 'About';
    }, []);

    return (
        <section className="about">
            <h1>Hallo my name irfan ramdani i am a front end web developer and i am from indonesian</h1>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, mollitia.</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore possimus deserunt iste adipisci illo earum optio nemo voluptates? Debitis laborum dicta ipsam atque similique laudantium ut unde mollitia molestiae sequi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid minus ut cum, sit praesentium excepturi quam reiciendis? Amet.</p>
        </section>
    );
}