var request = require('request'); //bash: npm install request
// URL for request POST /message
var token = '83763g87x';
var instanceId = '777';
var url = `https://api.chat-api.com/instance${instanceId}/message?token=${token}`;
var data = {
    phone: '573133043714', // Receivers phone
    body: 'Hello, world!', // Message
};
// Send a request
request({
    url: url,
    method: "POST",
    json: data
});

// ¡Solo cópialo y úsalo! & nbsp;
// No uses corchetes, guiones y otros símbolos de formato en el teléfono. Utilice solo dígitos.

// Solo deberá sustituir su token de su cuenta personal en la variable $ token y el número de instancia (o ApiURL)
// Obtenga la clave API , ¡inténtelo hoy!

// ¿Qué sucede si deseo hacer esto con otro idioma?
// Acaba de enviar con éxito su primer mensaje de WhatsApp con JavaScript, pero ¿qué sucede si desea hacerlo en PHP? Tenemos otras publicaciones en el blog que puedes consultar: Cómo enviar un mensaje whatsapp con PHP