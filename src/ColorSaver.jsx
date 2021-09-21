import { createSignal } from "solid-js"

const color2class = {
  "violet": "bg-purple-500",
  "indigo": "bg-indigo-900",
  "bleu": "bg-blue-800",
  "vert": "bg-green-900",
  "jaune": "bg-yellow-300",
  "orange": "bg-yellow-500",
  "rouge": "bg-red-600"
}

function bgColorClass(color) {
  if (color != "no color") {
    return color2class[color]
  } else {
    return ""
  }
}


function ColorSaver() {
  const [color, setColor] = createSignal("no color")
  return (
    <div class="container">
      <button onClick={() => setColor("violet")} class="violet">violet</button>
      <button onClick={() => setColor("indigo")} class="indigo">indigo</button>
      <button onClick={() => setColor("bleu")} class="bleu">bleu</button>
      <button onClick={() => setColor("vert")} class="vert">vert</button>
      <button onClick={() => setColor("jaune")} class="jaune">jaune</button>
      <button onClick={() => setColor("orange")} class="orange">orange</button>
      <button onClick={() => setColor("rouge")} class="rouge">rouge</button>
      <div class={`text-gray-50 font-bold ${bgColorClass(color())}`}>Couleur enregistrée : {color()}</div>
    </div>

  )
}


export default ColorSaver