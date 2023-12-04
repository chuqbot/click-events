const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener('click', responseToClick)


function responseToClick() {
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Foo";
    body.appendChild(h3Tag);
}

const bbutton = document.querySelector("bbutton");
bbutton.addEventListener('click', response)
function response() {
    const h3Tag = document.createElement('h3');
    h3Tag.textContent = "Bar";
    body.appendChild(h3Tag);
}

const fbutton = document.querySelector("fbutton");
fbutton.addEventListener('click', result)
function result() {
    const h2Tag = document.createElement('h2');
    h2Tag.textContent = "Foobar";
    body.appendChild(h2Tag);
}