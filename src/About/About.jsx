import React from 'react'
import './About.css'
import eu from '.././assets/eu.svg'
import LaptopIcon from '@mui/icons-material/Laptop';

export const About = () => {
  return (
    <section>
        <div className="about">
            <div className="about-texts">
              <LaptopIcon fontSize='large'/><br /><br />
              <h1 className="titulo">Emanuel Ferreira</h1>
              <h2 className="subtitulo">Desenvolvedor Web (Front/Back-end)</h2>
              <p className='texto'>Sou um jovem estudante apaixonado pela área de tecnologia, com formação em TI e cursando Sistemas e Mídias Digitais! Comecei minha jornada em programação focando em tecnologias front-end e, atualmente, estou me aventurando no desenvolvimento back-end, com o objetivo de me tornar um desenvolvedor full-stack!</p>
            </div>
            <img src={eu} alt="" />
        </div>
    </section>
  )
}
