// DOM elements
let message = document.getElementById('message')
let username = document.getElementById('username')
let btn = document.getElementById('send')
let output = document.getElementById('output')
let actions = document.getElementById('actions')

btn.addEventListener('click', send_message)
message.addEventListener('keypress', enter_pressed)

function enter_pressed(event) {
  if (event.keyCode == 13) {
    send_message()
  }
}

function send_message() {
  if (username.value !== '' && message.value !== '') {
    let data = {
      username: username.value,
      message: message.value
    }

    fetch('/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    output.innerHTML += `<p>
          <strong>${data.username}</strong>: ${data.message}
      </p>`
    output.scrollTop = output.scrollHeight
    message.value = ''
  }
}

function print_historial(data) {
  let toBottom = false
  if (output.scrollTop === output.scrollHeight - 400) {
    toBottom = true
    console.log(toBottom)
  }
  output.innerHTML = ''
  data.forEach(mensaje => {
    output.innerHTML += `<p>
          <strong>${mensaje.owner}</strong>: ${mensaje.content}
      </p>`
  })

  if (toBottom) {
    output.scrollTop = output.scrollHeight
  }
  // console.log('output.scrollHeight' + output.scrollHeight)
  // console.log('output.scrollTop' + output.scrollTop)
}

fetch('/history')
  .then(res => res.json())
  .then(data => {
    print_historial(data)
  })
  .catch(err => {
    console.error(err)
  })

setInterval(() => {
  fetch('/history')
    .then(res => res.json())
    .then(data => {
      print_historial(data)
    })
    .catch(err => {
      console.error(err)
    })
}, 1000)
