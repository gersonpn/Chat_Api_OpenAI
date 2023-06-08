const apiKey = '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';


function sendMessage(){

  var message = document.getElementById('message-input');

  if(!message.value){
    alert('Please enter a message');
    return;
    }

    var  status = document.getElementById('status');
    var  btnSubmit = document.getElementById('btn-submit');



    status.style.display = 'block';
    status.innerHTML = 'Carregando...';
    btnSubmit.disabled = true;
    btnSubmit.style.cursor = 'not-allowed';
    message.disabled = true;

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
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
    status.style.display = 'none';
    showHistoric(message.value, r);

 })

  .catch((e) => {
      console.log('Error -> ',e)


  })

  .finally(() => {

    btnSubmit.disabled = false;
    btnSubmit.style.cursor = 'pointer';
    message.disabled = false;


  })




  }


  function showHistoric(message, response){
      var historic = document.getElementById('historic');

      // message

      var boxMyMessage = document.createElement('div');
      boxMyMessage.className = 'box-my-message';

      var myMessage = document.createElement('p');
      myMessage.className = 'my-message';
      myMessage.innerHTML = message;

      boxMyMessage.appendChild(myMessage);
      historic.appendChild(boxMyMessage);


      //respostas

      var boxResponseMessage = document.createElement('div');
      boxResponseMessage.className = 'box-my-message';

      var chatResponse = document.createElement('p');
      chatResponse.className = 'chat-response';
      chatResponse.innerHTML = response;

      boxResponseMessage.appendChild(chatResponse);
      historic.appendChild(boxResponseMessage);



      historic.scrollTop = historic.scrollHeight;
  }
