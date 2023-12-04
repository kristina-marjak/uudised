import { useLocation } from 'react-router-dom'

const Contact = () => {
    const Kontakt = {
        nimi: 'Kontakt Perekonnanimi',
        aadress: 'Tänav 38, Tallinn 11111, Eesti',
        telefon: '+372 55 555 555',
        meiliaadress: 'meil@aadress.ee'
    };

    return (
        <div className="contact-container">
            <h1>{Kontakt.nimi}</h1>
            <p><strong>Aadress:</strong> {Kontakt.aadress}</p>
            <p><strong>Telefon:</strong> {Kontakt.telefon}</p>
            <p><strong>Email:</strong> {Kontakt.meiliaadress}</p>
        </div>
    );
}
export default Contact;