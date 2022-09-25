var randomPick = Math.floor(Math.random() * 9)
var loserPick = Math.floor(Math.random() * 9)
console.log(randomPick)
console.log(loserPick)
const treasure = (id) => {
  if (id === randomPick)
  {document.getElementById(randomPick).innerHTML = "🍭"
    alert("Congratulations! You found the candy.")
}
  else if (id === loserPick)
  {document.getElementById(loserPick).innerHTML = "💀"
    alert("You picked the skull! Sorry you lose.")
}
  else
  {alert("Keep clicking to find the candy!")}
  }
