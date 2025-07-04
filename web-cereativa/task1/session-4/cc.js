function getByID() {
    var a = document.getElementById("getByID");
    a.innerText = `done`;
    a.style.backgroundColor = "#66407a";
    a.style.color = "#fff";
    a.style.padding = "10px";
    a.style.transition = "all 1s";

}
function getByClass() {
    var a = document.getElementsByClassName("getByClass");
    a[0].innerText = `done`;
    a[1].innerText = `done`;
    a[0].style.backgroundColor = "#4d3e8f";
    a[1].style.backgroundColor = "#4d3e8f";
    a[0].style.color = "#fff";
    a[1].style.color = "#fff";
    a[0].style.padding = "10px";
    a[1].style.padding = "10px";
    a[0].style.transition = "all 1s";
    a[1].style.transition = "all 1s";
}
function getByTag() {
    var a = document.getElementsByTagName("h2");
    a[0].innerText = `mission is done`;
    a[0].style.color = "#66407a";
    a[0].style.padding = "10px";
    a[0].style.fontSize = "25px";
    a[0].style.transition = "all 1s";

}
function changeLink() {
    var a = document.getElementById("linkk");
    if (a.textContent.includes("Youtube")) {
        sessionStorage.setItem("b", "true");
        a.innerHTML = `<a id="linkk" href="https://www.google.com/?feature=ytca" target="_blank">Google link</a>`;
        a.style.fontSize = "20px";
        a.style.color = "blue";
        a.style.padding = "10px";
        a.style.transition = "all 1s";
    } else {
        sessionStorage.setItem("b" ,"false");
        a.innerHTML = `<a id="linkk" href="https://www.youtube.com/?feature=ytca" target="_blank">Youtube link</a>`;
        a.style.fontSize = "15px";
        a.style.color = "red";
        a.style.transition = "all 1s";
    }
}

function getLink() {
    var bb = sessionStorage.getItem("b");
    if(bb==="true"){
        alert("https://www.google.com/?feature=ytca");
    }
    if(bb==="false"){
        alert("https://www.youtube.com/?feature=ytca");
    }
}
function removeLink() {
    var a = document.getElementById("linkk");
    a.remove("href");
    var r = document.getElementById('rr');
    r.innerHTML = `
        <div>
            This link was removed
        </div>
    `;
}
function getOne() {
    var a = document.querySelector(".paraInDiv");
    a.innerText = `done`;
    a.style.backgroundColor = "#9e6585";
    a.style.color = "#fff";
    a.style.padding = "10px";
    a.style.transition = "all 1s";

}
function getAll(){
    var a = document.querySelectorAll('.div1');
        a[0].style.backgroundColor='#b4daf5';
        a[1].style.backgroundColor='#b4daf5';
        a[0].style.transition = "all 1s";
        a[1].style.transition = "all 1s";

}