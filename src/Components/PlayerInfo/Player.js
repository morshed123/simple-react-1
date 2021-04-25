import React from 'react';

const Player = (props) => {
    const {name, salary, image} = props.player;
    const imageStyle = {height: '200px',width:'250px'}
    const playerStyle = {border:" 5px solid black", margin:"10px" , padding:"10px"}
    const handleAddPlayer = props.handleAddPlayer;
    console.log(props.player);

    return (
        <div style={playerStyle}>
            <img style={imageStyle} src={image} alt=""/>
            <h4>Player Name: {name}</h4>
            <h4>Salary : ${salary}</h4>
            <button onClick={() => handleAddPlayer(props.player.salary)}>Add Your Player</button>
        </div>
    );
};

export default Player;