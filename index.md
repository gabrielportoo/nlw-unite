fronteditor.dev/nlw-unite

# HTML

*Hypertext*
-Hyper link, sendo assim um hiper texto
*Markup*
- Tag
- Atribitos

*Language*

Para alterar a data usamos o site dayjs, que contem várias formas de padronizar o visual. Colocamos no HTML seguindo esse raciocinio Pluguins -> Loading plugin in the browser -> i18n -> Loading locale in the browser -> trocamos a linguagem de chines para pt-br

# CSS
Cascading Style Sheet
```css
body {
  background-color: #121214;
  color: white;
}
```

# JavaScript
```js
- Começou apresentando os comentarios // 
e falando como vai ser utilizado variaveis, tipos de dados e função

- Variaveis
const mensagem = 'Oi, tudo bem ?' //pode ser com crase tambem

- Tipos de dados
  number
  string

- Função
alert(mensagem)

// objeto javascript
const participante = {
  nome: "Kesia Holanda",
  email: "anakesiaholanda07@gmail.com",
  dataInscricao: new Date(2024, 3, 01, 10, 20),
  dataCheckIn: new Date(2024, 3, 05, 09, 25)
}

// array
let participantes = [
  {
    nome: "Kesia Holanda",
    email: "anakesiaholanda07@gmail.com",
    dataInscricao: new Date(2024, 3, 01, 10, 20),
    dataCheckIn: new Date(2024, 3, 05, 09, 25)
  },
]

// estrutura de repetição - loop
  for(let participante of participantes){
    // faça alguma coisa aqui
    // enquanto tiver participantes nessa lista
  }

// Para alterar a data usamos o site dayjs, que contem várias formas de padronizar o visual. Colocamos no HTML
```