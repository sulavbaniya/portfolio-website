const scriptURL = 'https://script.google.com/macros/s/AKfycbwlnN-TSiv0iX2Mu67MkLLBqgK3jv3zi7cxx4A7vivzCk1PX2ewSFEgijgNbGZ4xmCPig/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  
  const formData = new FormData(form)
  form.reset()
  
  msg.innerHTML = "Message sent successfully."
  setTimeout(function(){
    msg.innerHTML = ""
  }, 5000)

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      if (response.ok) {
        console.log("Message sent successfully")
      } else {
        console.error('Failed to send message')
      }
    })
    .catch(error => {
      console.error('Error!', error.message)
    })
})
