SmoochCleanStorage();
var validNavigation = false;
function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
function loadScript(u) {
	let s = document.createElement('script'); s.src = u; document.body.appendChild(s); return new Promise(function (res, rej) {
		s.onload = function () { res(); }
		s.onerror = function () { rej(); }
	});
}
function runScript(u) {
	let s = document.createElement('script'); s.innerText = u; document.body.appendChild(s); return new Promise(function (res, rej) {
		s.onload = function () { res(); }
		s.onerror = function () { rej(); }
	});
}

function isJSON(str) {
	try {
		return (JSON.parse(str) && !!str);
	} catch (e) {
		return false;
	}
}

// Función para obtener la data según configuración local o session
function GetStorageData(key) {
	switch (zyxmeconfig.storageType) {
		case 'localStorage':
			return localStorage[key];
		case 'sessionStorage':
			return sessionStorage[key];
		default:
			return '';
	}
}

// Función para obtener la data según configuración local o session
function SetStorageData(key, value) {
	switch (zyxmeconfig.storageType) {
		case 'localStorage':
			localStorage[key] = value;
		case 'sessionStorage':
			sessionStorage[key] = value;
	}
}

// Función para borrar la data según configuración local o session
function DeleteStorageData(key, value) {
	switch (zyxmeconfig.storageType) {
		case 'localStorage':
			localStorage.removeItem(key);
		case 'sessionStorage':
			sessionStorage.removeItem(key);
	}
}

const imageUploadOption = zyxmeconfig.imageUploadOption;
const fileUploadOption = zyxmeconfig.fileUploadOption;
const shareLocationOption = zyxmeconfig.shareLocationOption;
const cssHeaderHTML = zyxmeconfig.cssHeaderHTML;
const cssBodyHTML = zyxmeconfig.cssBodyHTML;
const jsBodyHTML = zyxmeconfig.jsBodyHTML;
const useJWTlogin = zyxmeconfig.useJWTlogin;
const historyTimeHours = zyxmeconfig.historyTimeHours;
const useLogoLink = zyxmeconfig.useLogoLink;
const inputInButtons = zyxmeconfig.inputInButtons;
const useExtraData = zyxmeconfig.useExtraData;
const enableAbandon = zyxmeconfig.enableAbandon;
const useZyxmeAgent = zyxmeconfig.useZyxmeAgent;
const useRefresh = zyxmeconfig.useRefresh;
const useFormModal = zyxmeconfig.useFormModal;
const sendInitChat = zyxmeconfig.sendInitChat;
let usegroups = zyxmeconfig.usegroups;
const usegroupslimit = zyxmeconfig.usegroupslimit;
const formfields = zyxmeconfig.formfields;
const usergroups = zyxmeconfig.usergroups;
let useclassifications = zyxmeconfig.useclassifications;
const classifications = zyxmeconfig.classifications;
let maxclassificationlevel = 1;
const clalevel1temp = zyxmeconfig.classifications?.filter(c => c.parent == 0);
const clalevel2temp = zyxmeconfig.classifications?.filter(c => clalevel1temp.map(cc => cc.classificationid).includes(c.parent));
const clalevel3temp = zyxmeconfig.classifications?.filter(c => clalevel2temp.map(cc => cc.classificationid).includes(c.parent));
const clalevel3 = clalevel3temp?.filter(c => c.usergroup != 0);
const clalevel2 = clalevel2temp?.filter(c => clalevel3.map(cc => cc.parent).includes(c.classificationid) || c.usergroup != 0);
const clalevel1 = clalevel1temp?.filter(c => clalevel2.map(cc => cc.parent).includes(c.classificationid) || c.usergroup != 0);
const usequeue = zyxmeconfig.usequeue;
const queuerefreshdelay = zyxmeconfig.queuerefreshdelay;
const queuetooltip = zyxmeconfig.queuetooltip;
const schedulefield = zyxmeconfig.schedulefield;

loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/js/intlTelInput.min.js').then(function () { }).catch(function () { });
loadScript('https://cdn.jsdelivr.net/gh/nanoxxi93/js/platform.1.3.6.min.js').then(function () { }).catch(function () { });

// Librerías de estilos
document.querySelector('head').insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${zyxmeconfig.webchatStyleUrl}" />`);
document.querySelector('head').insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`);
document.querySelector('head').insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/css/intlTelInput.min.css" />`);
document.querySelector('head').insertAdjacentHTML("beforeend", `<style> #contactModal .modal-content .header{ background:#${zyxmeconfig.brandColor}; } #contactModal .modal-content button{ background:#${zyxmeconfig.textColor}; } </style>`);
document.querySelector('head').insertAdjacentHTML("beforeend", `<style>${cssHeaderHTML}</style>`);
document.querySelector('body').insertAdjacentHTML("beforeend", `<style>${cssBodyHTML}</style>`);

// Integración con Smooch
!function (e,n,t,r){
	function o(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){
	var t=n.getElementsByTagName("script")[0],r=n.createElement("script");r.async=!0,r.src=e.url,t.parentNode.insertBefore(r,t)}}catch(e){}}
	var s,p,a,i=[],c=[];e[t]={init:function (){s=arguments;var e={then:function (n){return c.push({type:"t",next:n}),e},catch:function (n){
	return c.push({type:"c",next:n}),e}};return e},on:function (){i.push(arguments)},render:function (){p=arguments},destroy:function (){a=arguments}},
	e.__onWebMessengerHostReady__=function (n){if(delete e.__onWebMessengerHostReady__,e[t]=n,s)for(var r=n.init.apply(n,s),o=0;o<c.length;o++){
	var u=c[o];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&n.render.apply(n,p),a&&n.destroy.apply(n,a);for(o=0;o<i.length;o++)n.on.apply(n,i[o])};
	var u=new XMLHttpRequest;u.addEventListener("load",o),u.open("GET","https://"+r+".webloader.smooch.io/",!0),u.responseType="json",u.send()
}(window,document,"Smooch",zyxmeconfig.smoochAppId);

// Función para cerrar completamente el chat web
function closeWebChat() {
	let smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
	if (smoochAppUserId != null) {
		let dataCloseConversation = {
			"AppId": zyxmeconfig.smoochAppId,
			"AppUserId": smoochAppUserId,
			"PlatformType": "WEBM",
			"MessageText": "Cliente abandonó la conversación"
		};
		let dataCloseFormData = new FormData();
		dataCloseFormData.append("data", JSON.stringify(dataCloseConversation));
		navigator.sendBeacon(zyxmeconfig.webchatscriptUrl + '/abandoned', dataCloseFormData);
		SmoochRefresh();
	}
}

// Envia notificacion en el evento beforeunload
window.addEventListener('beforeunload', function (e) {
	let smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
	if (smoochAppUserId != null) {
		let dataCloseConversation = {
			"AppId": zyxmeconfig.smoochAppId,
			"AppUserId": smoochAppUserId,
			"PlatformType": "WEBM",
			"MessageText": "Cliente abandonó la conversación"
		};
		let dataCloseFormData = new FormData();
		dataCloseFormData.append("data", JSON.stringify(dataCloseConversation));
		if (enableAbandon && !validNavigation && Smooch != null && Smooch.getUser() != null
			&& Smooch.getConversation().messages.length > 0) {
			navigator.sendBeacon(zyxmeconfig.webchatscriptUrl + '/abandoned', dataCloseFormData);
			return null;
		}
	}
	else {
		return null;
	}
});

// Filtra los eventos unload que no sean F5, click en link o submit
window.onload = function () {
	// Attach the event keypress to exclude the F5 refresh (includes normal refresh)
	document.onkeydown = function (e) {
		if ((e.key || e.keyCode) == 116) {
			validNavigation = true;
		}
	};
	document.onkeypress = function (e) {
		if ((e.key || e.keyCode) == 116) {
			validNavigation = true;
		}
	};
	document.onkeyup = function (e) {
		if ((e.key || e.keyCode) == 116) {
			validNavigation = true;
		}
	};
	// Attach the event click for all links in the page
	document.querySelectorAll('a').forEach(x => {
		if (x['href'] != '' && x['href'] != '#' && x['href'] != 'javascript:;') {
			x.addEventListener('click', function () {
				validNavigation = true;
			});
		}
	});
	// Attach the event submit for all forms in the page
	document.querySelectorAll('form').forEach(x => {
		x.addEventListener('submit', function () {
			validNavigation = true;
		});
	});
	// Attach the event click for all inputs in the page
	document.querySelectorAll('input[type=submit]').forEach(x => {
		x.addEventListener('click', function () {
			validNavigation = true;
		});
	});
}

// Función para ocultar el speechBubble
function speechBubbleRemove() {
	let speechbubble = document.querySelector('.speech-bubble-div');
	if (speechbubble) {
		speechbubble.style.visibility = 'hidden';
	}
}

// Carga de elementos dentro de frame del chat web
function SmoochOnReady() {
	Smooch.on('ready', function () {
		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		let head = smoochDOM.head;
		head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="${zyxmeconfig.webchatStyleUrl}" />`);
		head.insertAdjacentHTML("beforeend", `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`);
		head.insertAdjacentHTML("beforeend", `<style>
		body #mount .intro-pane{ background:#${zyxmeconfig.brandColor}; }
		
		body #mount #container #conversation .row .msg-wrapper .carousel-content .carousel-title{font-weight:600!important;font-size:14px!important;color:#${zyxmeconfig.brandColor}!important;margin:5px!important;}
		body #mount #container #conversation .row .msg-wrapper .carousel-content .carousel-description{color:#${zyxmeconfig.brandColor}!important;font-size:12px!important;margin:5px!important;}
		body #mount #container #conversation .row .msg-wrapper .carousel-container .scroll-container > div:not(.carousel-item){ background:#${zyxmeconfig.textColor}!important; box-shadow:none;!important top:calc(50% - 15px);!important}
		body #mount #container #conversation .row .msg-wrapper .carousel-container .scroll-container > div:not(.carousel-item) i{ border-color:#FFFFFF!important; }
		body #mount #container #conversation .row .msg-wrapper .carousel-content .action .btn{color:#${zyxmeconfig.textColor}!important;border:1px solid #${zyxmeconfig.textColor}!important;border-radius:0!important;margin:auto auto 15px auto!important;font-weight:400!important;width:194px!important;height:38px!important;font-size:16px;line-height:24px;}
		
		body #mount #container #conversation .reply-container{text-align:center;}
		body #mount #container #conversation .reply-container .btn-reply-action, .reply-container .btn{background-color:#${zyxmeconfig.textColor}!important;border-color:#${zyxmeconfig.textColor}!important;font-size:16px!important;font-weight:400!important;height:38px!important;padding:3px 7px 3px!important;}
		body #mount #container #conversation .reply-container .btn-reply-action span, .reply-container .btn span{color:#FFF;}
		</style>`);
		head.insertAdjacentHTML("beforeend", `<style>${cssHeaderHTML}</style>`);
		smoochDOM.body.insertAdjacentHTML("beforeend", `<style>${cssBodyHTML}</style>`);

		let logo = smoochDOM.querySelector('.logo');
		let logoatag = logo?.querySelector('a');
		let logoImg = logo.querySelector('img');
		if (useLogoLink) {
			logoatag?.removeAttribute("rel");
			Object.assign(logoatag, {
				href: 'https://zyxme.com/'
			});
			logoatag?.setAttribute('href', '#');
			logoatag?.removeAttribute('target');
			Object.assign(logoImg, {
				src: zyxmeconfig.zyxmeLogoUrl,
				srcset: zyxmeconfig.zyxmeLogoUrl,
				alt: 'Zyxme Servicios de Chatbots en Lima'
			});
		}
		else {
			if (logo != null) {
				logo.remove();
			}
		}

		let conversation = smoochDOM.querySelector('#conversation');
		let messagesContainer = conversation.querySelector('.messages-container');
		if (messagesContainer) {
			messagesContainer.style.maxHeight = '85%';
		}

		if (useZyxmeAgent && GetStorageData('agentName') != null) {
			smoochDOM.querySelectorAll('.from').forEach(x => x.innerText = GetStorageData('agentName'));
		}
	});
}

// Inicialización de Smooch
function SmoochInit() {
	Smooch.init({
		appId: zyxmeconfig.smoochAppId,
		userId: GetStorageData(zyxmeconfig.integrationId + '.smoochUserId') != null && GetStorageData(zyxmeconfig.integrationId + '.smoochJWT') != null ? GetStorageData(zyxmeconfig.integrationId + '.smoochUserId') : null,
		jwt: GetStorageData(zyxmeconfig.integrationId + '.smoochUserId') != null && GetStorageData(zyxmeconfig.integrationId + '.smoochJWT') != null ? GetStorageData(zyxmeconfig.integrationId + '.smoochJWT') : null,
		locale: 'es-ES',
		displayStyle: 'button',
		browserStorage: zyxmeconfig.storageType,
		notificationChannelPromptEnabled: false,
		businessName: zyxmeconfig.stringBusinessName,
		fixedIntroPane: true,
		businessIconUrl: zyxmeconfig.stringBusinessIconUrl,
		buttonIconUrl: zyxmeconfig.stringButtonIconUrl,
		buttonWidth: zyxmeconfig.buttonWidth,
		buttonHeight: zyxmeconfig.buttonHeight,
		customColors: {
			brandColor: zyxmeconfig.brandColor,
			conversationColor: zyxmeconfig.textColor,
			actionColor: zyxmeconfig.textColor
		},
		menuItems: {
			imageUpload: imageUploadOption,
			fileUpload: fileUploadOption,
			shareLocation: shareLocationOption
		},
		customText: {
			actionPaymentCompleted: 'Pago completado',
			actionPaymentError: 'Se produjo un error al procesar la tarjeta. <br> Por favor intente nuevamente o use una tarjeta diferente.',
			actionPostbackError: 'Se produjo un error al procesar su acción. Inténtalo de nuevo.',
			clickToRetry: 'Mensaje no entregado. Haga clic para volver a intentarlo .',
			clickToRetryForm: 'Formulario no enviado. Haga clic en cualquier parte del formulario para volver a intentarlo.',
			connectNotificationText: 'Danos una forma para contactarte:',
			connectNotificationSingleText: 'Recibir una notificación cuando reciba una respuesta',
			connectNotificationSingleButtonText: 'Activa las notificaciones de <name>',
			connectNotificationOthersText: 'otros',
			conversationTimestampHeaderFormat: 'D MMMM YYYY, h:mm A',
			couldNotConnect: 'No se pudo conectar. Puedes {retry}.',
			couldNotConnectInner: 'reintentar conectarse ahora',
			couldNotConnectWithRetry: 'No se pudo conectar. Seguiremos intentándolo, o puede {retry}.',
			couldNotConnectWithRetryInner: 'intentar ahora',
			emailChangeAddress: 'Cambiar mi correo electrónico',
			emailDescription: 'Para recibir una notificación por correo electrónico cuando reciba una respuesta, ingrese su dirección de correo electrónico',
			emailFieldLabel: 'Su correo electrónico',
			emailFieldPlaceholder: 'Su dirección de correo electrónico',
			emailFormButton: 'Continuar',
			fetchHistory: 'Cargar más',
			fetchingHistory: 'Recuperando historial ...',
			fileTooLargeError: 'Límite de tamaño de archivo máximo excedido ({size})',
			fileTypeError: 'Tipo de archivo no compatible',
			formErrorInvalidEmail: 'El correo electrónico no es válido',
			formErrorNoLongerThan: 'No debe contener más de ({characters}) caracteres',
			formErrorNoShorterThan: 'Debe contener al menos ({characters}) caracteres',
			formErrorUnknown: 'Esto no se ve muy bien',
			formFieldSelectPlaceholderFallback: 'Elija uno ...',
			frontendEmailChannelDescription: 'Para hablar con nosotros por correo electrónico, simplemente envíe un mensaje a nuestra dirección de correo electrónico y le responderemos en breve:',
			headerText: zyxmeconfig.stringHeaderText,
			imageClickToReload: 'Haga clic para volver a cargar la imagen',
			imageClickToView: 'Haga clic para ver la imagen {size}.',
			imagePreviewNotAvailable: 'Vista previa no disponible',
			inputPlaceholder: 'Escribe un mensaje ...',
			inputPlaceholderBlocked: 'Complete el formulario de arriba ...',
			introAppText: zyxmeconfig.stringIntroAppText,
			introductionText: zyxmeconfig.stringIntroductionText,
			invalidFileError: 'Solo se admiten imágenes. Elija un archivo con una extensión compatible (jpg, jpeg, png, gif o bmp).',
			lineChannelDescription: 'Para hablar con nosotros usando LINE, escanee este código QR con la aplicación LINE y envíenos un mensaje',
			linkError: 'Se produjo un error al intentar generar un enlace para este canal. Inténtalo de nuevo.',
			locationNotSupported: 'Su navegador no admite servicios de ubicación o ha sido deshabilitado. Escribe tu ubicación en su lugar.',
			locationSecurityRestriction: 'Este sitio web no puede acceder a su ubicación. Escribe tu ubicación en su lugar.',
			locationSendingFailed: 'No se pudo enviar la ubicación',
			locationServicesDenied: 'Este sitio web no puede acceder a su ubicación. Permita el acceso en su configuración o escriba su ubicación en su lugar.',
			messageError: 'Se produjo un error al enviar su mensaje. Inténtalo de nuevo.',
			messageIndicatorTitlePlural: '({count}) Nuevos mensajes',
			messageIndicatorTitleSingular: '({count}) Nuevo mensaje',
			messageRelativeTimeDay: 'hace {value}d',
			messageRelativeTimeHour: 'hace {value}h',
			messageRelativeTimeJustNow: 'Ahora',
			messageRelativeTimeMinute: 'hace {value}m',
			messageTimestampFormat: 'h:mm A',
			messageSending: 'Enviando ...',
			messageDelivered: 'Entregado',
			messengerChannelDescription: 'Conecte su cuenta de Facebook Messenger para recibir una notificación cuando reciba una respuesta y continúe la conversación en Facebook Messenger',
			notificationSettingsChannelsDescription: 'También puede hablar con nosotros desde su aplicación o servicio favorito',
			notificationSettingsChannelsTitle: 'Otros canales',
			notificationSettingsConnected: 'Conectado',
			notificationSettingsConnectedAs: 'Conectado como {username}',
			prechatCaptureGreetingText: 'Hola, 👋 \n Para comenzar, nos gustaría saber un poco más sobre ti:',
			prechatCaptureNameLabel: 'Tu nombre',
			prechatCaptureNamePlaceholder: 'Escriba su nombre ...',
			prechatCaptureEmailLabel: 'Correo electrónico',
			prechatCaptureEmailPlaceholder: 'nombre@organizacion.com',
			prechatCaptureConfirmationText: '¡Gracias por eso! ¿En qué te podemos ayudar?',
			prechatCaptureMailgunLinkingConfirmation: 'Se le notificará aquí y por correo electrónico a {email} una vez que respondamos',
			sendButtonText: 'Enviar',
			settingsHeaderText: 'Configuración',
			shareLocation: 'Compartir ubicación',
			smsBadRequestError: 'No pudimos comunicarnos con este número. Inténtalo de nuevo o usa uno diferente.',
			smsCancel: 'Cancelar',
			smsChangeNumber: 'Cambiar mi número',
			smsChannelDescription: 'Conecte su número de SMS para recibir una notificación cuando reciba una respuesta y continúe la conversación por SMS',
			smsChannelPendingDescription: 'Verifique sus mensajes en {number} para confirmar su número de teléfono',
			smsContinue: 'Continuar',
			smsInvalidNumberError: 'Su número de teléfono no es válido. Inténtalo de nuevo.',
			smsLinkCancelled: 'El enlace a {appUserNumber} fue cancelado',
			smsLinkPending: 'Pendiente',
			smsPingChannelError: 'Hubo un error al enviar un mensaje a su número',
			smsSendText: 'Enviarme un mensaje de texto',
			smsStartTexting: 'Iniciar mensajes de texto',
			smsTooManyRequestsError: 'Recientemente se solicitó una conexión para ese número. Inténtalo de nuevo en {minutes} minutos.',
			smsTooManyRequestsOneMinuteError: 'Recientemente se solicitó una conexión para ese número. Inténtalo de nuevo en 1 minuto. ',
			smsUnhandledError: 'Algo salió mal. Inténtalo de nuevo.',
			tapToRetry: 'Mensaje no entregado. Toque para volver a intentarlo.',
			tapToRetryForm: 'Formulario no enviado. Toque en cualquier parte del formulario para volver a intentarlo.',
			telegramChannelDescription: 'Conecte su cuenta de Telegram para recibir una notificación cuando reciba una respuesta y continúe la conversación en Telegram',
			unsupportedMessageType: 'Tipo de mensaje no compatible',
			unsupportedActionType: 'Tipo de acción no compatible',
			uploadDocument: 'Subir documento',
			uploadInvalidError: 'Archivo inválido',
			uploadPhoto: 'Subir foto',
			uploadVirusError: 'Se detectó un virus en su archivo y ha sido rechazado',
			viberChannelDescription: 'Conecte su cuenta de Viber para recibir una notificación cuando reciba una respuesta y continúe la conversación en Viber. Para comenzar, escanee el código QR con la aplicación Viber. ',
			viberChannelDescriptionMobile: 'Conecte su cuenta de Viber para recibir una notificación cuando reciba una respuesta y continúe la conversación en Viber. Para comenzar, instale la aplicación Viber y toque Conectar ',
			viberQRCodeError: 'Se produjo un error al recuperar su código QR de Viber. Inténtalo de nuevo.',
			wechatChannelDescription: 'Conecte su cuenta de WeChat para recibir una notificación cuando reciba una respuesta y continúe la conversación en WeChat. Para comenzar, escanee este código QR usando la aplicación WeChat ',
			wechatChannelDescriptionMobile: 'Conecte su cuenta de WeChat para recibir una notificación cuando reciba una respuesta y continúe la conversación en WeChat. Para comenzar, guarde esta imagen de código QR y cárguela en el <a href=\'weixin://dl/scan\'> escáner de código QR </a>. ',
			wechatQRCodeError: 'Se produjo un error al recuperar su código QR de WeChat. Inténtalo de nuevo.',
			whatsappChannelDescriptionDesktop: 'Sincronice su cuenta con WhatsApp escaneando el código QR o haciendo clic en el enlace a continuación. Entonces, envíe el mensaje rellenado previamente para validar la solicitud de sincronización. (Su código: {{code}}). ',
			whatsappChannelDescriptionMobile: 'Sincronice su cuenta con WhatsApp haciendo clic en el enlace a continuación. \ nA continuación, envíe el mensaje rellenado previamente para validar la solicitud de sincronización. (Su código: {{code}}). ',
			whatsappLinkingError: 'Se produjo un error al recuperar la información de enlace de WhatsApp. Inténtalo de nuevo.'
		},
		delegate: {
			beforeDisplay(message, data) {
				if (message?.text?.includes('.mp4')) {
					message.actions = [
						{
							type: 'webview',
							text: 'Ver Video',
							uri: message.text,
							fallback: message.text
						}
					];
					message.text = '';
				}
				if (historyTimeHours != null && message?.received < (+sessionStorage["currentDateGetTime"] - historyTimeHours * 60 * 60 * 1000) / 1000) {
					return null;
				}
				return message;
			},
			beforeSend(message) {
				let extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
				extraData.newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
				message.metadata = {
					extraData: JSON.stringify(extraData),
					url: window.location.href
				};
				return message;
			},
			beforePostbackSend(postback) {
				let extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
				extraData.newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
				postback.metadata = {
					extraData: JSON.stringify(extraData),
					url: window.location.href
				};
				return postback;
			}
		}
	}).then(function () {
		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		zyxmeconfig.stringBusinessIconUrl = zyxmeconfig.stringBusinessIconUrl != '' ? zyxmeconfig.stringBusinessIconUrl : smoochDOM.querySelector('.app-icon')?.src;
		
		let conversation = Smooch.getConversation();
		try {
			if (conversation.messages.length == 0) {
				if (useFormModal) {
					fakeChat();
				}
			}
			else if (enableAbandon && Smooch != null && Smooch.getUser() != null && Smooch.getConversation().messages.length > 0) {
				let smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
				let PlatformType = "WEBM";
				let MessageText = "Cliente recuperó la conversación";
				fetch(`${zyxmeconfig.webchatscriptUrl}/recovery/${zyxmeconfig.smoochAppId}/${smoochAppUserId}/${PlatformType}/${MessageText}`).then(function (response) {
					response.json().then(function (response) {
						return null;
					});
				}).catch(function (error) {
					console.log(error);
				});
			}
		}
		catch (error) { }

		let zyxmeOptions = document.createElement('div');
		zyxmeOptions.id = 'zyxme-options';
		smoochDOM.querySelector('.intro-pane')?.insertAdjacentElement('beforeend', zyxmeOptions);

		if ((usegroups || useclassifications) && usequeue) {
			smoochDOM.querySelector('.app-name')?.setAttribute("style", "margin-right: 20px;");
			// smoochDOM.querySelector('.intro-text')?.setAttribute("style", "margin-right: 20px;");
			
			let queuemessageDiv = document.createElement('div');
			queuemessageDiv.id = 'queue-message';
			queuemessageDiv.style.display = 'none';
			smoochDOM.querySelector('.intro-pane')?.insertAdjacentElement('beforeend', queuemessageDiv);
		}

		if (useRefresh) {
			let refreshDiv = document.createElement('div');
			refreshDiv.classList.add('refresh-handle');
			refreshDiv.addEventListener('click', SmoochRefresh);
			let refreshIcon = document.createElement('i');
			refreshIcon.classList.add('fa', 'fa-refresh');
			refreshDiv.insertAdjacentElement('beforeend', refreshIcon);
			smoochDOM.querySelector('#zyxme-options')?.insertAdjacentElement('beforeend', refreshDiv);
		}

		if (zyxmeconfig.useSpeechBubble && document.querySelector('.speech-bubble-div') == null) {
			setTimeout(function() {
				let smoochIcon = document.querySelector('#web-messenger-container');
				let smoochIconStyle = getComputedStyle(smoochIcon);
	
				let speechBubbleDiv = document.createElement('div');
				speechBubbleDiv.classList.add('speech-bubble-div');
				speechBubbleDiv.style.position = smoochIconStyle.position;
				if (zyxmeconfig?.speechBubblePosition == 'left') {
					speechBubbleDiv.style.right = parseInt(smoochIconStyle.right.split('px')[0]) + parseInt(smoochIconStyle.width.split('px')[0]) + 20 + 'px';
					speechBubbleDiv.style.bottom = parseInt(smoochIconStyle.bottom.split('px')[0]) + 30 + 'px';
				}
				else {
					speechBubbleDiv.style.right = parseInt(smoochIconStyle.right.split('px')[0]) + 18 + 'px';
					speechBubbleDiv.style.bottom = parseInt(smoochIconStyle.bottom.split('px')[0]) + parseInt(zyxmeconfig.buttonHeight.split('px')[0]) - 58 + 100 + 'px';
				}
				
				document.body.insertAdjacentElement('beforeend', speechBubbleDiv);
	
				if (zyxmeconfig.useSpeechBubbleImg) {
					let speechBubbleIcon = document.createElement('img');
					speechBubbleIcon.classList.add('speech-bubble-icon');
					speechBubbleIcon.setAttribute('src', zyxmeconfig.speechBubbleImgUrl);
					speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleIcon);
				}
	
				let speechBubbleTimes = document.createElement('a');
				speechBubbleTimes.classList.add('speech-bubble-times');
				speechBubbleTimes.innerHTML = '&times;';
				speechBubbleTimes.addEventListener('click', speechBubbleRemove);
				speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleTimes);
				
				let speechBubbleSpan = document.createElement('span');
				speechBubbleSpan.innerHTML = zyxmeconfig.stringBubbleMessageHTML;
	
				speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleSpan);
	
				if (document.querySelector('#web-messenger-container').contentDocument.querySelector('#container').classList.contains('appear')) {
					let speechbubble = document.querySelector('.speech-bubble-div');
					if (speechbubble) {
						speechbubble.style.visibility = 'hidden';
					}
				}
			}, zyxmeconfig.speechBubbleDelay);
			
		}
		runScript(jsBodyHTML).then(function () { }).catch(function () { }); //Run external JS
	});
	SmoochOnReady();
	SmoochWidgetOpened();
	SmoochWidgetClosed();
	SmoochMessage();
	SmoochMessageReceived();
}

function SmoochCleanStorage() {
	DeleteStorageData(zyxmeconfig.integrationId + '.sessionToken');
	DeleteStorageData(zyxmeconfig.integrationId + '.clientId');
	DeleteStorageData(zyxmeconfig.integrationId + '.appUserId');
	DeleteStorageData(zyxmeconfig.integrationId + '.smoochAppUserId');
	DeleteStorageData(zyxmeconfig.integrationId + '.smoochUserId');
	DeleteStorageData(zyxmeconfig.integrationId + '.smoochJWT');
	DeleteStorageData(zyxmeconfig.integrationId + '.newAppUserId');
	maxclassificationlevel = 1;
	DeleteStorageData('queueposition');
	DeleteStorageData('conversationid');
	DeleteStorageData('lastusertype');
	DeleteStorageData('smoochsessionid');
	DeleteStorageData('zyxmesurvey');
	clearTimeout(window.zyxmeexpirationtimeout);
	delete window.zyxmeexpirationtimeout;
	clearInterval(window.zyxmefakesocket);
	delete window.zyxmefakesocket;
	sessionStorage["currentDateGetTime"] = new Date().getTime();
}

// Restart chatweb
function SmoochRefresh() {
	Smooch.close();
	setTimeout(function() {
		Smooch.destroy();
		SmoochCleanStorage();
		try {
			formfields.forEach(f => {
				if (f.field == 'classification') {
					document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + 1}`).value = '';
					let child = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + 2}`);
					if (child != null) {
						child.parentElement.remove();
					}
					child = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + 3}`);
					if (child != null) {
						child.parentElement.remove();
					}
				}
				else {
					document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`).value = '';
				}
			});
			if (zyxmeconfig.useTermsAndConditions) {
				document.querySelector('#contactMeTerms').checked = false
			}
		}
		catch (error) { }
		formValidation();
		SmoochStart();
	}, 200);
}

// Función que se ejecuta al abrir la burbuja
function SmoochWidgetOpened() {
	Smooch.on('widget:opened', function () {
		if (!useFormModal && sendInitChat) {
			let conversation = Smooch.getConversation();
			try {
				if (conversation.messages.length == 0) {
					Smooch.startConversation().then(function () {
						Smooch.updateUser({
							givenName: sessionStorage['contactMeName'],
							properties: {
								'justGotUpdated': true
							}
						});
						let extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
						extraData.platform = platform || '';
						if (scriptvariable != null) {
							extraData.scriptvariable = scriptvariable;
						}
						let data = {
							"Trigger": "message:appUser",
							"App": {
								"_id": zyxmeconfig.smoochAppId
							},
							"AppUser": {
								"_id": GetStorageData(zyxmeconfig.integrationId + ".appUserId"),
								"ConversationStarted": true,
								"Surname": "",
								"GivenName": sessionStorage['contactMeName']
							},
							"Messages": [{
								"Type": "text",
								"Text": "Inicio del chat",
								"Role": "appUser",
								"Name": "",
								"Source": {
									"Type": "web"
								},
								"Metadata": {
									"ExtraData": JSON.stringify(extraData),
									"Url": window.location.href
								}
							}]
						};
						fetch(zyxmeconfig.webhookUrl, {
							method: 'POST',
							body: JSON.stringify(data),
							headers: {
								'Content-Type': 'application/json'
							}
						});
					});
				}
			} catch (error) { }
		}

		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		let footer = smoochDOM.querySelector('#footer');
		let conversation = Smooch.getConversation();
		
		let queueposition = GetStorageData('queueposition');
		let lastusertype = GetStorageData('lastusertype');
		if ((usegroups || useclassifications) && lastusertype != null && lastusertype == 'HOLDING' && queueposition != null) {
			showQueuePosition();
		}

		if (!inputInButtons && (conversation?.messages[conversation.messages.length - 1]?.actions != null || conversation?.messages[conversation.messages.length - 1]?.type == "carousel")) {
			smoochDOM.querySelector('textarea')?.setAttribute('disabled', 'true');
		} else {
			smoochDOM.querySelector('textarea')?.removeAttribute('disabled');
		}
		if (footer) {
			footer.children[0].style.paddingLeft = '9px';
		}
		let speeechbubble = document.querySelector('.speech-bubble-div');
		if (speeechbubble) {
			speeechbubble.style.visibility = 'hidden';
		}
		smoochDOM.querySelector('#conversation')?.scrollTo(0, smoochDOM.querySelector('#conversation')?.scrollHeight);
		if (enableAbandon) {
			smoochDOM.querySelector('.close-handle').addEventListener('click', closeWebChat);
		}
	});
}

// Función que se ejecuta al cerrar el chat
function SmoochWidgetClosed() {
	Smooch.on('widget:closed', function () {
		let speeechbubble = document.querySelector('.speech-bubble-div');
		if (speeechbubble) {
			speeechbubble.style.display = 'block';
		}
	});
}

// Función que se ejecuta al recibir un mensaje
function SmoochMessage() {
	Smooch.on('message', function (message) {
		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		if (!inputInButtons && (message.actions != null || message.type == 'carousel')) {
			smoochDOM.querySelector('textarea')?.setAttribute('disabled', 'true');
		} else {
			smoochDOM.querySelector('textarea')?.removeAttribute('disabled');
		}
		if (((usegroups || useclassifications) && usequeue) && message.role == 'appMaker') {
			// Aquí se podrá que si el tipo de usuario es HOLDING debe mostrar el queue
			if (message.metadata?.agentName != null && message.metadata?.agentName != '') {
				if (message.metadata.agentName.substring(0,8).toLowerCase() == 'holding ') {
					showQueuePosition();
				}
			}
		}
		if (((usegroups || useclassifications) && usequeue) && message.role == 'appMaker') {
			// Aquí se cambiará a que desaparezca si el tipo de usuario de la interación es ASESOR
			if (message.metadata?.agentName != null && message.metadata?.agentName != '') {
				if (message.metadata.agentName.substring(0,4).toLowerCase() != 'bot ') {
					let queuemessageDiv = smoochDOM.querySelector('#queue-message');
					if (queuemessageDiv) {
						queuemessageDiv.innerHTML = '';
						queuemessageDiv.style.display = 'none';
					}
					try {
						clearInterval(window.zyxmefakesocket);
					} catch (e) { }
					DeleteStorageData('queueposition');
				}
			}
		}
		if (useZyxmeAgent && message.role == 'appMaker') {
			if (message.metadata?.agentName != null && message.metadata?.agentName != '') {
				smoochDOM.querySelectorAll('.from').forEach(x => x.innerText = message.metadata.agentName.split(' ')[0]);
				SetStorageData('agentName', message.metadata.agentName.split(' ')[0]);
			}
			else {
				DeleteStorageData('agentName');
			}
		}
		if (message.role == 'appMaker') {
			// Entro en encuesta
			if (message.metadata?.dateinitsurvey != null) {
				// Deshabilitando envio de archivos e imagenes
				smoochDOM.querySelector('.image-upload')?.parentElement?.remove();
				// Flag local de que está en encuesta, solo se carga la primera vez
				if (GetStorageData('zyxmesurvey') == null) {
					SetStorageData('zyxmesurvey', true);
					// Deshabilitando botones viejos
					Array.from(smoochDOM.querySelector('#conversation').querySelector('.messages').querySelectorAll('.row')).slice(0, -1).forEach(d => {
						d.querySelectorAll('button').forEach(b => b.disabled = true);
						d.querySelectorAll('.action').forEach(b => b.remove());
					});
					if (window.zyxmeexpirationtimeout == null) {
						let passedtime = new Date() - new Date(message.metadata.dateinitsurvey);
						let lefttime = message.metadata?.expirationsurveyminutes * 60 * 1000 - passedtime;
						lefttime = lefttime < 0 ? 1 : lefttime;
						// Setear cierre de chat luego de la expiración
						window.zyxmeexpirationtimeout = setTimeout(function() {
							smoochDOM.querySelector('textarea')?.setAttribute('disabled', 'true');
							SmoochRefresh();
						}, lefttime);	
					}
				}
			}
			// Cierre de ticket
			else if (message.metadata?.closedticket == true) {
				// Deshabilitando envio de archivos e imagenes
				smoochDOM.querySelector('.image-upload')?.parentElement?.remove();
				// Deshabilitando botones viejos
				Array.from(smoochDOM.querySelector('#conversation').querySelector('.messages').querySelectorAll('.row')).slice(0, -1).forEach(d => {
					d.querySelectorAll('button').forEach(b => b.disabled = true);
					d.querySelectorAll('.action').forEach(b => b.remove());
				});
				smoochDOM.querySelector('textarea')?.remove()
			}
			if (GetStorageData('zyxmesurvey') && message.metadata?.pendingsurvey == false) {
				// Si estuvo en encuesta y ya acabo la encuesta, cerrar el chat
				smoochDOM.querySelector('textarea')?.setAttribute('disabled', 'true');
				setTimeout(function() {
					SmoochRefresh();
				}, 3000)
			}
		}
		smoochDOM.querySelectorAll('.conversation-timestamp-header').forEach(x => {
			if (x.innerHTML == 'Invalid Date') {
				x.innerHTML = '';
			}
		});
	});
}

function SmoochMessageReceived() {
	Smooch.on('message:received', function (message, data) {
		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		smoochDOM.querySelector('#conversation')?.scrollTo(0, smoochDOM.querySelector('#conversation')?.scrollHeight);
	});
}

// Run SmoochInit con configuración
function SmoochStart() {
	if (useExtraData) {
		getExtraData(function () {
			SmoochInit();
		});
	} else {
		SmoochInit();
	}
}
SmoochStart();

// Creación de un div fake sobre la burbuja para mostrar el formulario
function fakeChat() {
	let smoochIcon = document.querySelector('#web-messenger-container');
	let smoochIconStyle = getComputedStyle(smoochIcon);
	if (document.querySelector('#fakeChatDiv') == null) {
		let fakeChatDiv = document.createElement('div');
		fakeChatDiv.id = 'fakeChatDiv';
		fakeChatDiv.style.width = smoochIconStyle.width;
		fakeChatDiv.style.height = smoochIconStyle.height;
		fakeChatDiv.style.bottom = smoochIconStyle.bottom;
		fakeChatDiv.style.right = smoochIconStyle.right;
		fakeChatDiv.style.position = smoochIconStyle.position;
		fakeChatDiv.style.zIndex = parseInt(smoochIconStyle.zIndex) + 1;
		fakeChatDiv.style.cursor = 'pointer';
		document.body.insertAdjacentElement('afterbegin', fakeChatDiv);
		createModal();
		fakeChatDiv.addEventListener('click', toggleUserModal);
	}
}

// Formulario Web
function buildTermsModalHTML() {
	let stringTermsModalHTML = `
	<form class="form">
		<span class="close">
			<i class="fa fa-times"></i>
		</span>
		<div class="body" style="padding-right:25px;">
			${zyxmeconfig?.termsAndConditionModalHtml || ''}
		</div>
	</form>`;
	return stringTermsModalHTML;
}

function buildGroupHTML(f, data) {
	usegroups = true;
	let selecthtml = `
		<div class="contactme-form-field-group">
			<label>${f.label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
			<select id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}" onchange="formSendValidation('${f.field}')">
				<option selected value=''>Seleccione...</option>
	`;
	data.forEach(g => {
		selecthtml += `<option value=${g.domainvalue}>${g.domaindesc}</option>`;
	});
	selecthtml += `
			</select>
			<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.validationtext}</span>
		</div>
	`;
	return selecthtml;
}

function buildClassificationHTML(f, data, level) {
	let selecthtml = `
		<div class="contactme-form-field-group">
			<label>${f.levels[level - 1].label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
			<select id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + level}" onchange="validateClassificationLevel('${f.field}', ${level}); formSendValidation('${f.field}')">
				<option selected value=''>Seleccione...</option>
	`;
	data.forEach(c => {
		selecthtml += `<option value=${c.classificationid}>${c.description}</option>`;
	});
	selecthtml += `
			</select>
			<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.messageoutoftime}</span>
		</div>
	`;
	return selecthtml;
}

function buildFormModalHTML() {
	let stringTermsHTML = zyxmeconfig.useTermsAndConditions ? `
		<div class="contactme-form-field-group">
			<input id="contactMeTerms" type="checkbox" style="width: 15px;height: 15px;" onchange="formValidation()" />
			<a href="#" onclick="toggleTermsModal()">${zyxmeconfig.termsAndConditionText || 'Términos y Condiciones'}</a>
		</div>
	` : '';
	let stringModalHTML = `
		<form class="form">
			<span class="close">
				<i class="fa fa-times"></i>
			</span>
			<div class="header">
				<img src="${zyxmeconfig.stringBusinessIconUrl}">
				<div class="app-name">${zyxmeconfig.stringBusinessName}</div>
				<div class="intro-text">${zyxmeconfig.stringIntroductionText}</div>
			</div>
			<div class="body">
	`;
	try {
		formfields.forEach(f => {
			if (f.field == 'usergroup') {
				stringModalHTML += buildGroupHTML(f, usergroups);
			}
			else if (f.field == 'classification' && clalevel1 != null) {
				stringModalHTML += buildClassificationHTML(f, clalevel1, 1);
			}
			else {
				switch (f.type) {
					case 'SIMPLE':
						if (f.field == 'email' || f.field == 'alternativeemail')	{
							stringModalHTML = stringModalHTML += `
								<div class="contactme-form-field-group">
									<label>${f.label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
									<input id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}" placeholder="${f.placeholder}" onkeypress="return /${f.keyvalidation}/.test(event.key)" oninput="formSendValidation('${f.field}')" onchange="formValidation()" />
									<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.validationtext}</span>
								</div>
							`;
							break;
						}
						else {
							stringModalHTML = stringModalHTML += `
								<div class="contactme-form-field-group">
									<label>${f.label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
									<input id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}" placeholder="${f.placeholder}" onkeypress="return /${f.keyvalidation}/.test(event.key)" oninput="formSendValidation('${f.field}')" onchange="formValidation()" />
									<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.validationtext}</span>
								</div>
							`;
							break;
						}
					case 'MULTI':
						let selecthtml = `
							<div class="contactme-form-field-group">
								<label>${f.label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
								<select id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}" onchange="formValidation('${f.field}')">
									<option selected disabled value=''>Seleccione...</option>
						`;
						if (f.values != null) {
							f.values.forEach(g => {
								selecthtml += `<option value=${g.value}>${g.text}</option>`;
							});
						}
						selecthtml += `
								</select>
								<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.validationtext}</span>
							</div>
						`;
						stringModalHTML = stringModalHTML += selecthtml;
						break;
					case 'TEXTAREA':
						stringModalHTML = stringModalHTML += `
							<div class="contactme-form-field-group">
								<label>${f.label}</label>${f.required ? '<span style="color:red">*</span>' : ''}
								<textarea id="contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}" placeholder="${f.placeholder}" onkeypress="return /${f.keyvalidation}/.test(event.key)" oninput="formSendValidation('${f.field}')" ></textarea>
								<span class="modal-input-alert" style="color:red !important;font-size:11px;display:none">${f.validationtext}</span>
							</div>
						`;
						break;
					default:
						break;
				}
			}
		});
	} catch (error) {
		console.log(error)
	}
	stringModalHTML += `
			${stringTermsHTML}
			<div style="color:red">* Campos obligatorios</div>
			<div style="text-align:right;">
				<button type="button" disabled="true">Enviar<i class="fa fa-send"></i></button>
			</div>
		</div>
	</form>`;
	return stringModalHTML;
}

function createModal() {
	if (document.querySelector('#contactModal') == null) {
		let modalDiv = document.createElement('div');
		modalDiv.id = 'contactModal';
		document.body.insertAdjacentElement('beforeend', modalDiv);
		setTimeout(function() {
			let modalContent = document.createElement('div');
			modalContent.classList.add('modal-content');
			modalContent.innerHTML = buildFormModalHTML();
			modalDiv.insertAdjacentElement('beforeend', modalContent);
			modalDiv.querySelector('.close')?.addEventListener('click', toggleUserModal);
			modalDiv.querySelector('button')?.addEventListener('click', dropFakeChat);
			if (document.querySelector("#contactMePhone") != null) {
				intlTelInput(document.querySelector("#contactMePhone"), {
					autoPlaceholder: 'off',
					separateDialCode: true,
					initialCountry: "PE",
					utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/js/utils.min.js'
				});
			}
			formValidation();
		},100);
		let termsModalDiv = document.createElement('div');
		termsModalDiv.id = 'contactTermsModal';
		document.body.insertAdjacentElement('beforeend', termsModalDiv);
		setTimeout(function() {
			let termsmodalContent = document.createElement('div');
			termsmodalContent.classList.add('modal-content');
			termsmodalContent.innerHTML = buildTermsModalHTML();
			termsModalDiv.insertAdjacentElement('beforeend', termsmodalContent);
			termsModalDiv.querySelector('.close')?.addEventListener('click', toggleTermsModal);
		}, 100);
	}
}

function getTodayTomorrow(date) {
	return [new Date(date), new Date(new Date(date).setDate(date.getDate() + 1))]
}

function splitYearMonthDay(date) {
	let datestring = new Date(date.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString()
	return [+datestring.substring(0, 4), +datestring.substring(5, 7) - 1, +datestring.substring(8, 10)];
}

function splitHourMinute(time) {
	return [+time.split(":")[0], +time.split(":")[1]]
}

function buildScheduleMessage(schedule) {
	let message = 'El horario de atención son los';
	schedule.forEach((s, i) => {
		message += i > 0 && schedule.length == i + 1 ? ' y' : i > 0 ? ',' : '';
		s.days.forEach((d, j) => {
			message += j > 0 && s.days.length == j + 1 ? ' y' : j > 0 ? ',' : '';
			message += d == '1' ? ' lunes' : '';
			message += d == '2' ? ' martes' : '';
			message += d == '3' ? ' miércoles' : '';
			message += d == '4' ? ' jueves' : '';
			message += d == '5' ? ' viernes' : '';
			message += d == '6' ? ' sábados' : '';
			message += d == '0' ? ' domingos' : '';
		});
		message += ` de ${s.start} a ${s.end}`;
	});
	return message;
}

function validateSchedule() {
	let data;
	let input;
	let schedule;
	let inschedule = false;
	let message = '';
	if (schedulefield == 'classification') {
		input = document.querySelector(`#contactMeClassification1`);
		data = clalevel1.find(cla => cla.classificationid == input.value);
	}
	else if (schedulefield == 'usergroup') {
		input = document.querySelector(`#contactMeUsergroup`);
		data = usergroups.find(ug => ug.domainvalue == input.value);
	}
	if (data != null) {
		schedule = isJSON(data.schedule) ? JSON.parse(data.schedule) : null;
	}
	if (schedule != null) {
		message = buildScheduleMessage(schedule);
		let [today, tomorrow] = getTodayTomorrow(new Date());
		let [year, month, day] = splitYearMonthDay(today);
		let [nextyear, nextmonth, nextday] = splitYearMonthDay(tomorrow);
		let todayschedules = schedule.filter(s => s.days.includes("" + today.getDay()));
		if (todayschedules.length > 0) {
			todayschedules.forEach((ts, tsi) => {
				let [hour1, minute1] = splitHourMinute(ts.start);
				let [hour2, minute2] = splitHourMinute(ts.end);
				if (hour1 * 60 + minute1 < hour2 * 60 + minute2) {
					if (today >= new Date(year, month, day, hour1, minute1) && today <= new Date(year, month, day, hour2, minute2)) {
						inschedule = true;
					}
				}
				else if (todayschedules.length - 1 == tsi) {
					let tomorrowschedules = schedule.filter(s => s.days.includes("" + tomorrow.getDay()));
					let tomorrowschedule = tomorrowschedules[0];
					if (tomorrowschedule != null) {
						[hour2, minute2] = splitHourMinute(tomorrowschedule.end);
						if (today >= new Date(year, month, day, hour1, minute1) && today <= new Date(nextyear, nextmonth, nextday, hour2, minute2)) {
							inschedule = true;
						}
						else {
							inschedule = false;
						}
					}
				}
				else {
					inschedule = false;
				}
			});
		}
		else {
			inschedule = false;
		}
	}
	else {
		inschedule = true;
	}
	
	return [inschedule, message];
}

function validateClassificationLevel(field, level) {
	let input = document.querySelector(`#contactMeClassification${level}`);
	let clason = [];
	if (level == 1) {
		maxclassificationlevel = 1;
		let child = document.querySelector(`#contactMeClassification${level + 1}`);
		if (child != null) {
			document.querySelector(`#contactMeClassification${level + 1}`).parentElement.remove();
		}
		child = document.querySelector(`#contactMeClassification${level + 2}`);
		if (child != null) {
			document.querySelector(`#contactMeClassification${level + 2}`).parentElement.remove();
		}
		clason = clalevel2.filter(cla => cla.parent == input.value);
	}
	else if (level == 2) {
		maxclassificationlevel = 2;
		let child = document.querySelector(`#contactMeClassification${level + 1}`);
		if (child != null) {
			document.querySelector(`#contactMeClassification${level + 1}`).parentElement.remove();
		}
		clason = clalevel3.filter(cla => cla.parent == input.value);
	}
	if (clason.length > 0) {
		maxclassificationlevel += 1;
		let required = formfields.find(ff => ff.field == field).required;
		let label = formfields.find(ff => ff.field == field).label;
		let levels = formfields.find(ff => ff.field == field).levels;
		let f = { 'required': required, 'label': label, 'field': field, 'levels': levels };
		let stringHTML = buildClassificationHTML(f, clason, level + 1);
		input.parentElement.insertAdjacentHTML('afterend', stringHTML);
	}
}

function toggleForm(attr, exclude, message) {
	let contactMeModal = document.querySelector('#contactModal');
	let termsCheck = document.querySelector('#contactMeTerms');
	if (attr == false) {
		contactMeModal.querySelector('button')?.setAttribute('disabled', 'true');
	}
	formfields.forEach(f => {
		let input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`);
		if (f.field == 'classification') {
			input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + 1 }`);
		}
		let isintl = input.parentElement.classList.contains('iti');
		let parent = isintl ? input.parentElement.parentElement : input.parentElement;	
		if (!exclude.split(',').includes(f.field)) {
			if (attr) {
				input.removeAttribute('disabled');
			}
			else {
				input.setAttribute('disabled', 'true');
			}
		}
		else {
			if (attr) {
				input.style.borderColor = null;
				parent.querySelector('.modal-input-alert').innerText = ''
				parent.querySelector('.modal-input-alert').style.display = 'none';
			}
			else {
				input.style.borderColor = 'red';
				parent.querySelector('.modal-input-alert').innerText = message;
				parent.querySelector('.modal-input-alert').style.display = 'block';
			}
		}
	});
}

function documentValidation() {
	let doctype = document.querySelector('#contactMeDocumenttype')?.value;
	if (doctype != null) {
		switch (doctype) {
			case 'DNI': return "^[0-9]{8}$";
			case 'CE': return "^[A-Za-z0-9]{1,12}$";
			case 'RUC': return "^[0-9]{11}$";
			case 'PASAPORTE': return "^[A-Za-z0-9]{12}$";
			case 'PARTIDA': case 'PNAC': return "^[A-Za-z0-9]{1,15}$";
			case 'OTROS': return "^[A-Za-z0-9]{1,15}$";
			default: return "^[0-9]{8}$";
		}
	}
	else {
		return "^[0-9]{8}$";
	}
}

// Validación del Formulario al escribir
function formSendValidation(field = null) {
	let contactMeModal = document.querySelector('#contactModal');
	let termsCheck = document.querySelector('#contactMeTerms');
	contactMeModal.querySelector('button')?.removeAttribute('disabled');
	formfields.forEach(f => {
		let input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`);
		if (f.field == 'classification') {
			input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + maxclassificationlevel }`);
		}
		let re = new RegExp(`^${f.inputvalidation}$`);
		if (f.required && input.value == "") {
			contactMeModal.querySelector('button').setAttribute('disabled', 'true');
		}
	});
	let f = formfields.find(f => f.field == field);
	if (f != null) {
		let input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`);
		if (f.field == 'classification') {
			input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + maxclassificationlevel }`);
		}
		let re = new RegExp(`^${f.inputvalidation}$`);
		if (f.required && input?.value == "") {
			contactMeModal.querySelector('button').setAttribute('disabled', 'true');
		}
		switch (f.type) {
			case 'SIMPLE':
				let isintl = input.parentElement.classList.contains('iti');
				let parent = isintl ? input.parentElement.parentElement : input.parentElement;
				if (f.field == 'document' || f.field == 'documentnumber') {
					re = new RegExp(`${documentValidation()}`);
				}
				if (isintl && input.value != "" && !window.intlTelInputGlobals.getInstance(input).isValidNumber()) {
					input.style.borderColor = 'red';
					parent.querySelector('.modal-input-alert').innerText = f.validationtext;
					parent.querySelector('.modal-input-alert').style.display = 'block';
					contactMeModal.querySelector('button').setAttribute('disabled', 'true');
				}
				else if (!isintl && input.value != "" && !re.test(input.value)) {
					input.style.borderColor = 'red';
					parent.querySelector('.modal-input-alert').innerText = f.validationtext;
					parent.querySelector('.modal-input-alert').style.display = 'block';
					contactMeModal.querySelector('button').setAttribute('disabled', 'true');
				}
				else {
					input.style.borderColor = null;
					parent.querySelector('.modal-input-alert').style.display = 'none';
				}
				break;
			default:
				break;
		}
	}
	if (termsCheck?.checked == false) {
		contactMeModal.querySelector('button').setAttribute('disabled', 'true');
	}
	toggleForm(true, schedulefield);
	let [inschedule, message] = validateSchedule();
	if (!inschedule) {
		toggleForm(false, schedulefield, message);
	}
}

// Validación del Formulario al cambiar
function formValidation() {
	let contactMeModal = document.querySelector('#contactModal');
	let termsCheck = document.querySelector('#contactMeTerms');
	contactMeModal.querySelector('button').removeAttribute('disabled');
	formfields.forEach(f => {
		let input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`);
		if (f.field == 'classification') {
			input = document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1) + maxclassificationlevel }`);
		}
		let re = new RegExp(`^${f.inputvalidation}$`);
		if (f.required && input.value == "") {
			contactMeModal.querySelector('button').setAttribute('disabled', 'true');
		}
		switch (f.type) {
			case 'SIMPLE':
				let isintl = input.parentElement.classList.contains('iti');
				let parent = isintl ? input.parentElement.parentElement : input.parentElement;	
				if (f.field == 'document' || f.field == 'documentnumber') {
					re = new RegExp(`${documentValidation()}`);
				}
				if (isintl && input.value != "" && !window.intlTelInputGlobals.getInstance(input).isValidNumber()) {
					input.style.borderColor = 'red';
					parent.querySelector('.modal-input-alert').style.display = 'block';
					contactMeModal.querySelector('button').setAttribute('disabled', 'true');
				}
				else if (!isintl && input.value != "" && !re.test(input.value)) {
					input.style.borderColor = 'red';
					parent.querySelector('.modal-input-alert').style.display = 'block';
					contactMeModal.querySelector('button').setAttribute('disabled', 'true');
				}
				else {
					input.style.borderColor = null;
					parent.querySelector('.modal-input-alert').style.display = 'none';
				}
				break;
			default:
				break;
		}
	});
	if (termsCheck?.checked == false) {
		contactMeModal.querySelector('button').setAttribute('disabled', 'true');
	}
	toggleForm(true, schedulefield);
	let [inschedule, message] = validateSchedule();
	if (!inschedule) {
		toggleForm(false, schedulefield, message);
	}
}

// Función para mostrar y ocultar el formulario
function toggleUserModal() {
	let smoochDOM = window.frames['web-messenger-container'].contentDocument;
	let contactmodal = document.querySelector('#contactModal');
	let speechbubble = document.querySelector('.speech-bubble-div');
	if (contactmodal.style.display == 'block') {
		smoochDOM.querySelector('#messenger-button')?.querySelector('img')?.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
		if (contactmodal) {
			contactmodal.style.opacity = '0';
		}
		if (speechbubble) {
			speechbubble.style.display = 'block';
		}
		setTimeout(function() {
			if (contactmodal) {
				contactmodal.style.display = 'none';
			}
			if (speechbubble) {
				speechbubble.style.opacity = '1';
			}
		}, 200);
	}
	else {
		let buttonURL = zyxmeconfig.stringCancelIconUrl != '' ? zyxmeconfig.stringCancelIconUrl : zyxmeconfig.stringButtonIconUrl;
		smoochDOM.querySelector('#messenger-button')?.querySelector('img')?.setAttribute('src', buttonURL);
		if (contactmodal) {
			contactmodal.style.display = 'block';
		}
		if (speechbubble) {
			speechbubble.style.opacity = '0';
		}
		setTimeout(function() {
			if (contactmodal) {
				contactmodal.style.opacity = '1';
			}
			if (speechbubble) {
				speechbubble.style.display = 'none';
			}
		}, 200);
	}
}

// Función para mostrar y ocultar el formulario al hacer click fuera del modal
window.onclick = function (event) {
	let smoochDOM = window.frames['web-messenger-container']?.contentDocument;
	if (smoochDOM != null) {
		let contactmodal = document.querySelector('#contactModal');
		let speechbubble = document.querySelector('.speech-bubble-div');
		if (zyxmeconfig.formCloseClickout && event.target == contactmodal) {
			let smoochDOM = window.frames['web-messenger-container'].contentDocument;
			smoochDOM.querySelector('#messenger-button').querySelector('img')?.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
			if (contactmodal) {
				contactmodal.style.opacity = '0';
			}
			if (speechbubble) {
				speechbubble.style.display = 'block';
			}
			setTimeout(function() {
				if (contactmodal) {
					contactmodal.style.display = 'none';
				}
				if (speechbubble) {
					speechbubble.style.opacity = '1';
				}
			}, 200);
		}
	}
}

// Función para mostrar y ocultar el modal de términos y condiciones
function toggleTermsModal() {
	if (document.querySelector('#contactTermsModal')?.style.display == 'block') {
		document.querySelector('#contactTermsModal').style.display = 'none';
	}
	else {
		document.querySelector('#contactTermsModal').style.display = 'block';
	}
}

// Funcion para obtener la data del formulario
function getFormDataField() {
	let fields = []
	formfields.forEach(f => {
		if (f.field == 'classification') {
			fields.push({
				"Label": f.label,
				"Name": f.field,
				"Type": "text",
				"Text": getClassificationDescription() || ''
			});
			if (!usegroups) {
				fields.push({
					"Label": f.levels[maxclassificationlevel - 1].label || "Grupo",
					"Name": "usergroup",
					"Type": "text",
					"Text": getUserGroupValue() || ''
				});
			}
		}
		else if (f.field == 'phone') {
			fields.push({
				"Label": f.label,
				"Name": f.field,
				"Type": "text",
				"Text": window.intlTelInputGlobals.getInstance(document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`)).getNumber().split('+')[1]
			});
			
		}
		else {
			fields.push({
				"Label": f.label,
				"Name": f.field,
				"Type": "text",
				"Text": document.querySelector(`#contactMe${f.field?.charAt(0).toUpperCase() + f.field?.slice(1)}`)?.value || ''
			});
		}
	});
	if (zyxmeconfig.useTermsAndConditions) {
		fields.push(
			{
				"Label": "Términos",
				"Name": "termsandconditions",
				"Type": "text",
				"Text": new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 23).replace('T', ' ')
			}
		);
	}
	return fields;
}

// Función que retorna la data a enviar al hook
function buildHookDataRequest() {
	let fields = getFormDataField();
	let formdata = {};
	fields.forEach(function (x) { { formdata[x.Name] = x.Text || x.Email; } });
	let extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
	extraData.formdata = formdata;
	// extraData.refererurl = window.location.href;
	extraData.platform = platform || '';
	extraData.smoochsessionid = GetStorageData('smoochsessionid');
	if (usegroups || useclassifications) {
		extraData.usergroup = getUserGroupValue();
	}
	extraData.enquiries = document.querySelector('#contactMeEnquiries')?.value
	if (zyxmeconfig.scriptvariable != null) {
		extraData.scriptvariable = zyxmeconfig.scriptvariable; // Variable seteada desde el script para que llegue a chatflow
	}
	let newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
	let data = {
		"Trigger": "message:appUser",
		"AppUser": {
			"_id": newAppUserId
		},
		"App": {
			"_id": zyxmeconfig.smoochAppId
		},
		"Messages": [
			{
				"Source": {
					"Type": "web"
				},
				"Fields": fields,
				"Type": "formResponse",
				"Metadata": {
					"ExtraData": JSON.stringify(extraData),
					"Url": window.location.href
				}
			}
		],
		"FromCompany": zyxmeconfig.company,
		"FormName": document.querySelector('#contactMeName') != null ? document.querySelector('#contactMeName').value : ''
	};
	return data;
}

function getClassificationDescription() {
	let cladesc = '';
	if (useclassifications) {
		let claid = document.querySelector(`#contactMeClassification${maxclassificationlevel}`)?.value;
		switch (maxclassificationlevel) {
			case 1: cladesc = clalevel1.find(cla => cla.classificationid == claid)?.path; break;
			case 2: cladesc = clalevel2.find(cla => cla.classificationid == claid)?.path; break;
			case 3: cladesc = clalevel3.find(cla => cla.classificationid == claid)?.path; break;
		}
	}
	return cladesc;
}

function getUserGroupValue() {
	let usergroup = null;
	if (useclassifications) {
		let usergroupid = classifications.find(c => c.classificationid == document.querySelector('#contactMeClassification' + maxclassificationlevel)?.value)?.usergroup;
		usergroup = usergroups.find(u => u.domainid == usergroupid)?.domainvalue || '';
	}
	if (usegroups) {
		usergroup = document.querySelector('#contactMeUsergroup')?.value;
	}
	return usergroup;
}

// Ejecución de Enviar data del Formulario
function dropFakeChat() {
	formValidation();
	let smoochDOM = window.frames['web-messenger-container'].contentDocument;
	let contactMeModal = document.querySelector('#contactModal');
	if (!contactMeModal.querySelector('button')["disabled"]) {
		contactMeModal.querySelector('button').setAttribute('disabled', 'true');
		let usergroup = getUserGroupValue();
		if (usegroups || useclassifications) {
			if (usegroupslimit) {
				validateUserLimit(usergroup);
			}
			else {
				if (useJWTlogin) {
					sendHookRequestWithJWT();
				} else {
					sendHookRequestWithoutJWT();
				}
			}
		}
		else {
			if (useJWTlogin) {
				sendHookRequestWithJWT();
			} else {
				sendHookRequestWithoutJWT();
			}
		}
	}
}

function validateUserLimit(usergroup) {
	let contactMeModal = document.querySelector('#contactModal');
	fetch(zyxmeconfig.webchatscriptUrl + '/group/' + zyxmeconfig.smoochAppId + '/' + usergroup).then(function (response) {
		response.json().then(function (res) {
			if (res.result.access) {
				if (useJWTlogin) {
					sendHookRequestWithJWT();
				} else {
					sendHookRequestWithoutJWT();
				}
			}
			else {
				contactMeModal.querySelector('button').removeAttribute('disabled');
				let msg = res.result.msg;
				msg = msg.replace('{{limit}}-{{position}}', res.result.limit - res.result.position);
				msg = msg.replace('{{position}}-{{limit}}', res.result.position - res.result.limit);
				msg = msg.replace('{{limit}}', res.result.limit);
				msg = msg.replace('{{position}}', res.result.position);
				alert(msg);
			}
		});
	}).catch(function (error) {
		contactMeModal.querySelector('button').removeAttribute('disabled');
	});
}

// Función para actualizar la data del usuario luego del StartConversation
function SmoochUpdateUser() {
	Smooch.updateUser({
		givenName: document.querySelector('#contactMeName')?.value || document.querySelector('#contactMeFirstname')?.value,
		surname: '',
		email: '',
		properties: {
			'justGotUpdated': true
		}
	});
}

// Function fecth al hook
function sendHookRequest(data) {
	fetch(zyxmeconfig.webhookUrl, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(() => {
		let contactMeModal = document.querySelector('#contactModal');
		if ((usegroups || useclassifications) && usequeue) {
			// Flag para crear el interval que consulta el queue position
			SetStorageData('queueposition', "");
			// fetch para obtener el conversationid
			let smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
			setTimeout(function() {
				fetch(zyxmeconfig.webchatscriptUrl + '/conversation/' + zyxmeconfig.smoochAppId + '/' + smoochAppUserId).then(function (res1) {
					res1.json().then(function (res2) {
						if (res2?._success) {
							SetStorageData('conversationid', res2?.result?.conversationid);
							SetStorageData('lastusertype', res2?.result?.lastusertype);
						}
						let smoochDOM = window.frames['web-messenger-container'].contentDocument;
						smoochDOM.querySelector('#messenger-button').querySelector('img')?.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
						let contactmodal = document.querySelector('#contactModal');
						if (contactmodal) {
							contactmodal.style.display = 'none';
						}
						try { document.querySelector('#fakeChatDiv').remove(); } catch (error) { }
						contactMeModal.querySelector('button').removeAttribute('disabled');
						Smooch.open();
					})
				});
			}, 3000)
		}
		else {
			let smoochDOM = window.frames['web-messenger-container'].contentDocument;
			smoochDOM.querySelector('#messenger-button').querySelector('img')?.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
			let contactmodal = document.querySelector('#contactModal');
			if (contactmodal) {
				contactmodal.style.display = 'none';
			}
			try { document.querySelector('#fakeChatDiv').remove(); } catch (error) { }
			contactMeModal.querySelector('button').removeAttribute('disabled');
			Smooch.open();
		}
	}).catch(function (error) {
		contactMeModal.querySelector('button').removeAttribute('disabled');
	});
}

function showQueuePosition() {
	let smoochDOM = window.frames['web-messenger-container'].contentDocument;
	let queuemessageDiv = smoochDOM.querySelector('#queue-message');
	if (queuemessageDiv) {
		queuemessageDiv.innerHTML = '';
		queuemessageDiv.style.display = 'block';
		queuePositionRefresh();
	}
}

function queuePositionRefresh() {
	let conversationid = GetStorageData('conversationid');
	if ((usegroups || useclassifications)) {
		getConversationPosition();
		try {
			clearInterval(window.zyxmefakesocket);
		} catch (e) { }
		window.zyxmefakesocket = setInterval(function () {
			getConversationPosition();
		}, queuerefreshdelay);
	}
}

function getConversationPosition() {
	let conversationid = GetStorageData('conversationid');
	if (conversationid != null) {
		fetch(zyxmeconfig.webchatscriptUrl + '/conversation/position/' + zyxmeconfig.smoochAppId + '/' + conversationid).then(function (res3) {
			res3.json().then(function (res4) {
				if (res4._success) {
					let position = 1;
					let waitingtime = '00:00';
					if (res4.result != null) {
						position = res4.result?.queueposition;
						waitingtime = res4.result?.waitingtime;
					}
					else {
						position = 1
						waitingtime = '00:00'
						try {
							clearInterval(window.zyxmefakesocket);
						} catch (e) { }
					}
					SetStorageData('queueposition', res4.result?.queueposition);
					let smoochDOM = window.frames['web-messenger-container']?.contentDocument;
					if (smoochDOM != null) {
						let queuemessageDiv = smoochDOM.querySelector('#queue-message');
						if (queuemessageDiv) {
							let queuemessage = zyxmeconfig?.queuemessage || '';
							queuemessage = queuemessage.replace('{{position}}', position);
							let [hh, mi] = waitingtime.split(':');
							queuemessage = queuemessage.replace('{{waitingtime}}', (+hh)*60+(+mi));
							queuemessageDiv.innerHTML = queuemessage;
						}
					}
				}
			});
		}).catch(function (error) {
			console.log(error);
		});
	}
}

// Append App User Id
function appendNewAppUserId(key) {
	switch (key) {
		case 'DNI':
			let doctypetag = document.querySelector('#contactMeDocumenttype');
			let docnumtag = document.querySelector('#contactMeDocument');
			if (docnumtag != null) {
				return (doctypetag?.value || '') + (docnumtag?.value || '');
			}
			break;
		case 'FULLNAME':
			let nametag = document.querySelector('#contactMeName');
			if (nametag != null) {
				return nametag?.value || '';
			}
		case 'FIRSTNAME':
			let firstnametag = document.querySelector('#contactMeFirstname');
			if (firstnametag != null) {
				return firstnametag?.value || '';
			}
			break;
		case 'PHONE':
			let phonetag = document.querySelector('#contactMePhone');
			if (phonetag != null) {
				return window.intlTelInputGlobals.getInstance(phonetag).getNumber().split('+')[1] || '';
			}
			break;
		case 'CLIENTNUMBER':
			let clientnumbertag = document.querySelector('#contactMeClientnumber');
			if (clientnumbertag != null) {
				return clientnumbertag?.value || '';
			}
			break;
		default:
			return '';
	}
	return '';
}

// Nuevo App User Id
function createNewAppUserId(oldUserId) {
	let newAppUserId = oldUserId;
	let appendAppUserId = (appendNewAppUserId(zyxmeconfig.userkey) != '' ? '_' + appendNewAppUserId(zyxmeconfig.userkey) : '');
	if (zyxmeconfig.userkey != '' && appendAppUserId != '') {
		newAppUserId = newAppUserId + "_WEBM" + appendAppUserId;
	}
	SetStorageData(zyxmeconfig.integrationId + '.newAppUserId', newAppUserId);
	return newAppUserId;
}

// HookRequest con JWT
function sendHookRequestWithJWT() {
	let data = buildHookDataRequest();
	let jwtData = {
		"appid": zyxmeconfig.smoochAppId,
		"userdate": sessionStorage["currentDateGetTime"] || new Date().getTime(),
		"userkey": appendNewAppUserId(zyxmeconfig.userkey)
	}
	fetch(`${zyxmeconfig.webchatscriptUrl}/pool`, {
		method: 'POST',
		body: JSON.stringify(jwtData),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(function (response) {
		if (response.ok) {
			response.json().then(function (response) {
				if (response["_success"]) {
					if (response["userdate"] != null && response["userdate"] != '') {
						sessionStorage["currentDateGetTime"] = +response["userdate"];
					}
					SetStorageData('smoochsessionid', response["smoochsessionid"]);
					let smoochUserId = `${response["corpid"]}_${response["orgid"]}_${response["communicationchannelid"]}_${zyxmeconfig.smoochAppId}_${response["smoochsessionid"]}`;
					Smooch.login(smoochUserId, response["jwt"]).then(function () {
						let currentUser = Smooch.getUser();
						SetStorageData(zyxmeconfig.integrationId + '.smoochUserId', smoochUserId);
						SetStorageData(zyxmeconfig.integrationId + '.smoochAppUserId', '' + response["appUserId"]);
						SetStorageData(zyxmeconfig.integrationId + '.smoochJWT', response["jwt"]);
						Smooch.startConversation().then(function () {
							let smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.appUserId') || GetStorageData(zyxmeconfig.integrationId + '.smoochAppUserId');
							let dataNewConversation = buildHookDataRequest();
							let newAppUserId = createNewAppUserId(currentUser._id);
							dataNewConversation["AppUser"]["_id"] = newAppUserId;
							sendHookRequest(dataNewConversation);
						});
					});
				}
				else {
					console.log(response);
				}
			});
		}
	}).catch(function (error) {
		console.log(error);
	});
}

// HookRequest sin JWT
function sendHookRequestWithoutJWT() {
	let data = buildHookDataRequest();
	Smooch.startConversation().then(function () {
		let newAppUserId = createNewAppUserId(GetStorageData(zyxmeconfig.integrationId + ".appUserId"));
		data["AppUser"]["_id"] = newAppUserId;
		SmoochUpdateUser();
		sendHookRequest(data);
	});
}

// Request para obtener data del IP
function getExtraData(callback) {
	let clientExtraData;
	try {
		fetch('https://www.cloudflare.com/cdn-cgi/trace').then(function (response) {
			response.text().then(function (response) {
				let res = response.split("\n");
				let extradata = "{";
				for (let i = 0; i < res.length - 1; i++) {
					let key = res[i].split("=")[0];
					let value = res[i].split("=")[1]
					extradata += `"${key}":"${value}",`
				}
				extradata = extradata.substring(0, extradata.length - 1);
				extradata += "}";
				localStorage.setItem('SmoochExtraData', extradata);
				callback();
			});
		}).catch(function (error) {
			callback();
		});
	} catch (error) {
		callback();
	}
}

// Función para mostrar y ocultar el formulario
async function closeUserModal() {
	let smoochDOM = window.frames['web-messenger-container'].contentDocument;
	let contactmodal = document.querySelector('#contactModal');
	let speechbubble = document.querySelector('.speech-bubble-div');
	if (contactmodal?.style.display == 'block') {
		smoochDOM.querySelector('#messenger-button')?.querySelector('img')?.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
		if (contactmodal) {
			contactmodal.style.opacity = '0';
		}
		if (speechbubble) {
			speechbubble.style.display = 'block';
		}
		await timeout(200);
		if (contactmodal) {
			contactmodal.style.display = 'none';
		}
		if (speechbubble) {
			speechbubble.style.opacity = '1';
		}
	}
}

// Función para mostrar y ocultar el formulario
async function openUserModal() {
	if (GetStorageData(zyxmeconfig.integrationId + '.clientId') != null) {
		Smooch.open();
	}
	else {
		let smoochDOM = window.frames['web-messenger-container'].contentDocument;
		let contactmodal = document.querySelector('#contactModal');
		let speechbubble = document.querySelector('.speech-bubble-div');
		if (!(contactmodal.style.display == 'block')) {
			let buttonURL = zyxmeconfig.stringCancelIconUrl != '' ? zyxmeconfig.stringCancelIconUrl : zyxmeconfig.stringButtonIconUrl;
			smoochDOM.querySelector('#messenger-button').querySelector('img')?.setAttribute('src', buttonURL);
			if (contactmodal) {
				contactmodal.style.display = 'block';
			}
			if (speechbubble) {
				speechbubble.style.opacity = '0';
			}
			await timeout(200);
			if (contactmodal) {
				contactmodal.style.opacity = '1';
			}
			if (speechbubble) {
				speechbubble.style.display = 'none';
			}
		}
	}
}