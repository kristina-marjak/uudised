import React from 'react';
import { Link } from 'react-router-dom';

const uudised = [
    {
        id: 1,
        pealkiri: 'Kulla hind on tõusnud ajalooliselt kõrgeimale tasemele',
        sisu: 'Kulla hind tõusis esmaspäeval ajalooliselt kõrgeimale tasemele. Põhjusteks peetakse nõrgenenud dollarit ja investorite uskumust, et keskpangad hakkavad varsti intressimäärasid langetama.Esmaspäeval maksis üks troiunts kulda 2111 dollarit, mis on ajalooliselt kõrgeim hind. Eelmine rekord oli püstitatud 2020. aasta augustis, kui kulla hinnaks oli 2 072,49 dollarit troiuntsi kohta.Siiski ei püsinud kulla hind ajaloolise kõrgtaseme juures kaua ning langes tagasi 2 064 dollarini troiuntsi kohta. Üks troiunts on ligikaudu 31,19 grammi.2020. aasta kulla hinnatipu põhjus oli koroonapandeemia, mis sundis investoreid otsima turvalisemat varaklassi oma säästude paigutamiseks. Kulla hind pöras tõusule eelmise aasta lõpus, kui keskpangad hakkasid ostma kulda. Lisaks panustasid kulla hinnatõusu geopoliitilised pinged seoses Venemaa sõjaga Ukraina vastu. See lisanõudlus aitas väärismetalli hinnal kasvada vaatamata samal ajal tõusnud intressimääradele. Tavaliselt langeb kulla hind koos intressimäärade tõusuga, sest erinevalt väärtpaberitest ei kaasne kulda investeerimisega intressitulu. Nüüd tõuseb kulla hind veelgi, sest inflatsioon on USA-s langenud ja investorid eeldavad, et föderaalreserv hakkab intressimäärasid varsti langetama. Samuti nõrgenes viimase kuu jooksul dollari kurss mitme teise olulise valuuta, kaasa arvatud euro suhtes.',
        pilt: 'https://i.err.ee/smartcrop?type=optimize&width=1072&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2023%2F12%2F04%2F2172436h2c88.jpg'
    },
    {
        id: 2,
        pealkiri: 'Kliimakonverentsi juhi sõnul peab maailm jätkama nafta ja gaasi kasutamist',
        sisu: 'ÜRO kliimatippkohtumise COP28 president sultan Al Jaber väitis, et pole olemas teaduslikku alust, mis viitaks, et fossiilkütuste kasutamise järkjärguline lõpetamine on vajalik selleks, et saavutada Pariisi kokkuleppe sihid. Tema sõnul viiks fossiilkütuste järkjärguline kaotamine maailma tagasi kiviaega. Kliima soojenemise piiramine 1,5 kraadini võeti eesmärgiks juba 2015. aasta Pariisi kliimakonverentsil. Rohkem kui 100 riiki toetab juba fossiilkütuste kasutamise järkjärgulist lõpetamist. Sultan saab aga asjast teistmoodi aru. Al Jaber tegi oma vastuolulised kommentaarid 21. novembril, kui vastas  ÜRO kliimamuutuste endise eriesindaja Mary Robinsoni küsimustele, vahendas The Guardian. "Me oleme kriisis, mis kahjustab naisi ja lapsi rohkem kui ükski teine kriis. See on tingitud sellest, et me pole veel võtnud endale kohustust loobuda järk-järgult fossiilkütuste kasutamisest. See on otsus, mille COP28 võib teha, ja kuna olete Adnoci juht, saate selle otsuse usaldusväärsel moel vastu võtta," rääkis Robinson. "Ma nõustusin tulema sellele koosolekule, et pidada maha täiskasvanud inimeste vestlus. Ma ei liitu mingil moel ärevaks tegeva aruteluga. Pole olemas teadust, mis ütleks, et fossiilkütuste  järkjärguline kaotamine on see, mis saavutab 1,5 kraadi," vastas Al Jaber. Robinson rääkis siis, et luges selle kohta, et Adnoc jätkab fossiilkütustesse investeeringute tegemist. Sultan vastas, et Robinson loeb meediat, mis on kallutatud ja sisaldab valeinformatsiooni. Ta väitis, et fossiilkütuste järkjärgulise kaotamise korral võib maailm tagasi libiseda kiviaega.',
        pilt: 'https://i.err.ee/smartcrop?type=optimize&width=1072&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2023%2F12%2F04%2F2172025hf22f.jpg'
    },
    {
        id: 3,
        pealkiri: 'Marek Tamm: rahvuslikud ja keelelised kitsendused vaesestavad ajalugu',
        sisu: 'Eesti ajalookirjutust kammitseb nii rahvuslik eelhäälestus kui ka inimeste vähesus, leiab hiljuti 50. sünnipäeva tähistanud ajaloolane Marek Tamm. Samas tuleks tema sõnul kodumaise ajaloo uurimise piire nihutades vältida võõrastest kontekstidest pärit probleeme ja teemasid.',
        pilt: 'https://i.err.ee/smartcrop?type=optimize&width=1072&aspectratio=16%3A10&url=https%3A%2F%2Fs.err.ee%2Fphoto%2Fcrop%2F2023%2F12%2F04%2F2172118h5cee.jpg'
    }
];

const Home = () => {
    return (
        <div className="uudiste-konteiner">
            <h1>Viimased uudised</h1>
            <div className="uudised-list">
                {uudised.map((uudis) => (
                    <div key={uudis.id} className="uudis-card">
                        <img src={uudis.pilt} alt={uudis.pealkiri} />
                        <h2>
                        <Link to={`/news/${uudis.id}`} state={uudis}>{uudis.pealkiri}</Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};





export default Home;
