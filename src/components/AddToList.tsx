import React, { useState, FC } from 'react';
import { IState as Props } from '../App';

interface IProps {
    players: Props["players"]
    setPlayers: React.Dispatch<React.SetStateAction<Props["players"]>>
}
const AddToList: FC<IProps> = ({ players, setPlayers }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        country: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if (!input.name || !input.age) return
        setPlayers([
            ...players,
            {
                name: input.name,
                age: parseInt(input.age),
                img: input.img,
                country: input.country
            }
        ])

        setInput({
            name: "",
            age: "",
            img: "",
            country: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                className="AddToList-input"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                value={input.name}
            />
            <input
                type="text"
                className="AddToList-input"
                name="age"
                onChange={handleChange}
                placeholder="Age"
                value={input.age}
            />
            <input
                type="text"
                className="AddToList-input"
                name="img"
                onChange={handleChange}
                placeholder="Image Url"
                value={input.img}
            />
            <input
                type="text"
                className="AddToList-input"
                name="country"
                onChange={handleChange}
                placeholder="Country"
                value={input.country}
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList;










// import React, { FC, useState } from 'react'
// import { IState as Props } from "../App";

// interface IProps {
//     setPlayers: React.Dispatch<React.SetStateAction<Props["players"]>>
//     players: Props["players"]
// }

// const AddToList: FC<IProps> = ({ players, setPlayers }) => {

//     const [input, setInput] = useState({
//         name: "",
//         age: "",
//         country: "",
//         img: ""
//     })

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleClick = () => {
//         if (!input.name || !input.age) return

//         setPlayers([
//             ...players,
//             {
//                 name: input.name,
//                 age: parseInt(input.age),
//                 img: input.img,
//                 country: input.country
//             }
//         ]);

//         setInput({
//             name: "",
//             age: "",
//             img: "",
//             country: ""
//         })
//     }

//     return (
//         <div className="AddToList">
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 className="AddToList-input"
//                 name="name"
//                 value={input.name}
//                 placeholder="Name"
//             />
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 className="AddToList-input"
//                 name="age"
//                 value={input.age}
//                 placeholder="Age"
//             />
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 className="AddToList-input"
//                 name="img"
//                 value={input.img}
//                 placeholder="Image Url"
//             />
//             <input
//                 onChange={handleChange}
//                 className="AddToList-input"
//                 name="country"
//                 value={input.country}
//                 placeholder="Country"
//             />
//             <button
//                 onClick={handleClick}
//                 className="AddToList-btn"
//             >
//                 Add to List
//             </button>
//         </div>
//     )
// }

// export default AddToList