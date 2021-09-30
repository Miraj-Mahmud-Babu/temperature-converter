const celcius = document.getElementById("celcius");
const farenhight = document.getElementById("farenhight");
const cbtn = document.getElementById("btn");
const cCelcius = document.getElementById("c-celcius");
const cFarenheight = document.getElementById("c-farenheight");

cbtn.addEventListener("click", function (evn) {
    const getCelcius = celcius.value;
    const getFarenheight = farenhight.value;

    if (getCelcius) {
        const txtVal = celcius.value + " C";
        const listNode = cCelcius;
        const liNode = document.createElement("LI");
        const txtNode = document.createTextNode(txtVal);
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
        celcius.value = "";  
    }

    if (getFarenheight) {
        const txtVal1 = farenhight.value + " F";
        const listNode1 = cFarenheight;
        const liNode1 = document.createElement("LI");
        const txtNode1 = document.createTextNode(txtVal1);
        liNode1.appendChild(txtNode1);
        listNode1.appendChild(liNode1);
        farenhight.value = "";
    }

    if (getCelcius || getFarenheight) {
            const t = new Date()
            const listNode3 = document.getElementById('c-time');
            const liNode3 = document.createElement("LI");
            liNode3.innerHTML = t.toLocaleTimeString();
            listNode3.appendChild(liNode3);   
    }
    
});

// real time coversion

celcius.addEventListener("keyup", function (e) {
   
    let getCelcius = celcius.value;
    if (celcius.value === '') {
        farenhight.value = '';
    }
    else {
        farenhight.value = (getCelcius * 1.8) + 32  ;
    }
    
})

farenhight.addEventListener("keyup", function (e) {
    
    let getFarenheight = farenhight.value;
   
    if (farenhight.value === '') {
        celcius.value = '';
    }
    else {
        celcius.value = (getFarenheight - 32) * .5556;
    }
    
})


// for all worst case
let inputBox = celcius;
let inputBox2 = farenhight;
let invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

inputBox2.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
