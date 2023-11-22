import React from 'react'
import './Home.css';
import gta from './Assets/Rockstar.png'
import twd from './Assets/twd.png'
import psn from './Assets/psn.png'
function Home() {
  return (
    <div>
        <div className='titulo'>
          <h1>Bem-vindo</h1>
        </div>
        <div className='corpo'>
          <h1 className='titulos'>Confira abaixo!</h1>
          <div className='texto'>
          <h2 className='corpot'>A Rockstar Games já estaria dando grandes passos para conceber o aguardado GTA 6. Nesta semana, a empresa atualizou o design de seu site oficial, dias antes do trailer de revelação do game ser divulgado.
No momento, a página conta com novos menus, função de pesquisa aprimorada, opções adicionais de navegação, logomarca reformulada e integração com a plataforma Social Club. Além disso, imagens e links aparecem em layouts minimalistas. Confira abaixo:</h2>
          <img className='imagens'src={gta} alt='GTA 6'></img>
          <h1 style={{color: 'black'}} className='titulos'>Pior jogo do ano?</h1>
          <h2 className='corpot'>The Walking Dead: Destinies foi lançado na sexta-feira, dia 17 de novembro e está dando o que falar. Assim como Lord of The Rings: Gollum e Skull Island: Rise of Kong, os comentários não são elogios: o título se tornou meme por causa de sua péssima qualidade de produção.
Diversos vídeos de algumas das pessoas que realmente compraram o game mostram vários problemas. Desde qualidade de animações, bugs ou simplesmente a apresentação de baixíssima qualidade, o jogo de quase R$ 250 decepcionou usuários.</h2>
          <img className='imagens'src={twd} alt='GTA 6'></img>
          <h1 className='titulos'>Aproveite os ultimos dias!</h1>
          <h2 className='corpot'>No momento, a página conta com novos menus, função de pesquisa aprimorada, opções adicionais de navegação, logomarca reformulada e integração com a plataforma Social Club. Além disso, imagens e links aparecem em layouts minimalistas. Confira abaixo:
Atenção, assinantes do PS Plus Extra e Deluxe! Os próximos jogos que sairão do Catálogo de Jogos já foram revelados. A lista tem 11 títulos, então, fiquem ligados para terminá-los antes do dia 19 de dezembro – conforme mostrado na PSN dos EUA.
As datas de expiração ainda não foram divulgadas pela Sony mas alguns jogos já foram citados. Confira abaixo:
Caladrius Blaze
Damascus Gear: Operation Tokyo HD Edition
El Hijo – A Wild West Tale
Foreclosed
Friday the 13th
Legends of Ethernal
Shadow of Mordor
Shadow of War
The Escapists 2
Yakuza 6
Yakuza: Like a Dragon</h2>
          <img className='imagens'src={psn} alt='PSPLUS'></img>
          </div>
        </div>
    </div>
  )
}

export default Home