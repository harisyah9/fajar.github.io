const txtElement = ["me...", "me..."];
let count = 0;
let txtindex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtindex);
  document.querySelector(".typing").textContent = words;

  if ((words.length == currentTxt, length)) {
    count++;
    txtindex = 0;
  }

  setTimeout(ngetik, 500);
})();

const options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
};

const darkmode = new Darkmode(options);

darkmode.showWidget();
