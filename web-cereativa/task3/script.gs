function userpro() {
    var name = prompt("Enter your name: ");
    var age = prompt("Enter your age: ");
    var gg = confirm("Are you a developer?");
    var a = document.getElementById("genpro");
    a.innerHTML = `
    <div id="genpro">
        <h3>${name}</h3>
        <p>Age: ${age}</p>
        <p>State: ${gg ? "developer" : "non-developer"}</p>
        <p>Birth Year: ${2025 - age}</p>
    </div>
    `;
    sessionStorage.setItem('age', age);
    a.style.padding = "5px";
    a.style.borderRadius = '10px';
    a.style.color = '#fff';
    a.style.backgroundColor = '#225288';
}
function Shoppingc() {
    var a = document.getElementById("f");
    a.innerHTML = `
    <p>Subtotal: $2397.00<br>
    Tax (8%): $191.76<br>
    Total: $2588.76</p>
    `;
    a.style.padding = "5px";
    a.style.borderRadius = '10px';
    a.style.color = '#fff';
    a.style.backgroundColor = '#1c6e20';
}
function veragee() {
    var d = document.getElementById("verageeee");
    var a = document.getElementById("verageee");
    var agee = a.value;
    var age = sessionStorage.getItem("age");
    if (String(age) == String(agee)) {
        d.innerHTML = `
        <div>
        <p style="color: rgb(6, 197, 9);">Access granted</p>
        <br>
        <p>Welcome to our service!</p>
    </div>
        `;
    }
    else {
        d.innerHTML = `
        <div>
        <p style="color: rgb(216, 0, 0);">Access ungranted!</p>
    </div>
        `;
    }
}
function darkmode() {
    var k = document.getElementById("y");
    var f = document.getElementsByTagName("button");
    var a = document.getElementById("genpro");
    var b = document.getElementById("f");
    var j = document.getElementsByClassName('oo');
    if (k.style.backgroundColor == "white") {
        k.style.backgroundColor = "rgb(50, 48, 57)";
        k.style.color = "#fff";
        f[0].style.backgroundColor = "gray";
        f[1].style.backgroundColor = "gray";
        f[2].style.backgroundColor = "gray";
        f[3].style.backgroundColor = "gray";
        f[4].style.backgroundColor = "gray";
        a.style.backgroundColor = 'gray';
        b.style.backgroundColor = 'gray';
        for (var i = 0; i < j.length; i++) {
            j[i].style.backgroundColor = 'gray';
        }
    }
    else {
        k.style.backgroundColor = "white";
        k.style.color = "#000";
        f[0].style.backgroundColor = "rgb(48, 83, 241)";
        f[1].style.backgroundColor = "#1da01b";
        f[2].style.backgroundColor = "#33aeb6";
        f[3].style.backgroundColor = "#3e433e";
        f[4].style.backgroundColor = "#256ba1";
        a.style.backgroundColor = '#225288';
        b.style.backgroundColor = '#1c6e20';
        for (var i = 0; i < j.length; i++) {
            j[i].style.backgroundColor = 'red';
        }
    }
}
// function deleteitem(){
//             var x = document.getElementsByClassName("slist");
//             x.remove();

// } 
function deleteitem(button) {
    button.parentElement.remove();
}

function Shoppinglist() {
    var f = document.getElementById("slist");
    // f.style.display="flex";
    // f.style.justifyContent="space-between";
    var e = document.getElementById("additem");
    var b = e.value;
    f.innerHTML += `
    <div style="display: flex; justify-content: space-between; border: 1px solid; border-radius: 10px; align-items: center; padding-left:7px; margin-buttom:10px">
            <span>${b}</span>
            <button class="oo" style="color:#fff ; background:red ;" onclick="deleteitem(this)">x</button>
        </div>
    `;
}
