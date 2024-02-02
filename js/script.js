const adviceTitle = document.getElementById('advice-title');
const adviceText = document.getElementById('advice-text');
const generateBtn = document.getElementById('generate');
const xhr = new XMLHttpRequest();

const adviceGenerator = () => {
  xhr.open('GET', 'https://api.adviceslip.com/advice');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        adviceTitle.innerHTML = `ADVICE #${
          JSON.parse(this.responseText).slip.id
        }`;

        adviceText.innerHTML = `"${JSON.parse(this.responseText).slip.advice}"`;
      }
    } else {
      adviceTitle.innerHTML = 'Error Connecting to API';
    }
  };

  xhr.send();
};

generateBtn.addEventListener('click', adviceGenerator);
document.addEventListener('DOMContentLoaded', adviceGenerator);
