import React, { useState } from 'react'
import './Skills.css'
import { Html5Plain, Css3Plain, TypescriptPlain, ReactOriginal, PhpPlain, JavascriptPlain, MaterialuiPlain, CsharpPlain, FlaskOriginal, AzuresqldatabasePlain, AzureOriginal, LinuxPlain, GitPlain } from 'devicons-react';

const skillsArr = [
    // --- FRONTEND ---
    {
        icone: <Html5Plain size="80"/>,
        titulo: 'HTML5',
        texto: 'Linguagem de marcação utilizada para estruturar páginas e aplicações web, organizando conteúdos de forma semântica e acessível.',
        tipo: 'front'
    },
    {
        icone: <Css3Plain size="80"/>,
        titulo: 'CSS3',
        texto: 'Estilização de interfaces web, trabalhando com layouts, responsividade e animações, em conjunto com frameworks como Bootstrap e Tailwind CSS.',
        tipo: 'front'
    },
    {
        icone: <JavascriptPlain size="80"/>,
        titulo: 'JavaScript',
        texto: 'Linguagem essencial para o desenvolvimento web, garantindo interatividade e construção de lógicas dinâmicas no lado do cliente.',
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
        icone: <MaterialuiPlain size="80"/>,
        titulo: 'Material UI',
        texto: 'Biblioteca de componentes React utilizada para a implementação de interfaces de usuário consistentes e responsivas em plataformas corporativas.',
        tipo: 'front'
    },

    // --- BACKEND ---
    {
        icone: <CsharpPlain size="80"/>,
        titulo: 'ASP.NET Core / C#',
        texto: 'Desenvolvimento de APIs REST, microsserviços e arquitetura modular, integrando recursos como Entity Framework Core e sistemas de autenticação.',
        tipo: 'back'
    },
    {
        icone: <FlaskOriginal size="80"/>,
        titulo: 'Flask',
        texto: 'Microframework Python utilizado principalmente na criação de APIs e aplicações web leves e flexíveis.',
        tipo: 'back'
    },
    {
        icone: <PhpPlain size="80"/>,
        titulo: 'PHP',
        texto: 'Linguagem utilizada no desenvolvimento e suporte de portais institucionais e sistemas web.',
        tipo: 'back'
    },
    {
        icone: <AzuresqldatabasePlain size="80"/>,
        titulo: 'Bancos de Dados',
        texto: 'Modelagem e gestão de dados relacionais com sólida experiência em PostgreSQL, SQL Server, MySQL e SQLite.',
        tipo: 'back'
    },

    // --- DEVOPS & CLOUD ---
    {
        icone: <AzureOriginal size="80"/>,
        titulo: 'Microsoft Azure',
        texto: 'Integração de serviços em nuvem corporativos, incluindo Entra ID (SSO), Microsoft Graph API, Azure Blob Storage e fluxos OAuth 2.0 + PKCE.',
        tipo: 'devops'
    },
    {
        icone: <LinuxPlain size="80"/>,
        titulo: 'Linux',
        texto: 'Utilização de ambientes Linux para configuração, execução e gerenciamento de aplicações e serviços, incluindo servidores de baixo consumo.',
        tipo: 'devops'
    },
    {
        icone: <GitPlain size="80"/>,
        titulo: 'Git e GitHub',
        texto: 'Sistemas de controle de versão e hospedagem utilizados para gerenciamento de código, histórico de alterações e colaboração em projetos.',
        tipo: 'devops'
    }
];

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
