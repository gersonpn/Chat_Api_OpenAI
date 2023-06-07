const apiKey = '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';


function sendMessage(){

  var message = document.getElementById('message-input');

  if(!message.value){
    alert('Please enter a message');
    return;
    }

    var  status = document.getElementById('status');
    var  btnSubmit = document.getElementById('btn-submit');


    status.innerHTML = 'Carregando...';
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    message.disabled = true;

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,

      },

      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: message.value,
        max_tokens: 2048,
        temperature: 0.5,


      })

  })


  .then((response) => response.json())
  .then((response) => {
    let r = (response.choices[0][text]);

 })

  .catch((e) => {
      console.log('Error -> ',e)


  })

  }