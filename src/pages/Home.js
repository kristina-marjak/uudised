import { useState, useEffect } from "react";
import StyledLink from "../components/StyledLink";
import { client } from "../App"

const Home = () => {
    const [uudised, setUudised] = useState([]);

    useEffect(() => {
        client.getEntries().then((response) => {
            console.log(response.items);
            setUudised(response.items);
        });
    }, []);

    return (
        <div className="uudiste-konteiner">
            <h1>GOOD NEWS</h1>

            {/* Olulisemad uudised */}
            <div className="uudiste-rivi">
                {uudised.slice(0, 2).map((uudis) => (
                    <StyledLink key={uudis.fields.id} to={`/news/${uudis.sys.id}`}>
                        <div className="uudis-kast">
                            <img
                                src={uudis.fields.image.fields.file.url}
                                alt={uudis.fields.image.fields.title}
                            />
                            <h2>{uudis.fields.title}</h2>
                        </div>
                    </StyledLink>
                ))}
            </div>

            {/* Mitte nii olulised uudised */}
            <div className="uudiste-rivi">
                {uudised.slice(2, 6).map((uudis) => (
                    <StyledLink key={uudis.fields.id} to={`/news/${uudis.sys.id}`}>
                        <div className="uudis-kast">
                            <img
                                src={uudis.fields.image.fields.file.url}
                                alt={uudis.fields.image.fields.title}
                            />
                            <h2>{uudis.fields.title}</h2>
                        </div>
                    </StyledLink>
                ))}
            </div>
        </div>
    );
};

export default Home;