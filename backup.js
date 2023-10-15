const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://blaze-4.com/pt/games/double');

  let lastRedBoxCount = 0;
  let lastBlackBoxCount = 0;
  let lastWhiteBoxCount = 0;

  const checkForColorBoxChange = async () => {
    while (true) {
      const redBoxes = await page.evaluate(() => {
        const redDivs = document.querySelectorAll('.sm-box.red');
        return redDivs.length;
      });

      const blackBoxes = await page.evaluate(() => {
        const blackDivs = document.querySelectorAll('.sm-box.black');
        return blackDivs.length;
      });

      const whiteBoxes = await page.evaluate(() => {
        const whiteDivs = document.querySelectorAll('.sm-box.white');
        return whiteDivs.length;
      });

      if (redBoxes !== lastRedBoxCount) {
        console.log(`Saiu vermelho: ${redBoxes}`);
        lastRedBoxCount = redBoxes;
      }

      if (blackBoxes !== lastBlackBoxCount) {
        console.log(`Saiu preto: ${blackBoxes}`);
        lastBlackBoxCount = blackBoxes;
      }

      if (whiteBoxes !== lastWhiteBoxCount) {
        console.log(`Saiu branco: ${whiteBoxes}`);
        lastWhiteBoxCount = whiteBoxes;
      }
    }
  };

  checkForColorBoxChange();
})();

////////////////////////////////////////////////////////////
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://blaze-4.com/pt/games/double', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

  let lastColor = ''; // Variável para armazenar a última cor

  const checkForColorChange = async () => {
    const colorBox = await page.evaluate(() => {
      const divs = document.querySelectorAll('.sm-box');
      const colorDiv = Array.from(divs).find(div => div.classList.contains('red') || div.classList.contains('black') || div.classList.contains('white'));
      if (!colorDiv) {
        return null;
      }
      return colorDiv.classList.contains('red') ? 'vermelho' : (colorDiv.classList.contains('black') ? 'preto' : 'branco');
    });

    // Verifique se houve uma mudança na cor
    if (colorBox !== lastColor) {
      lastColor = colorBox;
      console.log(`Saiu ${colorBox}`);
    }

    setTimeout(checkForColorChange, 12000); // Verifique novamente a cada 12 segundos
  };

  checkForColorChange(); // Inicie a verificação de mudança de cor
})();



///////////////////////////////////////////////////////
const puppeteer = require('puppeteer');
const resultadoController = require('../controllers/resultadoController.js');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://blaze-4.com/pt/games/double', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

  let lastColor = ''; // Variável para armazenar a última cor

  const checkForColorChange = async () => {
    const colorBox = await page.evaluate(() => {
      const divs = document.querySelectorAll('.sm-box');
      const colorDiv = Array.from(divs).find(div => div.classList.contains('red') || div.classList.contains('black') || div.classList.contains('white'));
      if (!colorDiv) {
        return null;
      }
      const color = colorDiv.classList.contains('red') ? 'vermelho' : (colorDiv.classList.contains('black') ? 'preto' : 'branco');
      const numberElement = colorDiv.querySelector('.number');
      const number = numberElement ? numberElement.textContent : (color === 'branco' ? 'N/A' : '0'); // Verifique se o elemento 'number' existe e lide com o caso do branco
      return `${color} ${number}`;
    });

    // Verifique se houve uma mudança na cor
    if (colorBox !== lastColor) {
      lastColor = colorBox;
      console.log(`Saiu ${colorBox}`);
    }

    setTimeout(checkForColorChange, 10000); // Verifique novamente a cada 12 segundos
  };

  checkForColorChange(); // Inicie a verificação de mudança de cor
})();


