import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState {
  players: {
    name: string
    age: number
    img: string
    country: string
  }[]
}

function App() {
  const [players, setPlayers] = useState<IState["players"]>([
    {
      name: "Lionel Messi",
      age: 35,
      img: "https://img.bleacherreport.net/img/images/photos/003/776/434/hi-res-dd0ead86aa219346a8cc94c50c8a458d_crop_exact.jpg?w=900&h=600&q=75",
      country: "Argentina"
    },
    {
      name: "Cristiano Ronaldo",
      age: 37,
      img: "https://medias.lequipe.fr/img-photo-jpg/soccer-football-euro-2020-qualifier-group-b-portugal-v-ukraine-estadio-da-luz-lisbon-portu/1500000001121452/0:82,2118:1493-3150-2363-75/3345c.jpg",
      country: "Portugal"
    },
    {
      name: "Neymar",
      age: 30,
      img: "https://www4.pictures.zimbio.com/gi/Brazil+v+Zambia+HVBEuhEks3Lx.jpg",
      country: "Brazil"
    },
    {
      name: "Sadio Mané",
      age: 30,
      img: "https://www.si.com/.image/t_share/MTg3MDY5OTk5OTY0MjM0NzYz/sadio-mane6.jpg",
      country: "Senegal"
    },
    {
      name: "Robert Lewandowski",
      age: 33,
      img: "https://bayernstrikes.com/wp-content/uploads/getty-images/2018/08/1239601920.jpeg",
      country: "Poland"
    },
    {
      name: "Virgil van Dijk",
      age: 31,
      img: "https://i2-prod.football.london/incoming/article17270758.ece/ALTERNATES/s1200c/0_GettyImages-1188067577.jpg",
      country: "Netherlands"
    },
    {
      name: "Kevin De Bruyne",
      age: 31,
      img: "https://resources.premierleague.com/premierleague/photo/2018/07/06/3e89d2f2-7949-4563-a31f-33b35f65e3d9/Kevin-De-Bruyne-Belgium-goal.png",
      country: "Belgium"
    },
    {
      name: "Riyad Mahrez",
      age: 31,
      img: "https://africa24.news/wp-content/uploads/2020/11/NINTCHDBPICT000505702248-e1573902549595.jpg",
      country: "Algeria"
    },
    {
      name: "Erling Haaland",
      age: 22,
      img: "https://pbs.twimg.com/media/E-te60SWYAQ1_Dx.jpg",
      country: "Norway"
    },
    {
      name: "Kylian Mbappé",
      age: 23,
      img: "https://tnimage.s3.hicloud.net.tw/photos/shares/AP/20180426/7b47a6aacc9f4589a1c7619e0f6f91c7.jpg",
      country: "France"
    }

  ]);
  return (
    <div className="App">
      <h1>World Cup Player Invites</h1>
      <List players={players} />
      <AddToList players={players} setPlayers={setPlayers} />
    </div>
  );
}

export default App;
