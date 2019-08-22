/*scripts.js*/

const myURL = 'https://squareup.com/store/ppna/item/home-tour-day-of-ticket'

      const button = document.getElementsByTagName("button")[0];
      button.addEventListener("click", onButtonClick);

      function onButtonClick(){
          window.open(myURL,'_blank');
      }