import React, { FC } from 'react';
import { IState as Props } from '../App';


interface IProps {
    players: Props["players"]
}
const List: FC<IProps> = ({ players }) => {
    const renderedList = (): JSX.Element[] => {
        return players.map(player => {
            return (
                <li className='List'>
                    <div className="List-header">
                        <img className='List-img' src={player.img} />
                        <h2>{player.name}</h2>
                    </div>
                    <p>{player.age}years old</p>
                    <p className='List-country'>{player.country}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderedList()}
        </ul>
    );
}

export default List;



