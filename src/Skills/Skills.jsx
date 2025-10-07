import React, { useState } from 'react'
import './Skills.css'
import { Html5Plain, Css3Plain, JavascriptPlain, ReactOriginal, PhpPlain, NodejsPlain, CsharpPlain, FlaskOriginal, DjangoPlain, AzuresqldatabasePlain } from 'devicons-react';

const skillsArr = [
    {
        icone: <Html5Plain size="80"/>,
        titulo: 'HTML5',
        texto: 'A espinha dorsal de qualquer página web. Ele estrutura o conteúdo, definindo títulos, parágrafos, links, imagens e muito mais.',
        tipo: 'front'
    },
    {
        icone: <Css3Plain size="80"/>,
        titulo: 'CSS3',
        texto: 'Responsável pela aparência da página. Controla layout, cores, fontes, animações e outros aspectos visuais.',
        tipo: 'front'
    },
    {
        icone: <JavascriptPlain size="80"/>,
        titulo: 'JavaScript',
        texto: 'A linguagem que adiciona interatividade às páginas web. Permite criar animações, validar formulários e atualizar conteúdo dinamicamente.',
        tipo: 'front'
    },
    {
        icone: <ReactOriginal size="80"/>,
        titulo: 'React',
        texto: 'Uma biblioteca JavaScript para construir interfaces de usuário reativas e escaláveis. Muito usada em aplicações SPA (Single Page Applications).',
        tipo: 'front'
    },
        {
        icone: <PhpPlain size="80"/>,
        titulo: 'PHP',
        texto: 'Linguagem de script do lado do servidor, amplamente usada para criar sites dinâmicos e sistemas como WordPress.',
        tipo: 'back'
    },
    {
        icone: <NodejsPlain size="80"/>,
        titulo: 'NodeJS',
        texto: 'Ambiente de execução JavaScript fora do navegador. Ideal para construir APIs, servidores web e aplicações em tempo real.',
        tipo: 'back'
    },
    {
        icone: <CsharpPlain size="80"/>,
        titulo: 'C#',
        texto: 'Linguagem da Microsoft usada para desenvolver aplicações desktop, web e jogos, especialmente com a plataforma .NET.',
        tipo: 'back'
    },
    {
        icone: <FlaskOriginal size="80"/>,
        titulo: 'Flask',
        texto: 'Um microframework Python para desenvolvimento web. Simples e flexível, ideal para APIs e aplicações menores.',
        tipo: 'back'
    },
    {
        icone: <DjangoPlain size="80"/>,
        titulo: 'Django',
        texto: 'Framework Python completo para desenvolvimento web. Oferece segurança, escalabilidade e rapidez na criação de aplicações robustas.',
        tipo: 'back'
    },
    {
        icone: <AzuresqldatabasePlain size="80"/>,
        titulo: 'Banco de Dados',
        texto: 'Um banco de dados relacional organiza dados em tabelas conectadas por chaves, permitindo consultas eficientes e integridade dos dados usando SQL.',
        tipo: 'back'
    }
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
