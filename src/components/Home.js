import React from 'react'
import Film from '../components/Film'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

const Home = () => {
const films = [
    {
      title: "Incepcja",
      imgPath: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSXP6V7OK5eoYWq3Ru4BSQnmtg5CaVq5y37F9KbA2tMAnO7Gz4",
      desc: "Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.",
      genre: "Science Fiction",
      grade: "9/10"
    },
    {
      title: "Warcraft: Początek",
      imgPath: "https://fwcdn.pl/fpo/49/99/334999/7739725.3.jpg",
      desc: "Pomiędzy rasami orków i ludzi wybucha krwawa wojna o terytorium.",
      genre: "Przygodowy",
      grade: "7/10"
    },
    {
      title: "Obecność",
      imgPath: "https://fwcdn.pl/fpo/71/00/627100/7557683.3.jpg",
      desc: "Słynna para badaczy zjawisk paranormalnych zostaje poproszona o pomoc rodzinie, którą terroryzuje potężny demon.",
      genre: "Horror",
      grade: "8/10"
    }
  ]

  return (
    <div className="main">
      <div className='navbar-logo'>
        <Logo />
        <Navbar />
      </div>
      <div className='film-section'>
        {films.map((film) => <Film imgPath={film.imgPath} title={film.title} descript={film.desc} genre={film.genre} grade={film.grade} />)}
      </div>
    </div>
  );
}
export default Home