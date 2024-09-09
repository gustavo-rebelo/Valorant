let dados = [
    {
        titulo: "Brimstone",
        descricao: "Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.",
        funcao: "Controlador",
        link: "https://playvalorant.com/pt-br/agents/brimstone/"
    },
    {
        titulo: "Sage",
        descricao: "Uma curandeira que usa suas habilidades ancestrais para curar aliados e ressuscitar os mortos. Sua barreira de gelo e esfera de cura a tornam uma aliada indispensável em qualquer equipe.",
        funcao: "Sentinela",
        link: "https://playvalorant.com/pt-br/agents/sage/"
    },
    {
        titulo: "Raze",
        descricao: "Uma duelista explosiva que adora causar caos no campo de batalha. Suas habilidades, como as granadas de fragmentação e o pacote de bombas, a tornam uma força a ser considerada em qualquer confronto.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/raze/"
    },
    {
        titulo: "Reyna",
        descricao: "Uma duelista que se alimenta da morte de seus inimigos para curar a si mesma e aumentar suas habilidades. Sua agilidade e poder destrutivo a tornam uma força a ser temida.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/reyna/"
    },
    {
        titulo: "Omen",
        descricao: "Um controlador que usa as sombras para confundir e manipular seus inimigos. Seus teleportes e habilidades de cegueira o tornam um mestre da estratégia.",
        funcao: "Controlador",
        link: "https://playvalorant.com/pt-br/agents/omen/"
    },
    {
        titulo: "Jett",
        descricao: "Uma duelista ágil que domina o vento, permitindo que ela se mova pelo mapa com rapidez e precisão.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/jett/"
      },
      {
        titulo: "Phoenix",
        descricao: "Um duelista que usa o poder do fogo para se curar e criar oportunidades para seus aliados. Sua habilidade de conjurar chamas e criar paredes de fogo o torna um adversário imprevisível.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/phoenix/"
      },
      {
        titulo: "Sova",
        descricao: "Um sentinela russo que usa seu arco e flecha para rastrear inimigos e controlar o campo de batalha.",
        funcao: "Iniciador", // **Observação:** A função correta do Sova é "Iniciador", não "Sentinela"
        link: "https://playvalorant.com/pt-br/agents/sova/"
      },
      {
        titulo: "Viper",
        descricao: "Uma controladora que usa venenos tóxicos para controlar o campo de batalha e negar espaço aos inimigos.",
        funcao: "Controladora",
        link: "https://playvalorant.com/pt-br/agents/viper/"
      },
      {
        titulo: "Cypher",
        descricao: "Um sentinela astuto que usa armadilhas e câmeras para controlar o campo de batalha.",
        funcao: "Sentinela",
        link: "https://playvalorant.com/pt-br/agents/cypher/"
      },
      {
        titulo: "Killjoy",
        descricao: "Uma sentinela alemã que usa tecnologia para controlar o campo de batalha.",
        funcao: "Sentinela",
        link: "https://playvalorant.com/pt-br/agents/killjoy/"
      },
      {
        titulo: "Breach",
        descricao: "Um iniciador que usa habilidades de choque para desorientar e controlar o campo de batalha.",
        funcao: "Iniciador",
        link: "https://playvalorant.com/pt-br/agents/breach/"
      },
      {
        titulo: "Skye",
        descricao: "Uma duelista australiana que usa animais espirituais para explorar o campo de batalha e eliminar inimigos.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/skye/"
      },
      {
        titulo: "Yoru",
        descricao: "Um duelista japonês que usa ilusões e teleporte para confundir inimigos e ganhar vantagem.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/yoru/"
      },
      {
        titulo: "Astra",
        descricao: "Uma controladora que pode viajar para o plano astral para colocar estrelas que podem ser ativadas para controlar o campo de batalha.",
        funcao: "Controladora",
        link: "https://playvalorant.com/pt-br/agents/astra/"
      },
      {
        titulo: "Kay/o",
        descricao: "Um iniciador robótico que usa tecnologia para desorientar e controlar o campo de batalha.",
        funcao: "Iniciador",
        link: "https://playvalorant.com/pt-br/agents/kayo/"
      },
      {
        titulo: "Chamber",
        descricao: "Um sentinela francês que usa armas de precisão e armadilhas para controlar o campo de batalha.",
        funcao: "Sentinela",
        link: "https://playvalorant.com/pt-br/agents/chamber/"
      },
      {
        titulo: "Neon",
        descricao: "Uma duelista filipina que usa eletricidade para se mover rapidamente e causar dano.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/neon/"
      },
      {
        titulo: "Fade",
        descricao: "Uma iniciadora que usa seus sonhos para rastrear inimigos e desorientá-los.",
        funcao: "Iniciadora",
        link: "https://playvalorant.com/pt-br/agents/fade/"
      },
      {
        titulo: "Harbor",
        descricao: "Um controlador que usa água para controlar o campo de batalha e criar oportunidades para seus aliados.",
        funcao: "Controlador",
        link: "https://playvalorant.com/pt-br/agents/harbor/"
      },
      {
        titulo: "Gekko",
        descricao: "Um iniciador que usa seus animais de estimação robóticos para explorar e controlar o campo de batalha.",
        funcao: "Iniciador",
        link: "https://playvalorant.com/pt-br/agents/gekko/"
      },
      {
        titulo: "Deadlock",
        descricao: "Uma sentinela que usa tecnologia para controlar o campo de batalha e negar espaço aos inimigos.",
        funcao: "Sentinela",
        link: "https://playvalorant.com/pt-br/agents/deadlock/"
      },
      {
        titulo: "Iso",
        descricao: "Uma duelista que usa tecnologia para criar portões e teletransportar-se pelo campo de batalha.",
        funcao: "Duelista",
        link: "https://playvalorant.com/pt-br/agents/iso/"
      },
      {
        titulo: "Vyse",
        descricao: "Uma controladora que usa seus poderes de dragão para controlar o campo de batalha.",
        funcao: "Controladora",
        link: "https://playvalorant.com/pt-br/agents/vyse/"
      }
];