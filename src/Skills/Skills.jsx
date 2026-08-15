import React, { useState } from 'react'
import './Skills.css'
import { Html5Plain, Css3Plain, TypescriptPlain, ReactOriginal, PhpPlain, NodejsPlain, CsharpPlain, FlaskOriginal, DjangoPlain, AzuresqldatabasePlain, AzureOriginal, LinuxPlain, GitPlain } from 'devicons-react';

const skillsArr = [
    {
        icone: <Html5Plain size="80"/>,
        titulo: 'HTML5',
        texto: 'Linguagem de marcação utilizada para estruturar páginas e aplicações web, organizando conteúdos como textos, imagens, formulários e elementos semânticos.',
        tipo: 'front'
    },
    {
        icone: <Css3Plain size="80"/>,
        titulo: 'CSS3',
        texto: 'Tecnologia utilizada para estilizar interfaces web, trabalhando com layouts, responsividade, animações, tipografia e adaptação para diferentes dispositivos.',
        tipo: 'front'
    },
    {
        icone: <TypescriptPlain size="80"/>,
        titulo: 'TypeScript',
        texto: 'Superset do JavaScript que adiciona tipagem estática, tornando o desenvolvimento de aplicações maiores mais seguro, organizado e previsível.',
        tipo: 'front'
    },
    {
        icone: <ReactOriginal size="80"/>,
        titulo: 'React',
        texto: 'Biblioteca para construção de interfaces baseada em componentes, utilizada no desenvolvimento de aplicações web modernas e escaláveis.',
        tipo: 'front'
    },
    {
        icone: <CsharpPlain size="80"/>,
        titulo: 'C#',
        texto: 'Linguagem da plataforma .NET utilizada no desenvolvimento de APIs e aplicações web, incluindo recursos como Entity Framework, Identity e OData.',
        tipo: 'back'
    },
    {
        icone: <FlaskOriginal size="80"/>,
        titulo: 'Flask',
        texto: 'Microframework Python utilizado principalmente na criação de APIs e aplicações web leves e flexíveis.',
        tipo: 'back'
    },
    {
        icone: <AzuresqldatabasePlain size="80"/>,
        titulo: 'SQL e Bancos de Dados',
        texto: 'Experiência com bancos relacionais e consultas SQL, trabalhando com SQL Server, PostgreSQL, MySQL e SQLite.',
        tipo: 'back'
    },
    {
        icone: <LinuxPlain size="80"/>,
        titulo: 'Linux',
        texto: 'Utilização de ambientes Linux para configuração, execução e gerenciamento de aplicações e serviços, incluindo servidores de baixo consumo.',
        tipo: 'devops'
    },
    {
        icone: <AzureOriginal size="80"/>,
        titulo: 'Azure DevOps',
        texto: 'Plataforma utilizada para gerenciamento de projetos, repositórios, versionamento de código e automação de processos de desenvolvimento e entrega.',
        tipo: 'devops'
    },
    {
        icone: <GitPlain size="80"/>,
        titulo: 'Git',
        texto: 'Sistema de controle de versão utilizado para gerenciamento de código, histórico de alterações e colaboração no desenvolvimento de projetos.',
        tipo: 'devops'
    }
]

export const Skills = () => {
    const [skillType, setSkillType] = useState("front")

    const toggleSkill = (type) => {
        setSkillType(type)

        document.querySelectorAll('.skillBtn').forEach(e => {
            e.classList.remove("select")
        })

        document
            .querySelector(`[data-type="${type}"]`)
            ?.classList.add("select")
    }

    return (
    <section>
        <div className="skills">
            <h1 className='titulo'>Skills</h1>
            <div className="buttons">
                <button
                    className="skillBtn select"
                    data-type="front"
                    onClick={() => toggleSkill("front")}
                >
                    Front-end
                </button>

                <button
                    className="skillBtn"
                    data-type="back"
                    onClick={() => toggleSkill("back")}
                >
                    Back-end
                </button>

                <button
                    className="skillBtn"
                    data-type="devops"
                    onClick={() => toggleSkill("devops")}
                >
                    DevOps
                </button>
            </div>
            <div className="skills-list">
                {
                    skillsArr.filter(skill => skill.tipo == skillType).map(skill => (
                        <div className="skill" key={skill.titulo}>
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
