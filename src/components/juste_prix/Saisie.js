'use client';
import { useEffect, useState } from "react"

export default function Saisie() {
    const [number, setNumber] = useState("");
    const [randomNumber, setRandomNumber] = useState(0);
    const [test, setTest] = useState("");

    const [startTime, setStarTime] = useState(new Date);
    const [endTime, setEndTime] = useState(null);
    const [elapsedTime, setTime] = useState(null);
    const [compteur, setCompteur] = useState(1);
    const [textNbTentative, setTextTentative] = useState("");
    const [textTime, setTextTime] = useState("");
    useEffect(() => {
        setRandomNumber(aleatoire);

    }, []);


    function aleatoire() {
        let x = Math.round(Math.random() * 100);


        return x;
    }


    function restart() {
        setNumber("");
        setRandomNumber(aleatoire);
        setTest("");
        setStarTime(new Date);
        setEndTime(null);
        setTime(null);
        setCompteur(1);
        setTextTentative("");
        setTextTime("");

    }



    function win() {
        setCompteur((compt) => compt + 1);

        if (randomNumber > number) {
            console.log(number);
            setTest(" ");
            setTest("plus grand");


        }
        else if (randomNumber < number) {
            console.log(number);

            setTest("plus petit ");


        }
        else if (randomNumber == number) {
            console.log(number);
            setTest("Trouvé ");
            setEndTime(new Date());
            let test = (endTime - startTime) / 1000;
            setTime(test);
            setTextTentative("Nombres de tentatives:" + compteur);


        }
    }
    useEffect(() => {

        if (endTime) {
            let time = (endTime - startTime) / 1000;
            setTime(time);
            setTextTime("Temps écoulé: " + time + " secondes");

        }
    }, [endTime, startTime]);



    return (
        <>

            <h1>Juste Prix  </h1>
            <div className="Container-Body">
                <div className="Container">

                    <p className="time">{textTime}</p>


                    <span>Veuillez choisir un nombre en 0 et 100:</span>
                    <input type="number" value={number} name="number" onChange={(e) => {
                        setNumber(e.target.value)

                    }}></input>

                    <button onClick={win} className="win">Valider</button>

                    <button onClick={restart} className="restart">Restart</button>

                  

                    <p>{test}</p>

                    <p>{textNbTentative}</p>





                </div>

            </div>


        </>


    )

}