let participantes = [
  {
    nome: "Kesia Holanda",
    email: "anakesiaholanda07@gmail.com",
    dataInscricao: new Date(2024, 3, 1, 10, 20),
    dataCheckIn: new Date(2024, 3, 5, 11, 25)
  },
  {
    nome: "Gabriel Porto",
    email: "gabrielposorio@gmail,com",
    dataInscricao: new Date(2024, 3, 1, 11, 50),
    dataCheckIn: null
  },
  {
    nome: "Fernanda Silva",
    email: "fernanda.silva@gmail.com",
    dataInscricao: new Date(2024, 3, 2, 8, 30),
    dataCheckIn: new Date(2024, 3, 5, 10, 45)
  },
  {
    nome: "Ricardo Oliveira",
    email: "ricardo.oliveira@outlook.com",
    dataInscricao: new Date(2024, 3, 2, 12, 15),
    dataCheckIn: new Date(2024, 3, 5, 11, 30)
  },
  {
    nome: "Amanda Souza",
    email: "amanda.souza@gmail.com",
    dataInscricao: new Date(2024, 3, 3, 9, 0),
    dataCheckIn: null
  },
  {
    nome: "Lucas Mendes",
    email: "lucas.mendes@icloud.com",
    dataInscricao: new Date(2024, 3, 3, 14, 30),
    dataCheckIn: new Date(2024, 3, 4, 16, 10)
  },
  {
    nome: "Camila Santos",
    email: "camila.santos@icloud.com",
    dataInscricao: new Date(2024, 3, 4, 11, 20),
    dataCheckIn: new Date(2024, 3, 5, 15, 40)
  },
  {
    nome: "Mateus Costa",
    email: "mateus.costa@gmail.com",
    dataInscricao: new Date(2024, 3, 4, 15, 45),
    dataCheckIn: null
  },
  {
    nome: "Juliana Oliveira",
    email: "juliana.oliveira@yahoo.com.br",
    dataInscricao: new Date(2024, 3, 5, 9, 10),
    dataCheckIn: null
  },
  {
    nome: "Rodrigo Almeida",
    email: "rodrigo.almeida@gmail.com",
    dataInscricao: new Date(2024, 3, 5, 14, 20),
    dataCheckIn: new Date(2024, 3, 5, 20, 15)
  }
];


const criarNovoParticpante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  let dataCheckIn = dayjs(Date.now()).to(participante
  .dataCheckIn)

  if(participante.dataCheckIn == null){
    dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
      >
        Confirmar check-in
      </button>
    `
  }
  
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br/>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

const atualizarLista = (participantes) => {
  let output = ""
  for(let participante of participantes){
    output = output + criarNovoParticpante(participante)
  }

  // substituir informação do HTML
  document
  .querySelector('tbody')
  .innerHTML = output
}

atualizarLista(participantes)

// chama a função e previne que a pagina não seja enviada
const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante já existe
  const participanteExiste = participantes.find(
    (p) => p.email == participante.email
  )

  if(participanteExiste){
    alert('Email já cadastrado!')
    return
  }

  // spread
  participantes = [participante, ...participantes]

  atualizarLista(participantes)

  // limpar o fomulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
  
}

const fazerCheckIn = (event) => {
  // confirmar se quer o check-in
  const mensagemConfirmacao = 'Tem certeza que deseja realizar o chek-in?'
  if(confirm(mensagemConfirmacao) == false){
    return
  }

  // encontrar o participante dentro da lista
  const participante = participantes.find(
    (p) => p.email == event.target.dataset.email
  )
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}