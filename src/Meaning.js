import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {

    console.log(props.meaning)

    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) 
            {
                return (
                    <div key="index">
                        Definition :
                        <p>
                            {definition.definition}
                        <br/>
                        Example : 
                        <em>{definition.example}</em>
                        <Synonyms synonyms={definition.synonyms}/>
                    </p>
                </div>
            );
            })}
        </div>
);
}