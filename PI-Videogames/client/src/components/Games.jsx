import React from 'react';
import Gamecard from './GameCard';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Games (){

    return (
        <div>
            <h3>Aca van las cards de Game</h3>
            <Gamecard />
        </div>
    )
}