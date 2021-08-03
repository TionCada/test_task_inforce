import React from "react";
import s from "./Players.module.css"
import Player from "./Player/Player";
import profilePhoto from "../../assets/images/profilePhoto.png";

interface PlayerInterface {
    position: number,
    profileImage: typeof profilePhoto,
    username: string,
    points: number,
    id: string
}

interface Props {
    playersList: PlayerInterface[]
}
const Players = (props : Props) => {

    console.log(props.playersList)
    let playersListJSX = props.playersList.map((playerInfo) => <Player position={playerInfo.position} profileImage={playerInfo.profileImage}
                                                                       username={playerInfo.username} points={playerInfo.points}/>)
    return (
        <div className={s.container}>
            {(playersListJSX.length > 0) ? playersListJSX : <p className={s.message}>There is no players :(</p>}
        </div>
    );
}

export default Players;