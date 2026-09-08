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
              <h2 className="subtitulo">Desenvolvedor Web</h2>
              <p className='texto'>Sou um desenvolvedor apaixonado por tecnologia, com formação técnica em Informática e cursando Sistemas e Mídias Digitais na UFC. Comecei minha jornada focado no front-end e, hoje, atuo de ponta a ponta no ciclo de desenvolvimento. Construo desde interfaces modernas e responsivas até integrações sólidas no back-end, sempre priorizando boas práticas e arquitetura segura de software.</p>
            </div>
            <img src={eu} alt="" />
        </div>
    </section>
  )
}
