var express = require('express');
var router = express.Router();
var produtosDAO = require('../src/models/dao/produtosDAO');
const cheerio = require('cheerio');
const axios = require('axios');
const urlpai = 'https://www.paodeacucar.com';
mongoose.connect('mongodb+srv://sophiamello05:Euamosushi2024@sophia.sfgfycr.mongodb.net/supermercado?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
  console.log('Conexão funcionando!')
})
.catch(error => {
  console.log('Deu problema!' + error)
});

function salvandodados(dt) {
  const novodado = new blog({
      titulo: dt.titulo,
      linkimg: dt.linkimg,
      price: dt.price,
  })
  blog.find({ 'titulo': dt.titulo }, function (err, otitulo) {
      if (err) throw (err);
      if (otitulo.length === 0) {
          novodado
              .save();
          console.log('Dados NÃO CADASTRADO!')
      } else {
          console.log('Dado JÁ CADASTRADO!');
      }
  });

}

function extraidados(link) {
  axios.get(link)
      .then(resp => {
          const dadoshtml = resp.data;
          const $ = cheerio.load(dadoshtml);
          const titulo = $('h1').text();
          const price = $('p').text();
          const linkimg = $('img').attr('src');

          const dados = { titulo, price,linkimg}

          //console.log(dados);
          salvandodados(dados);
      });
};

const links = axios.get(urlpai)
  .then(resp => {
      const dadoshtml = resp.data;
      const $ = cheerio.load(dadoshtml);
      const dados = []
      $('a[class="hyperlinkstyles__Link-j02w35-0 hbKsSa"]').each((i, e) => {
          const link = $(e).attr('href');
          //console.log(link)
          dados.push(link)
      });
      //console.log(dados);
      return dados
  });

async function main() {
  const lnks = await links;
  lnks.map((i, e) => {
      extraidados(i);
  })
};


module.exports = router;