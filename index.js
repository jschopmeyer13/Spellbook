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
  let node = document.createElement('LI');
  let textNode = document.createTextNode(spellName + ' - level ' + level);

  node.appendChild(textNode);
  document.getElementById("spells").appendChild(node);

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