let arr = []
const app = {
  init: function() {
    const form = document.querySelector('form')
    form.addEventListener('submit', ev => { // defining a new function but it is defining this how we expect it
      this.handleSubmit(ev)
    })
  },

  renderProperty: function(name, value) {
    const el = document.createElement('span')
    el.textContent = value
    el.classList.add(name)
    return el
  },
  removeProperty: function(name){
    var element = document.getElementById(name);
    element.parentNode.removeChild(element);
  },
  renderItem: function(spell) {
    // ['name', 'level']
    properties = Object.keys(spell)

    // collect an array of renderProperty's return values
    // (an array of <span> elements)
    const childElements = properties.map(property => {
      return this.renderProperty(property, spell[property])
    })
   

    const item = document.createElement('li')
    item.classList.add('spell')

    // append each <span> to the <li>
    childElements.forEach(el => {
      item.appendChild(el)
    })
    const delButton = item.appendChild(document.createElement("button"));
    delButton.textContent = 'delete';
    delButton.className = 'deleteButton';
    
    delButton.addEventListener('click', function(){
      const list = document.getElementById('spells');
      console.log(this.parentNode)
      while(this.parentNode !== null && this.parentNode.hasChildNodes){
        item.removeChild(this.parentNode.firstChild)
      }
 
    
    })
    return item
  },

  handleSubmit: function(ev) {
    ev.preventDefault()
  
  
    const f = ev.target

    const spell = {
      name: f.spellName.value,
      level: f.level.value,
      
    }
    arr.push(f.spellName.value);
    console.log(arr);
    const item = this.renderItem(spell)

    const list = document.querySelector('#spells')
    list.appendChild(item)

    f.reset()
  },
}

app.init()

