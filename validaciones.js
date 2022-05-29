
(function(){
    emailjs.init("i57l-knAcDbnpwSpz");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: '',
        }
    },
    methods: {
        enviar(){
            let data = {
                from_name: document.getElementById("nombreHelp"),
                from_email: document.getElementById("emailHelp"),
                message: document.getElementById("messageHelp"),
                subject: document.getElementById("AsuntoHelp"),
            };
            
            emailjs.send("service_4aevbz9","mail_default", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('El correo se ha enviado de forma exitosa');
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
        
    }
});
