import { useEffect } from "react";

export default function Contact() {
    useEffect(function () {
        document.title = 'Contact';
    }, []);

    return (
        <section className="contact">
            <h1>Contact</h1>
            <p>you can contact me below</p>
            <ul>
                <li>WhatsApp: 089677451818</li>
                <li>Email: irfanrmdni209@gmail.com</li>
            </ul>
            <p>or you can see me on social media</p>
            <ul className="link">
                <li><a href="https://facebook.com/soseris">Facebook</a></li>
                <li><a href="https://instagram.com/irfanrmdnii">Instagram</a></li>
            </ul>
        </section>
    );
}