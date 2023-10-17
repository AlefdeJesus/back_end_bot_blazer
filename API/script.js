// puppeteerScraping.js
const puppeteer = require('puppeteer');
//const salvarCorNoBanco = require('./scripts/salvarNoBanco.js');
const sequelize = require('sequelize');
const {Sinais} = require('./models');

const arrayResultado = [];
const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
});

  const page = await browser.newPage();

  await page.goto('https://blaze-4.com/pt/games/double', { timeout: 60000 });

  let lastCor = ''; // Variável para armazenar a última cor
  let lastNumero = ''; // Variável para armazenar o último número


  const checkForColorChange = async () => {
    const resultado = await page.evaluate(() => {
      const divs = document.querySelectorAll('.sm-box');
      const colorDiv = Array.from(divs).find(div => div.classList.contains('red') || div.classList.contains('black') || div.classList.contains('white'));
      if (!colorDiv) {
        return null;
      }
      const cor = colorDiv.classList.contains('red') ? 'vermelho' : (colorDiv.classList.contains('black') ? 'preto' : 'branco');
      const numberElement = colorDiv.querySelector('.number');
      const numero = numberElement ? numberElement.textContent : (cor === 'branco' ? 'N/A' : '0');
      return { cor, numero };
    });

    // Obtém a data e hora atual
    const dataAtual = new Date();
    const data = dataAtual.toLocaleDateString();
    const hora = dataAtual.toLocaleTimeString();
   

    // Verifique se houve uma mudança na cor ou no número
    if (resultado.cor !== lastCor || resultado.numero !== lastNumero) {
      lastCor = resultado.cor;
      lastNumero = resultado.numero;
      console.log(`Saiu ${resultado.cor} ${resultado.numero} -- ${data} ${hora}`);

      arrayResultado.push({lastCor, lastNumero, data,hora });

   function salvarCorNoBanco(){
      
            Sinais.create({
              cor: lastCor,
              numero:lastNumero,
              data: data,
              hora: hora,
            });
            console.log('dados salvo')
    }
    salvarCorNoBanco()
    
    }

    setTimeout(checkForColorChange, 1000); // Verifique novamente a cada 1 segundos
  };

  checkForColorChange(); // Inicie a verificação de mudança de cor


}


module.exports = { realizarScraping, arrayResultado };
