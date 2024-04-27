function finalOutput(){

    let htmlCode = document.getElementById("html-input").value;
    let cssCode = document.getElementById("css-input").value;
    let jsCode = document.getElementById("js-input").value;

    let outputCode = document.getElementById("codeExecutionOutput");

    outputCode.contentDocument.body.innerHTML = `${htmlCode}<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;

    outputCode.contentDocument.getElementsByTagName("head")[0].innerHTML =`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><style>${cssCode}</style>`;

    outputCode.contentWindow.eval(jsCode);
}


function themechanger(){
     let checkBoxDocument = document.getElementsByClassName("form-check-input")[0];

     if(checkBoxDocument.checked=true){

        document.getElementById("themeswitcher").setAttribute("data-bs-theme","dark");
        document.getElementById("navthemeswitcher").setAttribute("data-bs-theme","dark");
        document.getElementsByTagName("nav")[0].setAttribute("class","navbar bg-body-dark");
        document.getElementById("navswitchtext").innerHTML=`<i class="bi bi-moon-fill"></i>`;
        document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme","dark");
        document.getElementById("iframebordertheme").setAttribute("class","ratio ratio-21*9 border border-white rounder");
     }
     else{
        document.getElementById("themeswitcher").setAttribute("data-bs-theme","light");
        document.getElementById("navthemeswitcher").setAttribute("data-bs-theme","light");
        document.getElementsByTagName("nav")[0].setAttribute("class","navbar bg-body-info");
        document.getElementById("navswitchtext").innerHTML=`<i class="bi bi-brightness-high-fill"></i>`;
        document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName("html")[0].setAttribute("data-bs-theme","dark");
        document.getElementById("iframebordertheme").setAttribute("class","ratio ratio-21*9 border border-dark rounder");

     }
    }
