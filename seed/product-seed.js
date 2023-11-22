var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sophiamello05:Euamosushi2024@sophia.sfgfycr.mongodb.net/supermercado?retryWrites=true&w=majority');
var products = [
    new Product({
        imagePath: '/images/medalhao file mignon.webp',
        title: 'Medalhão De Filé Mignon Bovino Resfriado 500g Bandeiras',
        price: 39.99
    }),
    new Product({
        imagePath: '/images/Carne moida de acem.webp',
        title: 'Carne Moída de Acém Resfriada Qualitá 500G',
        price: 49.90
    }),
    new Product({
        imagePath: '/images/carne moida patinho.webp',
        title: 'Carne Moída De Patinho QDO Resfriada Qualitá 500G',
        price: 29.90
    }),
    new Product({
        imagePath: '/images/Bife ancho.webp',
        title: 'Bife Ancho Filé De Costela Bassi Resfriado 1,5Kg',
        price: 82.35
    }),
    new Product({
        imagePath: '/images/contra file.webp',
        title: 'Contra Filé Bandeja Qualitá 500g',
        price: 29.90
    }),
    new Product({
        imagePath: '/images/maminha bovina.webp',
        title: 'Maminha Bovina Resfriada Bandeiras 1,2Kg',
        price: 59.60
    }),
    new Product({
        imagePath: '/images/maminha.webp',
        title: 'Maminha Bovina Extra Limpa Resfriada BASSI 1,188kg',
        price: 50.99
    }),
    new Product({
        imagePath: '/images/Tira de costela.webp',
        title: 'Tira de Costela Suína Congelada Sadia 800g',
        price: 15.12
    }),
    new Product({
        imagePath: '/images/Fraldinha.webp',
        title: 'Fralda estância 92 resfriada 1,1k',
        price: 59.90
    }),
    new Product({
        imagePath: '/images/carnemoidatraseiro.webp',
        title: 'Carne Moída Traseiro QDO Qualitá 500G',
        price: 29.90
    }),
    new Product({
        imagePath: '/images/linguicasuina.webp',
        title: 'Linguiça Suína Defumada Enrolada Perdigão 500g',
        price: 24.90
    }),
    new Product({
        imagePath: '/images/presunto fatiado.webp',
        title: 'Presunto Cozido Fatiado Seara 180g',
        price: 9.90
    }),
    new Product({
        imagePath: '/images/Seara.jpg',
        title: 'Sobrecoxa congelada 1kg Seara',
        price: 12.90
    }),
    new Product({
        imagePath: '/images/coxa.jpg',
        title: 'Coxa congelada 1kg Sadia',
        price: 14.90
    }),
    new Product({
        imagePath: '/images/Peitodefrango.png',
        title: 'Peito de frango defumado 150g Seara',
        price: 12
    }),
    new Product({
        imagePath: '/images/file.png',
        title: 'Filé de Peito de Frango Resfriado Temperado Sadia Fácil Pacote 700g',
        price: 18.90
    }),
    new Product({
        imagePath: '/images/frangodesfiado.jpg',
        title: 'Peito de Frango Cozido Congelado Desfiado Sadia Na Receita Pacote 400g',
        price: 17.90
    }),
    new Product({
        imagePath: '/images/peito de peru fatiado.jpg',
        title: 'Peito de Peru Defumado Fatiado Sadia Soltíssimo Bandeja 200g',
        price: 16.79
    }),
    new Product({
        imagePath: '/images/File de peito frango.png',
        title: 'Filé De Peito Frango Perdigão 1kg',
        price: 19.99
    }),
    new Product({
        imagePath: '/images/peru.jpg',
        title: 'Peru Temperado Congelado SADIA 4,320kg',
        price: 69.90
    }),
    new Product({
        imagePath: '/images/coxinha de asas.jpg',
        title: 'Coxinha Asa de Frango IQF Seara 1k',
        price: 19.90
    }),
    new Product({
        imagePath: '/images/integralParmalat.webp',
        title: 'Leite UHT Integral Parmalat Garrafa 1 Litro',
        price: 4.99
    }),
    new Product({
        imagePath: '/images/LeiteDesnatadoPira.webp',
        title: 'Leite Desnatado Piracanjuba 1L',
        price: 4.59
    }),
    new Product({
        imagePath: '/images/Leiteempó.webp',
        title: 'NINHO Levinho Semi Desnatado Forti+ Lata 350g',
        price: 21.90
    }),
    new Product({
        imagePath: '/images/LeitemPóMolico.webp',
        title: 'Leite em Pó MOLICO Desnatado 280g',
        price: 17.99
    }),
    new Product({
        imagePath: '/images/LeiteNinho.webp',
        title: 'Leite NINHO Integral 1L ',
        price: 6.50
    }),
    new Product({
        imagePath: '/images/LeitePiracanjuba.webp',
        title: 'Leite UHT Integral Piracanjuba Caixa com tampa 1L',
        price: 4.50
    }),
    new Product({
        imagePath: '/images/CompostoLacteo.webp',
        title: 'Composto Lácteo NESLAC COMFOR 800g',
        price: 63.99
    }),
    new Product({
        imagePath: '/images/manteigapre.webp',
        title: 'Manteiga Extra Com Sal President Gastronomique Pote 200g',
        price: 13.90
    }),
    new Product({
        imagePath: '/images/requeijaoVigor.webp',
        title: 'Requeijão Cremoso Tradicional VIGOR Copo 200g',
        price: 8.59
    }),
    new Product({
        imagePath: '/images/catupiry.webp',
        title: 'Requeijão Cremoso Tradicional Catupiry Copo 200g',
        price: 8.90
    }),
    new Product({
        imagePath: '/images/danonefrutasver.webp',
        title: 'Iogurte Grego Danone Frutas Vermelhas 90g',
        price: 17.99
    }),
    new Product({
        imagePath: '/images/danonemorango.webp',
        title: 'Iogurte Parcialmente Desnatado Morango Danone Garrafa 1,25kg',
        price: 15.40
    }),
    new Product({
        imagePath: '/images/danoninho.webp',
        title: 'Danoninho Petit Suisse Morango, Banana e Maçã-Verde 320g 8 unidades',
        price: 9.19
    }),
    new Product({
        imagePath: '/images/iogurteGregoVigor.webp',
        title: 'Iogurte Grego Tradicional Vigor Pote 90g',
        price: 3.50
    }),
    new Product({
        imagePath: '/images/yakult.webp',
        title: 'Leite Fermentado Desnatado Yakult 40 Light 480g com 6 Unidades',
        price: 13.79
    }),
    new Product({
        imagePath: '/images/queijominas.webp',
        title: 'Queijo Minas Frescal Fazenda Bela Vista 400g',
        price: 23.50
    }),
    new Product({
        imagePath: '/images/queijomussarelapresi.webp',
        title: 'Queijo Mussarela President Fatiado 150g',
        price: 10.90
    }),
    new Product({
        imagePath: '/images/quejioprato.webp',
        title: 'Queijo Prato President Fatiado 150g',
        price: 10.90

    }),
    new Product({
        imagePath: '/images/quejomussarelaQuali.webp',
        title: 'Queijo Mussarela Qualitá Fatiado 150g',
        price: 8.90
    }),
    new Product({
        imagePath: '/images/coca1,5.webp',
        title: 'Refrigerante Coca-Cola Sem Açúcar PET 1,5L',
        price: 6.99
    }),
    new Product({
        imagePath: '/images/citrus.webp',
        title: 'Refrigerante Schweppes Sabor Citrus Leve em Açúcares LATA 350ML',
        price: 4.15
    }),
    new Product({
        imagePath: '/images/CocaZero200ml.webp',
        title: 'Refrigerante Coca-Cola Sem Açúcar LATA 220ML',
        price: 2.79
    }),
    new Product({
        imagePath: '/images/FantaUva220ml.webp',
        title: 'Refrigerante Fanta Sabor Uva LATA 350ML',
        price: 3.25
    }),
    new Product({
        imagePath: '/images/Guaran350ml.webp',
        title: 'Refrigerante Guaraná Antarctica Sem Açúcar Lata 350ML',
        price: 2.99
    }),
    new Product({
        imagePath: '/images/Sprite2l.webp',
        title: 'Refrigerante Sprite Sabor Limão Sem Açúcar PET 2L',
        price: 8.69
    }),
    new Product({
        imagePath: '/images/monster.webp',
        title: 'Energético Monster Energy Green 473ml',
        price: 8.59
    }),
    new Product({
        imagePath: '/images/redBull.webp',
        title: 'Energético Sem Açúcar Red Bull Energy Drink Sugarfree 250 ml',
        price: 8.89

    }),
    new Product({
        imagePath: '/images/aguagas.webp',
        title: 'Água Mineral com Gás MINALBA Garrafa 1,5 Litros',
        price: 3.45
    }),
    new Product({
        imagePath: '/images/MinalbaGarrafao.webp',
        title: 'Água Mineral sem Gás MINALBA Garrafão 5 Litros',
        price: 11.90
    }),
    new Product({
        imagePath: '/images/AguasemGasCristal.webp',
        title: 'Água Crystal Sem Gás PET 1,5L',
        price: 3.25
    }),
    new Product({
        imagePath: '/images/cháMatteLimao.webp',
        title: 'Chá Matte Leão Sabor Limão PET 1,5L',
        price: 7.35
    }),
    new Product({
        imagePath: '/images/kapoMaracuja.webp',
        title: 'Suco Del Valle Kapo Sabor Maracujá TP 200ML',
        price: 2.60

    }),
    new Product({
        imagePath: '/images/kapoUva.webp',
        title: 'Suco Del Valle Kapo Sabor Uva TP 200M',
        price: 2.60
    }),
    new Product({
        imagePath: '/images/KeroCocoagua.webp',
        title: 'Água de Coco Esterilizada Kero Coco Caixa 1l',
        price: 9.59

    }),
    new Product({
        imagePath: '/images/laranja.webp',
        title: 'Suco Integral Laranja Natural One Ambiente Garrafa 1,5l',
        price: 14.29
    }),
    new Product({
        imagePath: '/images/sucoConcentrada.webp',
        title: 'Suco Concentrado AURORA Integral de Uva Garrafa 1,5 Litros',
        price: 17.90

    }),
    new Product({
        imagePath: '/images/sucouva.webp',
        title: 'Suco Uva e Maçã Natural One Ambiente Garrafa 1,5l',
        price: 14.90
    }),
    new Product({
        imagePath: '/images/alface.webp',
        title: 'Alface Crespa Naturalmente Fresca Qualitá',
        price: 5.99
    }),
    new Product({
        imagePath: '/images/banana.webp',
        title: 'Banana Maçã 600g',
        price: 8.90

    }),
    new Product({
        imagePath: '/images/chuchu.webp',
        title: 'Chuchu 600g',
        price: 2.35
    }),
    new Product({
        imagePath: '/images/macamonica.webp',
        title: 'Maçã TURMA DA MÔNICA Pacote 1kg',
        price: 16.90

    }),
    new Product({
        imagePath: '/images/mamao.webp',
        title: 'Mamão Papaya Golden 600g',
        price: 7.60
    }),
    new Product({
        imagePath: '/images/manga.webp',
        title: 'Manga Tommy 500g',
        price: 5.99

    }),
    new Product({
        imagePath: '/images/millhoverde.webp',
        title: 'Milho Verde QUALITÁ Bandeja 700g',
        price: 6.12
    }),
    new Product({
        imagePath: '/images/pepinos.webp',
        title: 'Pepino Japonês A Granel 300g',
        price: 2.90

    }),
    new Product({
        imagePath: '/images/tomate.webp',
        title: 'Tomate 500G',
        price: 5.90
    }),
    new Product({
        imagePath: '/images/uvaescura.webp',
        title: 'Uva Vitória Sem Semente QUALITÁ 500g',
        price: 16.69
    }),
    new Product({
        imagePath: '/images/uvasclaras.webp',
        title: 'Uva Clara sem Semente Qualitá 500g',
        price: 15.69

    }),
    new Product({
        imagePath: 'images/melancia.webp',
        title: 'Melancia Baby Nacional 3Kg',
        price: 22.33
    }),
    new Product({
        imagePath: '/images/cebola.webp',
        title: 'Cebola A Granel 500g',
        price: 2.99

    }),
    new Product({
        imagePath: '/images/cenoura.webp',
        title: 'Cenoura 500g',
        price: 3.99
    }),
    new Product({
        imagePath: '/images/bisnaguinha.webp',
        title: 'Bisnaguinha Original Panco Pacote 300g',
        price: 9.19
    }),
    new Product({
        imagePath: '/images/chocotone.webp',
        title: 'Chocottone Bauducco 908g',
        price: 42.59
    }),
    new Product({
        imagePath: '/images/panetonne.webp',
        title: 'Panettone Com Frutas Bauducco Caixa 400g',
        price: 21.90

    }),
    new Product({
        imagePath: '/images/HotDog.webp',
        title: 'Pão p/ Hot Dog Pullman pacote 70g',
        price: 10.59
    }),
    new Product({
        imagePath: 'images/paoArtesanato.webp',
        title: 'Pão de Forma Artesano Integral Pullman 500G',
        price: 12.90

    }),
    new Product({
        imagePath: '/images/paoArtesanatoOri.webp',
        title: 'Pão de Forma Artesano  Pullman 500G',
        price: 11.90
    }),
    new Product({
        imagePath: '/images/paohamburger.webp',
        title: 'Pão para Hambúrguer QUALITÁ C/4 200g',
        price: 6.59
    }),
    new Product({
        imagePath: '/images/paointegral.webp',
        title: 'Pão De Forma Integral WICKBOLD Premium Pacote 450g',
        price: 8.99

    }),
    new Product({
        imagePath: '/images/paoMultigraos.webp',
        title: 'Pão de Forma Multigrãos Bauducco Pacote 390g',
        price: 10.50
    }),
    new Product({
        imagePath: '/images/Rap10.webp',
        title: 'Pão Tortilha Integral Rap10 Pouch 297g',
        price: 10.50

    }),
    new Product({
        imagePath: '/images/Rap10Origina.webp',
        title: 'Pão Tortilha Original Rap10 Pouch 165g',
        price: 10.50
    }),
     new Product({
        imagePath: 'images/paoArtesanato.webp',
        title: 'Pão de Forma Artesano Integral Pullman 500G',
        price: 12.90

    }),
    new Product({
        imagePath: '/images/paoArtesanatoOri.webp',
        title: 'Pão de Forma Artesano  Pullman 500G',
        price: 11.90
    }),
    new Product({
        imagePath: '/images/paohamburger.webp',
        title: 'Pão para Hambúrguer QUALITÁ C/4 200g',
        price: 6.59
    }),
    new Product({
        imagePath: '/images/paointegral.webp',
        title: 'Pão De Forma Integral WICKBOLD Premium Pacote 450g',
        price: 8.99

    }),
    new Product({
        imagePath: '/images/paoMultigraos.webp',
        title: 'Pão de Forma Multigrãos Bauducco Pacote 390g',
        price: 10.50
    }),
    new Product({
        imagePath: '/images/Rap10.webp',
        title: 'Pão Tortilha Integral Rap10 Pouch 297g',
        price: 10.50

    }),
    new Product({
        imagePath: '/images/Rap10Origina.webp',
        title: 'Pão Tortilha Original Rap10 Pouch 165g',
        price: 10.50
    }),
 new Product({
        imagePath: 'images/paoArtesanato.webp',
        title: 'Pão de Forma Artesano Integral Pullman 500G',
        price: 12.90

    }),
    new Product({
        imagePath: '/images/paoArtesanatoOri.webp',
        title: 'Pão de Forma Artesano  Pullman 500G',
        price: 11.90
    }),
    new Product({
        imagePath: '/images/paohamburger.webp',
        title: 'Pão para Hambúrguer QUALITÁ C/4 200g',
        price: 6.59
    }),
    new Product({
        imagePath: '/images/paointegral.webp',
        title: 'Pão De Forma Integral WICKBOLD Premium Pacote 450g',
        price: 8.99

    }),
    new Product({
        imagePath: '/images/paoMultigraos.webp',
        title: 'Pão de Forma Multigrãos Bauducco Pacote 390g',
        price: 10.50
    }),
    new Product({
        imagePath: '/images/Rap10.webp',
        title: 'Pão Tortilha Integral Rap10 Pouch 297g',
        price: 10.50

    }),
    new Product({
        imagePath: '/images/Rap10Origina.webp',
        title: 'Pão Tortilha Original Rap10 Pouch 165g',
        price: 10.50
    }),
    new Product({
        imagePath: '/images/camarao.webp',
        title: 'Camarão Descascado, Cozido E Sem Cauda QUALITÁ Congelado 85/100 Pacote 400g',
        price: 49.90

    }),
    new Product({
        imagePath: '/images/linguado.webp',
        title: 'Linguado Médio Inteiro Fresco 800g',
        price: 20.59
    }),
    new Product({
        imagePath: '/images/lombobacalhau.webp',
        title: 'Lombo de Bacalhau Dessalgado Bacalanor 800g',
        price: 119.90
    }),
    new Product({
        imagePath: '/images/lula.webp',
        title: 'Lula Calamar 400g',
        price: 17.90

    }),
    new Product({
        imagePath: '/images/polvo.webp',
        title: 'Tentáculo de Polvo Congelado Swift Bandeja 200g',
        price: 69.90
    }),
    new Product({
        imagePath: '/images/robalo.webp',
        title: 'Posta de Robalo Fresco 400g',
        price: 16.90

    }),
    new Product({
        imagePath: '/images/salmao.webp',
        title: 'Pedaços De Salmão Congelados QUALITÁ 500g',
        price: 65.59
    }),
    new Product({
        imagePath: '/images/tilapia.webp',
        title: 'Filé De Tilápia Fresco 500g',
        price: 22.50

    }),
];
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}