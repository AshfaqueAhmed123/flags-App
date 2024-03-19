
let fURL = 'https://flagsapi.com/';
let lURL = '/flat/64.png';


async function getFlag() {
  let cn = document.querySelector("input").value;
  if (cn != '') {
    cn = cn.toUpperCase()
    document.querySelector("img").src = `${fURL}${cn}${lURL}`;
    document.querySelector("input").value = ''
  } else {
    alert("enter a country code!")
  }
}

document.querySelector("button").onclick = function() {
  getFlag()
}



