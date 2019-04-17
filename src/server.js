const express = require("express");
const mongoose = require("mongoose");
//const path = require('path');
//const cors = require('cors');

//const app = express();
//aqui eu defino que todo mundo pode acessar minha aplicação de qualquer dominio

//https://github.com/johnpaulwynow/backend-box.git
//git init
//git add README.md
//git commit -m "first commit"
//git remote add origin https://github.com/johnpaulwynow/backend-box.git
//git push -u origin master
// criar arquivo .gitkeep 
//

//git add .    //toda a aplicação  
//git status para ver o que ainda não foi adicionado novo no repositorio
//git config --global user.email "stevewolfjp@hotmail.com"
//git config --global user.name "Your Name"

//app.use(cors());

//requisições do tipo http e socket oks
//mongoose.connect("mongodb+srv://john:cyberpunk@cluster0-dhda7.mongodb.net/test?retryWrites=true",
//{
//   useNewUrlParser: true
//}
//);
//passando o io para a app  middle global next()passa para o restro da aplicação

//app.use(express.json());
//app.use(express.urlencoded({extended:true}));
//deixar estatico sempre que precisar acessar os arquivo diretamente , passa o express pra ajudar nas rotas e o path para os diretorios
//criando o redirecionamento para acesso aos arquivos
//app.use("/snow-page", express.static(path.resolve(__dirname, "..","tmp")));

//app.get("/", (req,res)=>{
//  res.render()

//});
//app.use(require("./routes"));

//variavel de ambiente para executar a porta de forma que o heroku possa acessar a porta

 //acessa a porta que estiver liberado ou a porta 3333 || 8080

//add cors para determinar quem pode acessar a aplicação yarn add cors


/*
instalando heroku na aplicação via npm
npm install -g heroku


heroku login

resolvendo problemas 

npm install -g lodash

rm -rf node_modules
npm install

*/

//problema com repositorio alvo do git
//git remote rm origin
//git remote add origin git@github.com:username/myapp.git


//rm -f ./.git/index.lock
//
//cd .git
//del index.lock

///
let app = express();

const path = __dirname + '/views/';

app.get('/', (req,res)=>{
  res.sendFile(path + 'index.html');

});

var port = process.env.PORT || 8080;

console.log("API rodando na porta: " + port);
app.listen(port);