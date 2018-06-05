console.log('testing')

const button = document.querySelector('button')

function changeCourse() {
  const heading = document.querySelector('.spell')
  if(heading.textContent === 'Potions'){
      heading.textContent = 'Defense'
  }
  else{
    heading.textContent = 'Potions'
  }
}
function changeName(){
  const name = document.querySelector('.name')
  name.textContent = 'Ron'
}


function changeHeader(){
  const x = document.getElementById("frm1");
  let text = "";
  text += x.elements[0].value
  document.getElementById("change").innerHTML = text;
}


document.getElementById('first').addEventListener('click', changeCourse);
document.getElementById('second').addEventListener('click', changeName);
document.getElementById('third').addEventListener('click', changeHeader);


document.getElementById("word").addEventListener("keyup", function(e){
  e.preventDefault();
  const key = e.keyCode;
  if(key===13){
    document.getElementById("change").innerHTML = document.getElementById("word").value;
    return true;
  }
});

