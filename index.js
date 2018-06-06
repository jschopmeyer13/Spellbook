const form = document.querySelector('form')

// const changeHeading = function(ev) {
//   ev.preventDefault()

//   const f = ev.target;
//   const spellName = f.spellName.value;
//   const level = f.level.value;
//   const spellsDiv = document.querySelector('#spells');

//   spellsDiv.innerHTML += `<li>${spellName + '- level ' + level}</li>`

//   f.reset()
// }
const addElements = function(ev){
  ev.preventDefault();

  const f = ev.target;
  const spellName = f.spellName.value;
  const level = f.level.value;

 // let brk = document.createElement('<br>');
  
  let spellItem = document.createElement('SPAN');
  let levelItem = document.createElement('SPAN');
  //let spanNode = document.createElement('SPAN', spellName)
  //const currentSpell = document.getElementsByClassName('spellName');
  //currentSpell.appendChild(node).appendChild(spellName).appendChild(node);
  spellItem.className = "spellName";
  levelItem.className = "level";

  let textNode = document.createTextNode(spellName + ' - level ' + level);
  
  const spellNode = document.createTextNode(spellName);

  const levelNode = document.createTextNode(level);
  spellItem.appendChild(spellNode);
  levelItem.appendChild(levelNode);
 // node.appendChild(spanNode);
  //node.appendChild(textNode);
  const brk = document.createElement('br');
  levelItem.appendChild(brk);
  //node.appendChild(brk)
  //document.getElementById("types").appendChild(node);
  document.getElementById('types').appendChild(spellItem);
  document.getElementById('types').appendChild(levelItem);
  
  //document.getElementById("spellName").appendChild(spellNode);
  

  f.reset();
}
// const addStudents = function(ev){
//     ev.preventDefault()

//     const f = ev.target
//     const studentName = f.studentName.value
    
//     const studentsDiv = document.querySelector('#students')
//     studentsDiv.innerHTML += `<li>${studentName}</li>`
    
//     f.reset()
// }


form.addEventListener('submit', addElements)