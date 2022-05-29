const form = document.querySelector("#info")
//const email = document.queryselector("#email")
const emailHelp = document.queryselector("#emailHelp")
//const nombre = document.queryselector("#nombre")
const nombreHelp = document.queryselector("#nombreHelp")
const curso = document.queryselector("#curso")
const Localidad = document.queryselector("#Localidad")

/*const email1 = document.getElementById("email")


	form.addEventlistener("submit", (event) => {
		event.preventDefault()
		//queremos validar que se estan trayendo los datos
		if(email.value === "" || nombre.value === "") 
			{
			if(email.value === "" ) {
				emailHelp.innerText = "¡Por favor completar esta información!";
						}
			if(nombre.value === "" ) {
				nombreHelp.innerText = "¡Por favor completar esta información!";
			}
		} 	else 	{
			form.submit();
			}
	})

*/


    const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');
  if (nombre.value === "") {
    alert("Por favor, escribe tu Nombre y Apellido.");
    nombre.focus();
    return false;
  }
    
  if (direcciónEmail.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    direcciónEmail.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);




function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
      Attachments: [
        {
          name: "File_Name_with_Extension",
          path: "Full Path of the file"
        }]
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
      });
  }