import { goDoc } from "./goDog"

const rootApp = document.getElementById("app");
const elementChild = document.createElement("div");
elementChild.innerHTML = `
    <div>${goDoc()}</div>
`
rootApp.appendChild(elementChild);