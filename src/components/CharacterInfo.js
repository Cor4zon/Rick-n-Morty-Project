import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import APIClient from "../services/APIClient";

import BigCard from "./BigCard/BigCard";

const CharacterInfo = () => {
    const [ character, setCharacter ] = useState({});
    const client = new APIClient();
    const { id } = useParams();

    useEffect(() => {
        client.fetchOneCharacter(id).then((result) => {
            setCharacter({...result.data});
            console.log(result.data);
        })
    }, [])

    return (
        <div>
            <h1>Character info</h1>
            <BigCard character={character} />
        </div>
    );
};

export default CharacterInfo;
