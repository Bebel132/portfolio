import React from 'react'
import './Projects.css'
import jscrud from '.././assets/jscrud.jpg'
import adopet from '.././assets/adopet.png'
import OpenLibraryHub from '.././assets/OpenLibraryHub.png'
import AlunosAPI from '.././assets/AlunosAPI.png'

const projetosArr = [
    {
        img: jscrud,
        titulo: 'CRUD Simples',
        texto: 'Projeto desenvolvido com o objetivo de criar uma aplicação CRUD (Create, Read, Update, Delete) simples, focada em operações básicas de manipulação de dados. Utilizando arrays para armazenar e gerenciar as informações, e explorando a ferramenta de localStorage dos navegadores para persistência de dados.',
        linkproj: 'https://bebel132.github.io/CRUD/',
        linkrepo: 'https://github.com/Bebel132/CRUD'
    },
    {
        img: adopet,
        titulo: 'Adopet',
        texto: 'O projeto Adopet é um desafio da Alura que visa treinar conceitos de CSS e responsividade, com o objetivo de aperfeiçoar técnicas de CSS ao mesmo tempo que constrói uma interface bonita e agradável.',
        linkproj: 'https://bebel132.github.io/adopet/',
        linkrepo: 'https://github.com/Bebel132/adopet'
    },
    {
        img: OpenLibraryHub,
        titulo: 'OpenLibraryHub',
        texto: 'O projeto OpenLibraryHub foi desenvolvido como conclusão de curso de TI, focando na virtualização da biblioteca da escola. Construído inteiramente com JavaScript, ele gerencia a geração de conteúdo na tela e toda a interatividade do sistema. Além de proporcionar uma solução prática para a biblioteca, o projeto serviu como uma excelente oportunidade para entender a arquitetura de um projeto e práticas de versionamento.',
        linkproj: 'https://1ukidev.github.io/OpenLibraryHub/',
        linkrepo: 'https://github.com/1ukidev/OpenLibraryHub'
    },
    {
        img: AlunosAPI,
        titulo: 'AlunosAPI',
        texto: 'O projeto AlunosAPI foi desenvolvido com o objetivo de estudar os conceitos de uma REST API, por isso foi escrito uma documentação sobre todo o processo de desenvolvimento para ser utilizado como guia posteriormente. Ele implementa todas as operações do CRUD (Create, Read, Update, Delete) e é estruturado utilizando C# com o framework .NET. Este projeto serve como uma excelente prática para entender a construção e funcionamento de APIs RESTful, além de explorar as capacidades do .NET para desenvolvimento backend.',
        linkproj: 'https://wood-drip-4cf.notion.site/API-React-e3fbc7770dc44ebfbacc66c81f6631a8',
        linkrepo: 'https://github.com/Bebel132/AlunosAPI'
    },
]

export const Projects = () => {
  return (
    <section>
        <div className="projects">
            <h1 className='titulo'>Projetos</h1>
            <div className="projetos-lista">
                {
                    projetosArr.map(projeto => (
                        <div className="projeto">
                            <img src={projeto.img} alt="" />
                            <div className="projeto-desc">
                                <h2 className="subtitulo">{projeto.titulo}</h2>
                                <p className="texto">{projeto.texto}</p>
                                <div className="btns">
                                    {
                                        
                                    }
                                    <a href={projeto.linkproj} target='_blank'>
                                        <button>Ver Projeto</button>
                                    </a>
                                    <a href={projeto.linkrepo} target='_blank'>
                                    <button className='repo'>&lt;/ Ver Repositório &gt;</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a className='texto' href="https://github.com/Bebel132?tab=repositories" target='_blank'>Ver outros projetos =&gt;</a>
        </div> 
    </section>
  )
}
