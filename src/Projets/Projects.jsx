import './Projects.css'
import OpenLibraryHub from '.././assets/OpenLibraryHub.png'
import AnnyStore from '.././assets/annyStore.png'
import Blog from '.././assets/Blog.png'
import Mapa from '.././assets/Mapa.png'
import Pirambu from '.././assets/pirambu-innovation.png'
import Tablet from '.././assets/tablet.jpg'

const projetosArr = [
    {
        img: Tablet,
        titulo: 'Servidor Termux',
        texto: 'O projeto consiste na implementação de uma infraestrutura de servidor web utilizando um dispositivo Android reaproveitado como servidor de aplicações. A solução utiliza Termux como ambiente Linux, Python com Flask para disponibilização da API REST e SQLite para persistência dos dados. Para manter os processos ativos, foi utilizado tmux, enquanto o Cloudflare Tunnel permite a exposição segura da aplicação à internet sem a necessidade de IP público ou redirecionamento de portas. Também implementei inicialização automática, administração remota via SSH, atualização dinâmica do endpoint da API e mecanismos de cache HTTP para reduzir o consumo de recursos do dispositivo. O projeto explora técnicas de infraestrutura, redes e otimização para executar aplicações web em hardware com recursos limitados. Inclusive, todas as minhas APIs rodam nesse servidor',
        linkproj: 'https://bebel132.github.io/blog-web/pages/post/index.html?id=11&title=Novo%20projeto%2C%20ou%20melhor%2C%20servidor!&date=2026-07-24T14:24:53&creator=Emanuel',
    },
    {
        img: Pirambu,
        titulo: 'Pirambu Innovation',
        texto: 'O projeto Pirambu Innovation foi desenvolvido como uma plataforma web acadêmica para publicação e gerenciamento de conteúdos dinâmicos. O sistema conta com uma landing page pública e um painel administrativo para criação, edição, publicação e gerenciamento dos conteúdos, incluindo autenticação e controle de acesso. O frontend foi desenvolvido com HTML, CSS e JavaScript, enquanto o backend utiliza Flask em Python e uma API REST para comunicação com o banco de dados. Durante o desenvolvimento, também trabalhei com autenticação OAuth, migrações de banco de dados, deploy e versionamento utilizando Git e GitHub.',
        linkproj: 'https://pirambuweb.netlify.app',
        linkrepo: 'https://github.com/Bebel132/Pirambu-Innovation-web'
    },
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
    }
]

export const Projects = () => {
  return (
    <section>
        <div className="projects">
            <h1 className='titulo'>Projetos</h1>
            <div className="projetos-lista">
                {
                    projetosArr.map(projeto => (
                        <div className="projeto" key={projeto.titulo}>
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
                                    {projeto.linkrepo && (
                                        <a href={projeto.linkrepo} target='_blank'>
                                            <button className='repo'>&lt;/ Ver Repositório &gt;</button>
                                        </a>
                                    )}
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
