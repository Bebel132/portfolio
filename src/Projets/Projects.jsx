import './Projects.css'
import OpenLibraryHub from '.././assets/OpenLibraryHub.png'
import AnnyStore from '.././assets/annyStore.png'
import Blog from '.././assets/Blog.png'
import Mapa from '.././assets/Mapa.png'

const projetosArr = [
    {
        img: Blog,
        titulo: 'Blog',
        texto: 'O projeto Blog foi desenvolvido com o objetivo de criar uma aplicação nos moldes de um CMS, implementando todas as operações CRUD (Create, Read, Update, Delete). Utilizei HTML, CSS e JavaScript no frontend, enquanto o backend foi construído com Flask em Python. Além da lógica de autenticação e gerenciamento de posts, também trabalhei no deploy da API e da aplicação web, garantindo sua hospedagem e funcionamento online.',
        linkproj: 'https://bebel132.github.io/blog-web/',
        linkrepo: 'https://github.com/Bebel132/blog-web'
    },
    {
        img: Mapa,
        titulo: 'Mapa Web',
        texto: 'O projeto Mapa Web foi criado para explorar técnicas de web scraping e visualização interativa de dados. A aplicação apresenta informações sobre o acesso à internet no Brasil, extraídas de fontes públicas e exibidas de forma dinâmica. O frontend foi desenvolvido com HTML, CSS e JavaScript, enquanto o backend utiliza Flask para processar e servir os dados. Também realizei o deploy da API e da aplicação, tornando o sistema acessível via web.',
        linkproj: 'https://bebel132.github.io/mapa-web/',
        linkrepo: 'https://github.com/Bebel132/mapa-web'
    },
    {
        img: OpenLibraryHub,
        titulo: 'OpenLibraryHub',
        texto: 'O projeto OpenLibraryHub foi desenvolvido como conclusão de curso de TI, focando na virtualização da biblioteca da escola. Construído inteiramente com JavaScript, ele gerencia a geração de conteúdo na tela e toda a interatividade do sistema. Além de proporcionar uma solução prática para a biblioteca, o projeto serviu como uma excelente oportunidade para entender a arquitetura de um projeto e práticas de versionamento.',
        linkproj: 'https://1ukidev.github.io/OpenLibraryHub/',
        linkrepo: 'https://github.com/1ukidev/OpenLibraryHub'
    },
    {
        img: AnnyStore,
        titulo: "Anny's Store",
        texto: 'O projeto AnnyStore foi desenvolvido com o objetivo de estudar vários conceitos de uma REST API e como consumir ela. O projeto funciona como uma lojinha online, onde tem as operações de login e cadastro para autenticação via cookies, ações de adicionar e remover do carrinho, além de uma página para visualização dos produtos contendo paginações e filtros. A API implementa todas as operações CRUD e é estruturado em C# com o framework .NET. Este projeto serve como uma excelente prática para entender a construção de uma API e o consumo dela por uma aplicação React.',
        linkrepo: 'https://github.com/Bebel132/anny-s-store'
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
                                    {projeto.linkproj && (
                                        <a href={projeto.linkproj} target='_blank'>
                                            <button>Ver Projeto</button>
                                        </a>
                                    )}
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
