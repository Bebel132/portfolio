import React, { useState } from 'react'
import './Skills.css'
import { Html5Plain, Css3Plain, JavascriptPlain, ReactOriginal, PhpPlain, NodejsPlain, CsharpPlain, AzuresqldatabasePlain } from 'devicons-react';

const skillsArr = [
    {
        icone: <Html5Plain color='#007EA7' size="80"/>,
        titulo: 'HTML5',
        texto: 'A espinha dorsal de qualquer página web. Ele estrutura o conteúdo, definindo títulos, parágrafos, links, imagens, etc.',
        tipo: 'front'
    },
    {
        icone: <Css3Plain color='#007EA7' size="80"/>,
        titulo: 'CSS3',
        texto: 'O que faz sua página web parecer bonita. Ele controla o layout, cores, fontes e outros aspectos visuais.',
        tipo: 'front'
    },
    {
        icone: <JavascriptPlain color='#007EA7' size="80"/>,
        titulo: 'JavaScript',
        texto: 'A linguagem de programação que adiciona interatividade às páginas web. Coisas como animações, formulários e conteúdo dinâmicos',
        tipo: 'front'
    },
    {
        icone: <ReactOriginal color='#007EA7' size="80"/>,
        titulo: 'React',
        texto: 'Uma biblioteca de JavaScript para construir interfaces de usuário. Extremamente popular para criar aplicações web modernas e responsivas.',
        tipo: 'front'
    },
    {
        icone: <PhpPlain color='#007EA7' size="80"/>,
        titulo: 'PHP',
        texto: 'Uma linguagem de script do lado do servidor, utilizada principalmente para desenvolver sites dinâmicos e aplicações web.',
        tipo: 'back'
    },
    {
        icone: <NodejsPlain color='#007EA7' size="80"/>,
        titulo: 'NodeJS',
        texto:'Um ambiente de execução JavaScript que permite rodar código JS fora do navegador, geralmente usado para construir backends de aplicações web.',
        tipo: 'back'
    },
    {
        icone: <CsharpPlain color='#007EA7' size="80"/>,
        titulo: 'C#',
        texto:'Uma linguagem de programação desenvolvida pela Microsoft, muito usada em desenvolvimento de aplicativos desktop, web e jogos, especialmente com a plataforma .NET.',
        tipo: 'back'
    },
    {
        icone: <AzuresqldatabasePlain color='#007EA7' size="80"/>,
        titulo: 'Banco de Dados',
        texto:'Um banco de dados relacional organiza dados em tabelas conectadas por chaves, permitindo consultas eficientes e integridade dos dados usando SQL.',
        tipo: 'back'
    },
]

export const Skills = () => {
    const [skillType, setSkillType] = useState("front")

    const toggleSkill = () => {
        setSkillType(skillType == 'front' ? 'back':'front')
        document.querySelectorAll('.skillBtn').forEach(e => {
            e.classList.toggle("select")
        })
    }

    return (
    <section>
        <div className="skills">
            <h1 className='titulo'>Skills</h1>
            <div className="buttons">
                <button className='skillBtn select' onClick={toggleSkill}>Front-End</button>
                <button className='skillBtn' onClick={toggleSkill}>Back-End</button>
            </div>
            <div className="skills-list">
                {
                    skillsArr.filter(skill => skill.tipo == skillType).map(skill => (
                        <div className="skill">
                            {skill.icone}
                            <h2 className="subtitulo">{skill.titulo}</h2>
                            <div className="skillText">
                                <p className="texto">{skill.texto}</p>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
    )
}
