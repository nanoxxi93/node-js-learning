"use strict";

var _zyxmeconfig$classifi, _zyxmeconfig$classifi2, _zyxmeconfig$classifi3;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

SmoochCleanStorage();
var validNavigation = false;

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function loadScript(u) {
  var s = document.createElement('script');
  s.src = u;
  document.body.appendChild(s);
  return new Promise(function (res, rej) {
    s.onload = function () {
      res();
    };

    s.onerror = function () {
      rej();
    };
  });
}

function runScript(u) {
  var s = document.createElement('script');
  s.innerText = u;
  document.body.appendChild(s);
  return new Promise(function (res, rej) {
    s.onload = function () {
      res();
    };

    s.onerror = function () {
      rej();
    };
  });
}

function isJSON(str) {
  try {
    return JSON.parse(str) && !!str;
  } catch (e) {
    return false;
  }
} // Función para obtener la data según configuración local o session


function GetStorageData(key) {
  switch (zyxmeconfig.storageType) {
    case 'localStorage':
      return localStorage[key];

    case 'sessionStorage':
      return sessionStorage[key];

    default:
      return '';
  }
} // Función para obtener la data según configuración local o session


function SetStorageData(key, value) {
  switch (zyxmeconfig.storageType) {
    case 'localStorage':
      localStorage[key] = value;

    case 'sessionStorage':
      sessionStorage[key] = value;
  }
} // Función para borrar la data según configuración local o session


function DeleteStorageData(key, value) {
  switch (zyxmeconfig.storageType) {
    case 'localStorage':
      localStorage.removeItem(key);

    case 'sessionStorage':
      sessionStorage.removeItem(key);
  }
}

var imageUploadOption = zyxmeconfig.imageUploadOption;
var fileUploadOption = zyxmeconfig.fileUploadOption;
var shareLocationOption = zyxmeconfig.shareLocationOption;
var cssHeaderHTML = zyxmeconfig.cssHeaderHTML;
var cssBodyHTML = zyxmeconfig.cssBodyHTML;
var jsBodyHTML = zyxmeconfig.jsBodyHTML;
var useJWTlogin = zyxmeconfig.useJWTlogin;
var historyTimeHours = zyxmeconfig.historyTimeHours;
var useLogoLink = zyxmeconfig.useLogoLink;
var inputInButtons = zyxmeconfig.inputInButtons;
var useExtraData = zyxmeconfig.useExtraData;
var enableAbandon = zyxmeconfig.enableAbandon;
var useZyxmeAgent = zyxmeconfig.useZyxmeAgent;
var useRefresh = zyxmeconfig.useRefresh;
var useFormModal = zyxmeconfig.useFormModal;
var sendInitChat = zyxmeconfig.sendInitChat;
var usegroups = zyxmeconfig.usegroups;
var usegroupslimit = zyxmeconfig.usegroupslimit;
var formfields = zyxmeconfig.formfields;
var usergroups = zyxmeconfig.usergroups;
var useclassifications = zyxmeconfig.useclassifications;
var classifications = zyxmeconfig.classifications;
var maxclassificationlevel = 1;
var clalevel1temp = (_zyxmeconfig$classifi = zyxmeconfig.classifications) === null || _zyxmeconfig$classifi === void 0 ? void 0 : _zyxmeconfig$classifi.filter(function (c) {
  return c.parent == 0;
});
var clalevel2temp = (_zyxmeconfig$classifi2 = zyxmeconfig.classifications) === null || _zyxmeconfig$classifi2 === void 0 ? void 0 : _zyxmeconfig$classifi2.filter(function (c) {
  return clalevel1temp.map(function (cc) {
    return cc.classificationid;
  }).includes(c.parent);
});
var clalevel3temp = (_zyxmeconfig$classifi3 = zyxmeconfig.classifications) === null || _zyxmeconfig$classifi3 === void 0 ? void 0 : _zyxmeconfig$classifi3.filter(function (c) {
  return clalevel2temp.map(function (cc) {
    return cc.classificationid;
  }).includes(c.parent);
});
var clalevel3 = clalevel3temp === null || clalevel3temp === void 0 ? void 0 : clalevel3temp.filter(function (c) {
  return c.usergroup != 0;
});
var clalevel2 = clalevel2temp === null || clalevel2temp === void 0 ? void 0 : clalevel2temp.filter(function (c) {
  return clalevel3.map(function (cc) {
    return cc.parent;
  }).includes(c.classificationid) || c.usergroup != 0;
});
var clalevel1 = clalevel1temp === null || clalevel1temp === void 0 ? void 0 : clalevel1temp.filter(function (c) {
  return clalevel2.map(function (cc) {
    return cc.parent;
  }).includes(c.classificationid) || c.usergroup != 0;
});
var usequeue = zyxmeconfig.usequeue;
var queuerefreshdelay = zyxmeconfig.queuerefreshdelay;
var queuetooltip = zyxmeconfig.queuetooltip;
var schedulefield = zyxmeconfig.schedulefield;
loadScript('https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/js/intlTelInput.min.js').then(function () {})["catch"](function () {});
loadScript('https://cdn.jsdelivr.net/gh/nanoxxi93/js/platform.1.3.6.min.js').then(function () {})["catch"](function () {}); // Librerías de estilos

document.querySelector('head').insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"".concat(zyxmeconfig.webchatStyleUrl, "\" />"));
document.querySelector('head').insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />");
document.querySelector('head').insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/css/intlTelInput.min.css\" />");
document.querySelector('head').insertAdjacentHTML("beforeend", "<style> #contactModal .modal-content .header{ background:#".concat(zyxmeconfig.brandColor, "; } #contactModal .modal-content button{ background:#").concat(zyxmeconfig.textColor, "; } </style>"));
document.querySelector('head').insertAdjacentHTML("beforeend", "<style>".concat(cssHeaderHTML, "</style>"));
document.querySelector('body').insertAdjacentHTML("beforeend", "<style>".concat(cssBodyHTML, "</style>")); // Integración con Smooch

!function (e, n, t, r) {
  function o() {
    try {
      var e;

      if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
        var t = n.getElementsByTagName("script")[0],
            r = n.createElement("script");
        r.async = !0, r.src = e.url, t.parentNode.insertBefore(r, t);
      }
    } catch (e) {}
  }

  var s,
      p,
      a,
      i = [],
      c = [];
  e[t] = {
    init: function init() {
      s = arguments;
      var e = {
        then: function then(n) {
          return c.push({
            type: "t",
            next: n
          }), e;
        },
        "catch": function _catch(n) {
          return c.push({
            type: "c",
            next: n
          }), e;
        }
      };
      return e;
    },
    on: function on() {
      i.push(arguments);
    },
    render: function render() {
      p = arguments;
    },
    destroy: function destroy() {
      a = arguments;
    }
  }, e.__onWebMessengerHostReady__ = function (n) {
    if (delete e.__onWebMessengerHostReady__, e[t] = n, s) for (var r = n.init.apply(n, s), o = 0; o < c.length; o++) {
      var u = c[o];
      r = "t" === u.type ? r.then(u.next) : r["catch"](u.next);
    }
    p && n.render.apply(n, p), a && n.destroy.apply(n, a);

    for (o = 0; o < i.length; o++) {
      n.on.apply(n, i[o]);
    }
  };
  var u = new XMLHttpRequest();
  u.addEventListener("load", o), u.open("GET", "https://" + r + ".webloader.smooch.io/", !0), u.responseType = "json", u.send();
}(window, document, "Smooch", zyxmeconfig.smoochAppId); // Función para cerrar completamente el chat web

function closeWebChat() {
  var smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');

  if (smoochAppUserId != null) {
    var dataCloseConversation = {
      "AppId": zyxmeconfig.smoochAppId,
      "AppUserId": smoochAppUserId,
      "PlatformType": "WEBM",
      "MessageText": "Cliente abandonó la conversación"
    };
    var dataCloseFormData = new FormData();
    dataCloseFormData.append("data", JSON.stringify(dataCloseConversation));
    navigator.sendBeacon(zyxmeconfig.webchatscriptUrl + '/abandoned', dataCloseFormData);
    SmoochRefresh();
  }
} // Envia notificacion en el evento beforeunload


window.addEventListener('beforeunload', function (e) {
  var smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');

  if (smoochAppUserId != null) {
    var dataCloseConversation = {
      "AppId": zyxmeconfig.smoochAppId,
      "AppUserId": smoochAppUserId,
      "PlatformType": "WEBM",
      "MessageText": "Cliente abandonó la conversación"
    };
    var dataCloseFormData = new FormData();
    dataCloseFormData.append("data", JSON.stringify(dataCloseConversation));

    if (enableAbandon && !validNavigation && Smooch != null && Smooch.getUser() != null && Smooch.getConversation().messages.length > 0) {
      navigator.sendBeacon(zyxmeconfig.webchatscriptUrl + '/abandoned', dataCloseFormData);
      return null;
    }
  } else {
    return null;
  }
}); // Filtra los eventos unload que no sean F5, click en link o submit

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
  }; // Attach the event click for all links in the page


  document.querySelectorAll('a').forEach(function (x) {
    if (x['href'] != '' && x['href'] != '#' && x['href'] != 'javascript:;') {
      x.addEventListener('click', function () {
        validNavigation = true;
      });
    }
  }); // Attach the event submit for all forms in the page

  document.querySelectorAll('form').forEach(function (x) {
    x.addEventListener('submit', function () {
      validNavigation = true;
    });
  }); // Attach the event click for all inputs in the page

  document.querySelectorAll('input[type=submit]').forEach(function (x) {
    x.addEventListener('click', function () {
      validNavigation = true;
    });
  });
}; // Función para ocultar el speechBubble


function speechBubbleRemove() {
  var speechbubble = document.querySelector('.speech-bubble-div');

  if (speechbubble) {
    speechbubble.style.visibility = 'hidden';
  }
} // Carga de elementos dentro de frame del chat web


function SmoochOnReady() {
  Smooch.on('ready', function () {
    var smoochDOM = window.frames['web-messenger-container'].contentDocument;
    var head = smoochDOM.head;
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"".concat(zyxmeconfig.webchatStyleUrl, "\" />"));
    head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />");
    head.insertAdjacentHTML("beforeend", "<style>\n\t\tbody #mount .intro-pane{ background:#".concat(zyxmeconfig.brandColor, "; }\n\t\t\n\t\tbody #mount #container #conversation .row .msg-wrapper .carousel-content .carousel-title{font-weight:600!important;font-size:14px!important;color:#").concat(zyxmeconfig.brandColor, "!important;margin:5px!important;}\n\t\tbody #mount #container #conversation .row .msg-wrapper .carousel-content .carousel-description{color:#").concat(zyxmeconfig.brandColor, "!important;font-size:12px!important;margin:5px!important;}\n\t\tbody #mount #container #conversation .row .msg-wrapper .carousel-container .scroll-container > div:not(.carousel-item){ background:#").concat(zyxmeconfig.textColor, "!important; box-shadow:none;!important top:calc(50% - 15px);!important}\n\t\tbody #mount #container #conversation .row .msg-wrapper .carousel-container .scroll-container > div:not(.carousel-item) i{ border-color:#FFFFFF!important; }\n\t\tbody #mount #container #conversation .row .msg-wrapper .carousel-content .action .btn{color:#").concat(zyxmeconfig.textColor, "!important;border:1px solid #").concat(zyxmeconfig.textColor, "!important;border-radius:0!important;margin:auto auto 15px auto!important;font-weight:400!important;width:194px!important;height:38px!important;font-size:16px;line-height:24px;}\n\t\t\n\t\tbody #mount #container #conversation .reply-container{text-align:center;}\n\t\tbody #mount #container #conversation .reply-container .btn-reply-action, .reply-container .btn{background-color:#").concat(zyxmeconfig.textColor, "!important;border-color:#").concat(zyxmeconfig.textColor, "!important;font-size:16px!important;font-weight:400!important;height:38px!important;padding:3px 7px 3px!important;}\n\t\tbody #mount #container #conversation .reply-container .btn-reply-action span, .reply-container .btn span{color:#FFF;}\n\t\t</style>"));
    head.insertAdjacentHTML("beforeend", "<style>".concat(cssHeaderHTML, "</style>"));
    smoochDOM.body.insertAdjacentHTML("beforeend", "<style>".concat(cssBodyHTML, "</style>"));
    var logo = smoochDOM.querySelector('.logo');
    var logoatag = logo === null || logo === void 0 ? void 0 : logo.querySelector('a');
    var logoImg = logo.querySelector('img');

    if (useLogoLink) {
      logoatag === null || logoatag === void 0 ? void 0 : logoatag.removeAttribute("rel");
      Object.assign(logoatag, {
        href: 'https://zyxme.com/'
      });
      logoatag === null || logoatag === void 0 ? void 0 : logoatag.setAttribute('href', '#');
      logoatag === null || logoatag === void 0 ? void 0 : logoatag.removeAttribute('target');
      Object.assign(logoImg, {
        src: zyxmeconfig.zyxmeLogoUrl,
        srcset: zyxmeconfig.zyxmeLogoUrl,
        alt: 'Zyxme Servicios de Chatbots en Lima'
      });
    } else {
      if (logo != null) {
        logo.remove();
      }
    }

    var conversation = smoochDOM.querySelector('#conversation');
    var messagesContainer = conversation.querySelector('.messages-container');

    if (messagesContainer) {
      messagesContainer.style.maxHeight = '85%';
    }

    if (useZyxmeAgent && GetStorageData('agentName') != null) {
      smoochDOM.querySelectorAll('.from').forEach(function (x) {
        return x.innerText = GetStorageData('agentName');
      });
    }
  });
} // Inicialización de Smooch


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
      beforeDisplay: function beforeDisplay(message, data) {
        var _message$text;

        if (message !== null && message !== void 0 && (_message$text = message.text) !== null && _message$text !== void 0 && _message$text.includes('.mp4')) {
          message.actions = [{
            type: 'webview',
            text: 'Ver Video',
            uri: message.text,
            fallback: message.text
          }];
          message.text = '';
        }

        if (historyTimeHours != null && (message === null || message === void 0 ? void 0 : message.received) < (+sessionStorage["currentDateGetTime"] - historyTimeHours * 60 * 60 * 1000) / 1000) {
          return null;
        }

        return message;
      },
      beforeSend: function beforeSend(message) {
        var extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
        extraData.newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
        message.metadata = {
          extraData: JSON.stringify(extraData),
          url: window.location.href
        };
        return message;
      },
      beforePostbackSend: function beforePostbackSend(postback) {
        var extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
        extraData.newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
        postback.metadata = {
          extraData: JSON.stringify(extraData),
          url: window.location.href
        };
        return postback;
      }
    }
  }).then(function () {
    var _smoochDOM$querySelec, _smoochDOM$querySelec2;

    var smoochDOM = window.frames['web-messenger-container'].contentDocument;
    zyxmeconfig.stringBusinessIconUrl = zyxmeconfig.stringBusinessIconUrl != '' ? zyxmeconfig.stringBusinessIconUrl : (_smoochDOM$querySelec = smoochDOM.querySelector('.app-icon')) === null || _smoochDOM$querySelec === void 0 ? void 0 : _smoochDOM$querySelec.src;
    var conversation = Smooch.getConversation();

    try {
      if (conversation.messages.length == 0) {
        if (useFormModal) {
          fakeChat();
        }
      } else if (enableAbandon && Smooch != null && Smooch.getUser() != null && Smooch.getConversation().messages.length > 0) {
        var smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
        var PlatformType = "WEBM";
        var MessageText = "Cliente recuperó la conversación";
        fetch("".concat(zyxmeconfig.webchatscriptUrl, "/recovery/").concat(zyxmeconfig.smoochAppId, "/").concat(smoochAppUserId, "/").concat(PlatformType, "/").concat(MessageText)).then(function (response) {
          response.json().then(function (response) {
            return null;
          });
        })["catch"](function (error) {
          console.log(error);
        });
      }
    } catch (error) {}

    var zyxmeOptions = document.createElement('div');
    zyxmeOptions.id = 'zyxme-options';
    (_smoochDOM$querySelec2 = smoochDOM.querySelector('.intro-pane')) === null || _smoochDOM$querySelec2 === void 0 ? void 0 : _smoochDOM$querySelec2.insertAdjacentElement('beforeend', zyxmeOptions);

    if ((usegroups || useclassifications) && usequeue) {
      var _smoochDOM$querySelec3, _smoochDOM$querySelec4;

      (_smoochDOM$querySelec3 = smoochDOM.querySelector('.app-name')) === null || _smoochDOM$querySelec3 === void 0 ? void 0 : _smoochDOM$querySelec3.setAttribute("style", "margin-right: 20px;"); // smoochDOM.querySelector('.intro-text')?.setAttribute("style", "margin-right: 20px;");

      var queuemessageDiv = document.createElement('div');
      queuemessageDiv.id = 'queue-message';
      queuemessageDiv.style.display = 'none';
      (_smoochDOM$querySelec4 = smoochDOM.querySelector('.intro-pane')) === null || _smoochDOM$querySelec4 === void 0 ? void 0 : _smoochDOM$querySelec4.insertAdjacentElement('beforeend', queuemessageDiv);
    }

    if (useRefresh) {
      var _smoochDOM$querySelec5;

      var refreshDiv = document.createElement('div');
      refreshDiv.classList.add('refresh-handle');
      refreshDiv.addEventListener('click', SmoochRefresh);
      var refreshIcon = document.createElement('i');
      refreshIcon.classList.add('fa', 'fa-refresh');
      refreshDiv.insertAdjacentElement('beforeend', refreshIcon);
      (_smoochDOM$querySelec5 = smoochDOM.querySelector('#zyxme-options')) === null || _smoochDOM$querySelec5 === void 0 ? void 0 : _smoochDOM$querySelec5.insertAdjacentElement('beforeend', refreshDiv);
    }

    if (zyxmeconfig.useSpeechBubble && document.querySelector('.speech-bubble-div') == null) {
      setTimeout(function () {
        var _zyxmeconfig;

        var smoochIcon = document.querySelector('#web-messenger-container');
        var smoochIconStyle = getComputedStyle(smoochIcon);
        var speechBubbleDiv = document.createElement('div');
        speechBubbleDiv.classList.add('speech-bubble-div');
        speechBubbleDiv.style.position = smoochIconStyle.position;

        if (((_zyxmeconfig = zyxmeconfig) === null || _zyxmeconfig === void 0 ? void 0 : _zyxmeconfig.speechBubblePosition) == 'left') {
          speechBubbleDiv.style.right = parseInt(smoochIconStyle.right.split('px')[0]) + parseInt(smoochIconStyle.width.split('px')[0]) + 20 + 'px';
          speechBubbleDiv.style.bottom = parseInt(smoochIconStyle.bottom.split('px')[0]) + 30 + 'px';
        } else {
          speechBubbleDiv.style.right = parseInt(smoochIconStyle.right.split('px')[0]) + 18 + 'px';
          speechBubbleDiv.style.bottom = parseInt(smoochIconStyle.bottom.split('px')[0]) + parseInt(zyxmeconfig.buttonHeight.split('px')[0]) - 58 + 100 + 'px';
        }

        document.body.insertAdjacentElement('beforeend', speechBubbleDiv);

        if (zyxmeconfig.useSpeechBubbleImg) {
          var speechBubbleIcon = document.createElement('img');
          speechBubbleIcon.classList.add('speech-bubble-icon');
          speechBubbleIcon.setAttribute('src', zyxmeconfig.speechBubbleImgUrl);
          speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleIcon);
        }

        var speechBubbleTimes = document.createElement('a');
        speechBubbleTimes.classList.add('speech-bubble-times');
        speechBubbleTimes.innerHTML = '&times;';
        speechBubbleTimes.addEventListener('click', speechBubbleRemove);
        speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleTimes);
        var speechBubbleSpan = document.createElement('span');
        speechBubbleSpan.innerHTML = zyxmeconfig.stringBubbleMessageHTML;
        speechBubbleDiv.insertAdjacentElement('beforeend', speechBubbleSpan);

        if (document.querySelector('#web-messenger-container').contentDocument.querySelector('#container').classList.contains('appear')) {
          var speechbubble = document.querySelector('.speech-bubble-div');

          if (speechbubble) {
            speechbubble.style.visibility = 'hidden';
          }
        }
      }, zyxmeconfig.speechBubbleDelay);
    }

    runScript(jsBodyHTML).then(function () {})["catch"](function () {}); //Run external JS
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
} // Restart chatweb


function SmoochRefresh() {
  Smooch.close();
  setTimeout(function () {
    Smooch.destroy();
    SmoochCleanStorage();

    try {
      formfields.forEach(function (f) {
        if (f.field == 'classification') {
          var _f$field, _f$field2, _f$field3, _f$field4, _f$field5, _f$field6;

          document.querySelector("#contactMe".concat(((_f$field = f.field) === null || _f$field === void 0 ? void 0 : _f$field.charAt(0).toUpperCase()) + ((_f$field2 = f.field) === null || _f$field2 === void 0 ? void 0 : _f$field2.slice(1)) + 1)).value = '';
          var child = document.querySelector("#contactMe".concat(((_f$field3 = f.field) === null || _f$field3 === void 0 ? void 0 : _f$field3.charAt(0).toUpperCase()) + ((_f$field4 = f.field) === null || _f$field4 === void 0 ? void 0 : _f$field4.slice(1)) + 2));

          if (child != null) {
            child.parentElement.remove();
          }

          child = document.querySelector("#contactMe".concat(((_f$field5 = f.field) === null || _f$field5 === void 0 ? void 0 : _f$field5.charAt(0).toUpperCase()) + ((_f$field6 = f.field) === null || _f$field6 === void 0 ? void 0 : _f$field6.slice(1)) + 3));

          if (child != null) {
            child.parentElement.remove();
          }
        } else {
          var _f$field7, _f$field8;

          document.querySelector("#contactMe".concat(((_f$field7 = f.field) === null || _f$field7 === void 0 ? void 0 : _f$field7.charAt(0).toUpperCase()) + ((_f$field8 = f.field) === null || _f$field8 === void 0 ? void 0 : _f$field8.slice(1)))).value = '';
        }
      });

      if (zyxmeconfig.useTermsAndConditions) {
        document.querySelector('#contactMeTerms').checked = false;
      }
    } catch (error) {}

    formValidation();
    SmoochStart();
  }, 200);
} // Función que se ejecuta al abrir la burbuja


function SmoochWidgetOpened() {
  Smooch.on('widget:opened', function () {
    var _conversation$message, _conversation$message2, _smoochDOM$querySelec8, _smoochDOM$querySelec9;

    if (!useFormModal && sendInitChat) {
      var _conversation = Smooch.getConversation();

      try {
        if (_conversation.messages.length == 0) {
          Smooch.startConversation().then(function () {
            Smooch.updateUser({
              givenName: sessionStorage['contactMeName'],
              properties: {
                'justGotUpdated': true
              }
            });
            var extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
            extraData.platform = platform || '';

            if (scriptvariable != null) {
              extraData.scriptvariable = scriptvariable;
            }

            var data = {
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
      } catch (error) {}
    }

    var smoochDOM = window.frames['web-messenger-container'].contentDocument;
    var footer = smoochDOM.querySelector('#footer');
    var conversation = Smooch.getConversation();
    var queueposition = GetStorageData('queueposition');
    var lastusertype = GetStorageData('lastusertype');

    if ((usegroups || useclassifications) && lastusertype != null && lastusertype == 'HOLDING' && queueposition != null) {
      showQueuePosition();
    }

    if (!inputInButtons && ((conversation === null || conversation === void 0 ? void 0 : (_conversation$message = conversation.messages[conversation.messages.length - 1]) === null || _conversation$message === void 0 ? void 0 : _conversation$message.actions) != null || (conversation === null || conversation === void 0 ? void 0 : (_conversation$message2 = conversation.messages[conversation.messages.length - 1]) === null || _conversation$message2 === void 0 ? void 0 : _conversation$message2.type) == "carousel")) {
      var _smoochDOM$querySelec6;

      (_smoochDOM$querySelec6 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec6 === void 0 ? void 0 : _smoochDOM$querySelec6.setAttribute('disabled', 'true');
    } else {
      var _smoochDOM$querySelec7;

      (_smoochDOM$querySelec7 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec7 === void 0 ? void 0 : _smoochDOM$querySelec7.removeAttribute('disabled');
    }

    if (footer) {
      footer.children[0].style.paddingLeft = '9px';
    }

    var speeechbubble = document.querySelector('.speech-bubble-div');

    if (speeechbubble) {
      speeechbubble.style.visibility = 'hidden';
    }

    (_smoochDOM$querySelec8 = smoochDOM.querySelector('#conversation')) === null || _smoochDOM$querySelec8 === void 0 ? void 0 : _smoochDOM$querySelec8.scrollTo(0, (_smoochDOM$querySelec9 = smoochDOM.querySelector('#conversation')) === null || _smoochDOM$querySelec9 === void 0 ? void 0 : _smoochDOM$querySelec9.scrollHeight);

    if (enableAbandon) {
      smoochDOM.querySelector('.close-handle').addEventListener('click', closeWebChat);
    }
  });
} // Función que se ejecuta al cerrar el chat


function SmoochWidgetClosed() {
  Smooch.on('widget:closed', function () {
    var speeechbubble = document.querySelector('.speech-bubble-div');

    if (speeechbubble) {
      speeechbubble.style.display = 'block';
    }
  });
} // Función que se ejecuta al recibir un mensaje


function SmoochMessage() {
  Smooch.on('message', function (message) {
    var smoochDOM = window.frames['web-messenger-container'].contentDocument;

    if (!inputInButtons && (message.actions != null || message.type == 'carousel')) {
      var _smoochDOM$querySelec10;

      (_smoochDOM$querySelec10 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec10 === void 0 ? void 0 : _smoochDOM$querySelec10.setAttribute('disabled', 'true');
    } else {
      var _smoochDOM$querySelec11;

      (_smoochDOM$querySelec11 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec11 === void 0 ? void 0 : _smoochDOM$querySelec11.removeAttribute('disabled');
    }

    if ((usegroups || useclassifications) && usequeue && message.role == 'appMaker') {
      var _message$metadata, _message$metadata2;

      // Aquí se podrá que si el tipo de usuario es HOLDING debe mostrar el queue
      if (((_message$metadata = message.metadata) === null || _message$metadata === void 0 ? void 0 : _message$metadata.agentName) != null && ((_message$metadata2 = message.metadata) === null || _message$metadata2 === void 0 ? void 0 : _message$metadata2.agentName) != '') {
        if (message.metadata.agentName.substring(0, 8).toLowerCase() == 'holding ') {
          showQueuePosition();
        }
      }
    }

    if ((usegroups || useclassifications) && usequeue && message.role == 'appMaker') {
      var _message$metadata3, _message$metadata4;

      // Aquí se cambiará a que desaparezca si el tipo de usuario de la interación es ASESOR
      if (((_message$metadata3 = message.metadata) === null || _message$metadata3 === void 0 ? void 0 : _message$metadata3.agentName) != null && ((_message$metadata4 = message.metadata) === null || _message$metadata4 === void 0 ? void 0 : _message$metadata4.agentName) != '') {
        if (message.metadata.agentName.substring(0, 4).toLowerCase() != 'bot ') {
          var queuemessageDiv = smoochDOM.querySelector('#queue-message');

          if (queuemessageDiv) {
            queuemessageDiv.innerHTML = '';
            queuemessageDiv.style.display = 'none';
          }

          try {
            clearInterval(window.zyxmefakesocket);
          } catch (e) {}

          DeleteStorageData('queueposition');
        }
      }
    }

    if (useZyxmeAgent && message.role == 'appMaker') {
      var _message$metadata5, _message$metadata6;

      if (((_message$metadata5 = message.metadata) === null || _message$metadata5 === void 0 ? void 0 : _message$metadata5.agentName) != null && ((_message$metadata6 = message.metadata) === null || _message$metadata6 === void 0 ? void 0 : _message$metadata6.agentName) != '') {
        smoochDOM.querySelectorAll('.from').forEach(function (x) {
          return x.innerText = message.metadata.agentName.split(' ')[0];
        });
        SetStorageData('agentName', message.metadata.agentName.split(' ')[0]);
      } else {
        DeleteStorageData('agentName');
      }
    }

    if (message.role == 'appMaker') {
      var _message$metadata7, _message$metadata9, _message$metadata10;

      // Entro en encuesta
      if (((_message$metadata7 = message.metadata) === null || _message$metadata7 === void 0 ? void 0 : _message$metadata7.dateinitsurvey) != null) {
        var _smoochDOM$querySelec12, _smoochDOM$querySelec13;

        // Deshabilitando envio de archivos e imagenes
        (_smoochDOM$querySelec12 = smoochDOM.querySelector('.image-upload')) === null || _smoochDOM$querySelec12 === void 0 ? void 0 : (_smoochDOM$querySelec13 = _smoochDOM$querySelec12.parentElement) === null || _smoochDOM$querySelec13 === void 0 ? void 0 : _smoochDOM$querySelec13.remove(); // Flag local de que está en encuesta, solo se carga la primera vez

        if (GetStorageData('zyxmesurvey') == null) {
          SetStorageData('zyxmesurvey', true); // Deshabilitando botones viejos

          Array.from(smoochDOM.querySelector('#conversation').querySelector('.messages').querySelectorAll('.row')).slice(0, -1).forEach(function (d) {
            d.querySelectorAll('button').forEach(function (b) {
              return b.disabled = true;
            });
            d.querySelectorAll('.action').forEach(function (b) {
              return b.remove();
            });
          });

          if (window.zyxmeexpirationtimeout == null) {
            var _message$metadata8;

            var passedtime = new Date() - new Date(message.metadata.dateinitsurvey);
            var lefttime = ((_message$metadata8 = message.metadata) === null || _message$metadata8 === void 0 ? void 0 : _message$metadata8.expirationsurveyminutes) * 60 * 1000 - passedtime;
            lefttime = lefttime < 0 ? 1 : lefttime; // Setear cierre de chat luego de la expiración

            window.zyxmeexpirationtimeout = setTimeout(function () {
              var _smoochDOM$querySelec14;

              (_smoochDOM$querySelec14 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec14 === void 0 ? void 0 : _smoochDOM$querySelec14.setAttribute('disabled', 'true');
              SmoochRefresh();
            }, lefttime);
          }
        }
      } // Cierre de ticket
      else if (((_message$metadata9 = message.metadata) === null || _message$metadata9 === void 0 ? void 0 : _message$metadata9.closedticket) == true) {
          var _smoochDOM$querySelec15, _smoochDOM$querySelec16, _smoochDOM$querySelec17;

          // Deshabilitando envio de archivos e imagenes
          (_smoochDOM$querySelec15 = smoochDOM.querySelector('.image-upload')) === null || _smoochDOM$querySelec15 === void 0 ? void 0 : (_smoochDOM$querySelec16 = _smoochDOM$querySelec15.parentElement) === null || _smoochDOM$querySelec16 === void 0 ? void 0 : _smoochDOM$querySelec16.remove(); // Deshabilitando botones viejos

          Array.from(smoochDOM.querySelector('#conversation').querySelector('.messages').querySelectorAll('.row')).slice(0, -1).forEach(function (d) {
            d.querySelectorAll('button').forEach(function (b) {
              return b.disabled = true;
            });
            d.querySelectorAll('.action').forEach(function (b) {
              return b.remove();
            });
          });
          (_smoochDOM$querySelec17 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec17 === void 0 ? void 0 : _smoochDOM$querySelec17.remove();
        }

      if (GetStorageData('zyxmesurvey') && ((_message$metadata10 = message.metadata) === null || _message$metadata10 === void 0 ? void 0 : _message$metadata10.pendingsurvey) == false) {
        var _smoochDOM$querySelec18;

        // Si estuvo en encuesta y ya acabo la encuesta, cerrar el chat
        (_smoochDOM$querySelec18 = smoochDOM.querySelector('textarea')) === null || _smoochDOM$querySelec18 === void 0 ? void 0 : _smoochDOM$querySelec18.setAttribute('disabled', 'true');
        setTimeout(function () {
          SmoochRefresh();
        }, 3000);
      }
    }

    smoochDOM.querySelectorAll('.conversation-timestamp-header').forEach(function (x) {
      if (x.innerHTML == 'Invalid Date') {
        x.innerHTML = '';
      }
    });
  });
}

function SmoochMessageReceived() {
  Smooch.on('message:received', function (message, data) {
    var _smoochDOM$querySelec19, _smoochDOM$querySelec20;

    var smoochDOM = window.frames['web-messenger-container'].contentDocument;
    (_smoochDOM$querySelec19 = smoochDOM.querySelector('#conversation')) === null || _smoochDOM$querySelec19 === void 0 ? void 0 : _smoochDOM$querySelec19.scrollTo(0, (_smoochDOM$querySelec20 = smoochDOM.querySelector('#conversation')) === null || _smoochDOM$querySelec20 === void 0 ? void 0 : _smoochDOM$querySelec20.scrollHeight);
  });
} // Run SmoochInit con configuración


function SmoochStart() {
  if (useExtraData) {
    getExtraData(function () {
      SmoochInit();
    });
  } else {
    SmoochInit();
  }
}

SmoochStart(); // Creación de un div fake sobre la burbuja para mostrar el formulario

function fakeChat() {
  var smoochIcon = document.querySelector('#web-messenger-container');
  var smoochIconStyle = getComputedStyle(smoochIcon);

  if (document.querySelector('#fakeChatDiv') == null) {
    var fakeChatDiv = document.createElement('div');
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
} // Formulario Web


function buildTermsModalHTML() {
  var _zyxmeconfig2;

  var stringTermsModalHTML = "\n\t<form class=\"form\">\n\t\t<span class=\"close\">\n\t\t\t<i class=\"fa fa-times\"></i>\n\t\t</span>\n\t\t<div class=\"body\" style=\"padding-right:25px;\">\n\t\t\t".concat(((_zyxmeconfig2 = zyxmeconfig) === null || _zyxmeconfig2 === void 0 ? void 0 : _zyxmeconfig2.termsAndConditionModalHtml) || '', "\n\t\t</div>\n\t</form>");
  return stringTermsModalHTML;
}

function buildGroupHTML(f, data) {
  var _f$field9, _f$field10;

  usegroups = true;
  var selecthtml = "\n\t\t<div class=\"contactme-form-field-group\">\n\t\t\t<label>".concat(f.label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t<select id=\"contactMe").concat(((_f$field9 = f.field) === null || _f$field9 === void 0 ? void 0 : _f$field9.charAt(0).toUpperCase()) + ((_f$field10 = f.field) === null || _f$field10 === void 0 ? void 0 : _f$field10.slice(1)), "\" onchange=\"formSendValidation('").concat(f.field, "')\">\n\t\t\t\t<option selected value=''>Seleccione...</option>\n\t");
  data.forEach(function (g) {
    selecthtml += "<option value=".concat(g.domainvalue, ">").concat(g.domaindesc, "</option>");
  });
  selecthtml += "\n\t\t\t</select>\n\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">".concat(f.validationtext, "</span>\n\t\t</div>\n\t");
  return selecthtml;
}

function buildClassificationHTML(f, data, level) {
  var _f$field11, _f$field12;

  var selecthtml = "\n\t\t<div class=\"contactme-form-field-group\">\n\t\t\t<label>".concat(f.levels[level - 1].label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t<select id=\"contactMe").concat(((_f$field11 = f.field) === null || _f$field11 === void 0 ? void 0 : _f$field11.charAt(0).toUpperCase()) + ((_f$field12 = f.field) === null || _f$field12 === void 0 ? void 0 : _f$field12.slice(1)) + level, "\" onchange=\"validateClassificationLevel('").concat(f.field, "', ").concat(level, "); formSendValidation('").concat(f.field, "')\">\n\t\t\t\t<option selected value=''>Seleccione...</option>\n\t");
  data.forEach(function (c) {
    selecthtml += "<option value=".concat(c.classificationid, ">").concat(c.description, "</option>");
  });
  selecthtml += "\n\t\t\t</select>\n\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">".concat(f.messageoutoftime, "</span>\n\t\t</div>\n\t");
  return selecthtml;
}

function buildFormModalHTML() {
  var stringTermsHTML = zyxmeconfig.useTermsAndConditions ? "\n\t\t<div class=\"contactme-form-field-group\">\n\t\t\t<input id=\"contactMeTerms\" type=\"checkbox\" style=\"width: 15px;height: 15px;\" onchange=\"formValidation()\" />\n\t\t\t<a href=\"#\" onclick=\"toggleTermsModal()\">".concat(zyxmeconfig.termsAndConditionText || 'Términos y Condiciones', "</a>\n\t\t</div>\n\t") : '';
  var stringModalHTML = "\n\t\t<form class=\"form\">\n\t\t\t<span class=\"close\">\n\t\t\t\t<i class=\"fa fa-times\"></i>\n\t\t\t</span>\n\t\t\t<div class=\"header\">\n\t\t\t\t<img src=\"".concat(zyxmeconfig.stringBusinessIconUrl, "\">\n\t\t\t\t<div class=\"app-name\">").concat(zyxmeconfig.stringBusinessName, "</div>\n\t\t\t\t<div class=\"intro-text\">").concat(zyxmeconfig.stringIntroductionText, "</div>\n\t\t\t</div>\n\t\t\t<div class=\"body\">\n\t");

  try {
    formfields.forEach(function (f) {
      var _f$field17, _f$field18, _f$field19, _f$field20;

      if (f.field == 'usergroup') {
        stringModalHTML += buildGroupHTML(f, usergroups);
      } else if (f.field == 'classification' && clalevel1 != null) {
        stringModalHTML += buildClassificationHTML(f, clalevel1, 1);
      } else {
        switch (f.type) {
          case 'SIMPLE':
            if (f.field == 'email' || f.field == 'alternativeemail') {
              var _f$field13, _f$field14;

              stringModalHTML = stringModalHTML += "\n\t\t\t\t\t\t\t\t<div class=\"contactme-form-field-group\">\n\t\t\t\t\t\t\t\t\t<label>".concat(f.label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t\t\t\t\t\t\t<input id=\"contactMe").concat(((_f$field13 = f.field) === null || _f$field13 === void 0 ? void 0 : _f$field13.charAt(0).toUpperCase()) + ((_f$field14 = f.field) === null || _f$field14 === void 0 ? void 0 : _f$field14.slice(1)), "\" placeholder=\"").concat(f.placeholder, "\" onkeypress=\"return /").concat(f.keyvalidation, "/.test(event.key)\" oninput=\"formSendValidation('").concat(f.field, "')\" onchange=\"formValidation()\" />\n\t\t\t\t\t\t\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">").concat(f.validationtext, "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t");
              break;
            } else {
              var _f$field15, _f$field16;

              stringModalHTML = stringModalHTML += "\n\t\t\t\t\t\t\t\t<div class=\"contactme-form-field-group\">\n\t\t\t\t\t\t\t\t\t<label>".concat(f.label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t\t\t\t\t\t\t<input id=\"contactMe").concat(((_f$field15 = f.field) === null || _f$field15 === void 0 ? void 0 : _f$field15.charAt(0).toUpperCase()) + ((_f$field16 = f.field) === null || _f$field16 === void 0 ? void 0 : _f$field16.slice(1)), "\" placeholder=\"").concat(f.placeholder, "\" onkeypress=\"return /").concat(f.keyvalidation, "/.test(event.key)\" oninput=\"formSendValidation('").concat(f.field, "')\" onchange=\"formValidation()\" />\n\t\t\t\t\t\t\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">").concat(f.validationtext, "</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t");
              break;
            }

          case 'MULTI':
            var selecthtml = "\n\t\t\t\t\t\t\t<div class=\"contactme-form-field-group\">\n\t\t\t\t\t\t\t\t<label>".concat(f.label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t\t\t\t\t\t<select id=\"contactMe").concat(((_f$field17 = f.field) === null || _f$field17 === void 0 ? void 0 : _f$field17.charAt(0).toUpperCase()) + ((_f$field18 = f.field) === null || _f$field18 === void 0 ? void 0 : _f$field18.slice(1)), "\" onchange=\"formValidation('").concat(f.field, "')\">\n\t\t\t\t\t\t\t\t\t<option selected disabled value=''>Seleccione...</option>\n\t\t\t\t\t\t");

            if (f.values != null) {
              f.values.forEach(function (g) {
                selecthtml += "<option value=".concat(g.value, ">").concat(g.text, "</option>");
              });
            }

            selecthtml += "\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">".concat(f.validationtext, "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t");
            stringModalHTML = stringModalHTML += selecthtml;
            break;

          case 'TEXTAREA':
            stringModalHTML = stringModalHTML += "\n\t\t\t\t\t\t\t<div class=\"contactme-form-field-group\">\n\t\t\t\t\t\t\t\t<label>".concat(f.label, "</label>").concat(f.required ? '<span style="color:red">*</span>' : '', "\n\t\t\t\t\t\t\t\t<textarea id=\"contactMe").concat(((_f$field19 = f.field) === null || _f$field19 === void 0 ? void 0 : _f$field19.charAt(0).toUpperCase()) + ((_f$field20 = f.field) === null || _f$field20 === void 0 ? void 0 : _f$field20.slice(1)), "\" placeholder=\"").concat(f.placeholder, "\" onkeypress=\"return /").concat(f.keyvalidation, "/.test(event.key)\" oninput=\"formSendValidation('").concat(f.field, "')\" ></textarea>\n\t\t\t\t\t\t\t\t<span class=\"modal-input-alert\" style=\"color:red !important;font-size:11px;display:none\">").concat(f.validationtext, "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t");
            break;

          default:
            break;
        }
      }
    });
  } catch (error) {
    console.log(error);
  }

  stringModalHTML += "\n\t\t\t".concat(stringTermsHTML, "\n\t\t\t<div style=\"color:red\">* Campos obligatorios</div>\n\t\t\t<div style=\"text-align:right;\">\n\t\t\t\t<button type=\"button\" disabled=\"true\">Enviar<i class=\"fa fa-send\"></i></button>\n\t\t\t</div>\n\t\t</div>\n\t</form>");
  return stringModalHTML;
}

function createModal() {
  if (document.querySelector('#contactModal') == null) {
    var modalDiv = document.createElement('div');
    modalDiv.id = 'contactModal';
    document.body.insertAdjacentElement('beforeend', modalDiv);
    setTimeout(function () {
      var _modalDiv$querySelect, _modalDiv$querySelect2;

      var modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      modalContent.innerHTML = buildFormModalHTML();
      modalDiv.insertAdjacentElement('beforeend', modalContent);
      (_modalDiv$querySelect = modalDiv.querySelector('.close')) === null || _modalDiv$querySelect === void 0 ? void 0 : _modalDiv$querySelect.addEventListener('click', toggleUserModal);
      (_modalDiv$querySelect2 = modalDiv.querySelector('button')) === null || _modalDiv$querySelect2 === void 0 ? void 0 : _modalDiv$querySelect2.addEventListener('click', dropFakeChat);

      if (document.querySelector("#contactMePhone") != null) {
        intlTelInput(document.querySelector("#contactMePhone"), {
          autoPlaceholder: 'off',
          separateDialCode: true,
          initialCountry: "PE",
          utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.6/js/utils.min.js'
        });
      }

      formValidation();
    }, 100);
    var termsModalDiv = document.createElement('div');
    termsModalDiv.id = 'contactTermsModal';
    document.body.insertAdjacentElement('beforeend', termsModalDiv);
    setTimeout(function () {
      var _termsModalDiv$queryS;

      var termsmodalContent = document.createElement('div');
      termsmodalContent.classList.add('modal-content');
      termsmodalContent.innerHTML = buildTermsModalHTML();
      termsModalDiv.insertAdjacentElement('beforeend', termsmodalContent);
      (_termsModalDiv$queryS = termsModalDiv.querySelector('.close')) === null || _termsModalDiv$queryS === void 0 ? void 0 : _termsModalDiv$queryS.addEventListener('click', toggleTermsModal);
    }, 100);
  }
}

function getTodayTomorrow(date) {
  return [new Date(date), new Date(new Date(date).setDate(date.getDate() + 1))];
}

function splitYearMonthDay(date) {
  var datestring = new Date(date.getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString();
  return [+datestring.substring(0, 4), +datestring.substring(5, 7) - 1, +datestring.substring(8, 10)];
}

function splitHourMinute(time) {
  return [+time.split(":")[0], +time.split(":")[1]];
}

function buildScheduleMessage(schedule) {
  var message = 'El horario de atención son los';
  schedule.forEach(function (s, i) {
    message += i > 0 && schedule.length == i + 1 ? ' y' : i > 0 ? ',' : '';
    s.days.forEach(function (d, j) {
      message += j > 0 && s.days.length == j + 1 ? ' y' : j > 0 ? ',' : '';
      message += d == '1' ? ' lunes' : '';
      message += d == '2' ? ' martes' : '';
      message += d == '3' ? ' miércoles' : '';
      message += d == '4' ? ' jueves' : '';
      message += d == '5' ? ' viernes' : '';
      message += d == '6' ? ' sábados' : '';
      message += d == '0' ? ' domingos' : '';
    });
    message += " de ".concat(s.start, " a ").concat(s.end);
  });
  return message;
}

function validateSchedule() {
  var data;
  var input;
  var schedule;
  var inschedule = false;
  var message = '';

  if (schedulefield == 'classification') {
    input = document.querySelector("#contactMeClassification1");
    data = clalevel1.find(function (cla) {
      return cla.classificationid == input.value;
    });
  } else if (schedulefield == 'usergroup') {
    input = document.querySelector("#contactMeUsergroup");
    data = usergroups.find(function (ug) {
      return ug.domainvalue == input.value;
    });
  }

  if (data != null) {
    schedule = isJSON(data.schedule) ? JSON.parse(data.schedule) : null;
  }

  if (schedule != null) {
    message = buildScheduleMessage(schedule);

    var _getTodayTomorrow = getTodayTomorrow(new Date()),
        _getTodayTomorrow2 = _slicedToArray(_getTodayTomorrow, 2),
        today = _getTodayTomorrow2[0],
        tomorrow = _getTodayTomorrow2[1];

    var _splitYearMonthDay = splitYearMonthDay(today),
        _splitYearMonthDay2 = _slicedToArray(_splitYearMonthDay, 3),
        year = _splitYearMonthDay2[0],
        month = _splitYearMonthDay2[1],
        day = _splitYearMonthDay2[2];

    var _splitYearMonthDay3 = splitYearMonthDay(tomorrow),
        _splitYearMonthDay4 = _slicedToArray(_splitYearMonthDay3, 3),
        nextyear = _splitYearMonthDay4[0],
        nextmonth = _splitYearMonthDay4[1],
        nextday = _splitYearMonthDay4[2];

    var todayschedules = schedule.filter(function (s) {
      return s.days.includes("" + today.getDay());
    });

    if (todayschedules.length > 0) {
      todayschedules.forEach(function (ts, tsi) {
        var _splitHourMinute = splitHourMinute(ts.start),
            _splitHourMinute2 = _slicedToArray(_splitHourMinute, 2),
            hour1 = _splitHourMinute2[0],
            minute1 = _splitHourMinute2[1];

        var _splitHourMinute3 = splitHourMinute(ts.end),
            _splitHourMinute4 = _slicedToArray(_splitHourMinute3, 2),
            hour2 = _splitHourMinute4[0],
            minute2 = _splitHourMinute4[1];

        if (hour1 * 60 + minute1 < hour2 * 60 + minute2) {
          if (today >= new Date(year, month, day, hour1, minute1) && today <= new Date(year, month, day, hour2, minute2)) {
            inschedule = true;
          }
        } else if (todayschedules.length - 1 == tsi) {
          var tomorrowschedules = schedule.filter(function (s) {
            return s.days.includes("" + tomorrow.getDay());
          });
          var tomorrowschedule = tomorrowschedules[0];

          if (tomorrowschedule != null) {
            var _splitHourMinute5 = splitHourMinute(tomorrowschedule.end);

            var _splitHourMinute6 = _slicedToArray(_splitHourMinute5, 2);

            hour2 = _splitHourMinute6[0];
            minute2 = _splitHourMinute6[1];

            if (today >= new Date(year, month, day, hour1, minute1) && today <= new Date(nextyear, nextmonth, nextday, hour2, minute2)) {
              inschedule = true;
            } else {
              inschedule = false;
            }
          }
        } else {
          inschedule = false;
        }
      });
    } else {
      inschedule = false;
    }
  } else {
    inschedule = true;
  }

  return [inschedule, message];
}

function validateClassificationLevel(field, level) {
  var input = document.querySelector("#contactMeClassification".concat(level));
  var clason = [];

  if (level == 1) {
    maxclassificationlevel = 1;
    var child = document.querySelector("#contactMeClassification".concat(level + 1));

    if (child != null) {
      document.querySelector("#contactMeClassification".concat(level + 1)).parentElement.remove();
    }

    child = document.querySelector("#contactMeClassification".concat(level + 2));

    if (child != null) {
      document.querySelector("#contactMeClassification".concat(level + 2)).parentElement.remove();
    }

    clason = clalevel2.filter(function (cla) {
      return cla.parent == input.value;
    });
  } else if (level == 2) {
    maxclassificationlevel = 2;

    var _child = document.querySelector("#contactMeClassification".concat(level + 1));

    if (_child != null) {
      document.querySelector("#contactMeClassification".concat(level + 1)).parentElement.remove();
    }

    clason = clalevel3.filter(function (cla) {
      return cla.parent == input.value;
    });
  }

  if (clason.length > 0) {
    maxclassificationlevel += 1;
    var required = formfields.find(function (ff) {
      return ff.field == field;
    }).required;
    var label = formfields.find(function (ff) {
      return ff.field == field;
    }).label;
    var levels = formfields.find(function (ff) {
      return ff.field == field;
    }).levels;
    var f = {
      'required': required,
      'label': label,
      'field': field,
      'levels': levels
    };
    var stringHTML = buildClassificationHTML(f, clason, level + 1);
    input.parentElement.insertAdjacentHTML('afterend', stringHTML);
  }
}

function toggleForm(attr, exclude, message) {
  var contactMeModal = document.querySelector('#contactModal');
  var termsCheck = document.querySelector('#contactMeTerms');

  if (attr == false) {
    var _contactMeModal$query;

    (_contactMeModal$query = contactMeModal.querySelector('button')) === null || _contactMeModal$query === void 0 ? void 0 : _contactMeModal$query.setAttribute('disabled', 'true');
  }

  formfields.forEach(function (f) {
    var _f$field21, _f$field22;

    var input = document.querySelector("#contactMe".concat(((_f$field21 = f.field) === null || _f$field21 === void 0 ? void 0 : _f$field21.charAt(0).toUpperCase()) + ((_f$field22 = f.field) === null || _f$field22 === void 0 ? void 0 : _f$field22.slice(1))));

    if (f.field == 'classification') {
      var _f$field23, _f$field24;

      input = document.querySelector("#contactMe".concat(((_f$field23 = f.field) === null || _f$field23 === void 0 ? void 0 : _f$field23.charAt(0).toUpperCase()) + ((_f$field24 = f.field) === null || _f$field24 === void 0 ? void 0 : _f$field24.slice(1)) + 1));
    }

    var isintl = input.parentElement.classList.contains('iti');
    var parent = isintl ? input.parentElement.parentElement : input.parentElement;

    if (!exclude.split(',').includes(f.field)) {
      if (attr) {
        input.removeAttribute('disabled');
      } else {
        input.setAttribute('disabled', 'true');
      }
    } else {
      if (attr) {
        input.style.borderColor = null;
        parent.querySelector('.modal-input-alert').innerText = '';
        parent.querySelector('.modal-input-alert').style.display = 'none';
      } else {
        input.style.borderColor = 'red';
        parent.querySelector('.modal-input-alert').innerText = message;
        parent.querySelector('.modal-input-alert').style.display = 'block';
      }
    }
  });
}

function documentValidation() {
  var _document$querySelect;

  var doctype = (_document$querySelect = document.querySelector('#contactMeDocumenttype')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;

  if (doctype != null) {
    switch (doctype) {
      case 'DNI':
        return "^[0-9]{8}$";

      case 'CE':
        return "^[A-Za-z0-9]{1,12}$";

      case 'RUC':
        return "^[0-9]{11}$";

      case 'PASAPORTE':
        return "^[A-Za-z0-9]{12}$";

      case 'PARTIDA':
      case 'PNAC':
        return "^[A-Za-z0-9]{1,15}$";

      case 'OTROS':
        return "^[A-Za-z0-9]{1,15}$";

      default:
        return "^[0-9]{8}$";
    }
  } else {
    return "^[0-9]{8}$";
  }
} // Validación del Formulario al escribir


function formSendValidation() {
  var _contactMeModal$query2;

  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var contactMeModal = document.querySelector('#contactModal');
  var termsCheck = document.querySelector('#contactMeTerms');
  (_contactMeModal$query2 = contactMeModal.querySelector('button')) === null || _contactMeModal$query2 === void 0 ? void 0 : _contactMeModal$query2.removeAttribute('disabled');
  formfields.forEach(function (f) {
    var _f$field25, _f$field26;

    var input = document.querySelector("#contactMe".concat(((_f$field25 = f.field) === null || _f$field25 === void 0 ? void 0 : _f$field25.charAt(0).toUpperCase()) + ((_f$field26 = f.field) === null || _f$field26 === void 0 ? void 0 : _f$field26.slice(1))));

    if (f.field == 'classification') {
      var _f$field27, _f$field28;

      input = document.querySelector("#contactMe".concat(((_f$field27 = f.field) === null || _f$field27 === void 0 ? void 0 : _f$field27.charAt(0).toUpperCase()) + ((_f$field28 = f.field) === null || _f$field28 === void 0 ? void 0 : _f$field28.slice(1)) + maxclassificationlevel));
    }

    var re = new RegExp("^".concat(f.inputvalidation, "$"));

    if (f.required && input.value == "") {
      contactMeModal.querySelector('button').setAttribute('disabled', 'true');
    }
  });
  var f = formfields.find(function (f) {
    return f.field == field;
  });

  if (f != null) {
    var _f$field29, _f$field30, _input;

    var input = document.querySelector("#contactMe".concat(((_f$field29 = f.field) === null || _f$field29 === void 0 ? void 0 : _f$field29.charAt(0).toUpperCase()) + ((_f$field30 = f.field) === null || _f$field30 === void 0 ? void 0 : _f$field30.slice(1))));

    if (f.field == 'classification') {
      var _f$field31, _f$field32;

      input = document.querySelector("#contactMe".concat(((_f$field31 = f.field) === null || _f$field31 === void 0 ? void 0 : _f$field31.charAt(0).toUpperCase()) + ((_f$field32 = f.field) === null || _f$field32 === void 0 ? void 0 : _f$field32.slice(1)) + maxclassificationlevel));
    }

    var re = new RegExp("^".concat(f.inputvalidation, "$"));

    if (f.required && ((_input = input) === null || _input === void 0 ? void 0 : _input.value) == "") {
      contactMeModal.querySelector('button').setAttribute('disabled', 'true');
    }

    switch (f.type) {
      case 'SIMPLE':
        var isintl = input.parentElement.classList.contains('iti');
        var parent = isintl ? input.parentElement.parentElement : input.parentElement;

        if (f.field == 'document' || f.field == 'documentnumber') {
          re = new RegExp("".concat(documentValidation()));
        }

        if (isintl && input.value != "" && !window.intlTelInputGlobals.getInstance(input).isValidNumber()) {
          input.style.borderColor = 'red';
          parent.querySelector('.modal-input-alert').innerText = f.validationtext;
          parent.querySelector('.modal-input-alert').style.display = 'block';
          contactMeModal.querySelector('button').setAttribute('disabled', 'true');
        } else if (!isintl && input.value != "" && !re.test(input.value)) {
          input.style.borderColor = 'red';
          parent.querySelector('.modal-input-alert').innerText = f.validationtext;
          parent.querySelector('.modal-input-alert').style.display = 'block';
          contactMeModal.querySelector('button').setAttribute('disabled', 'true');
        } else {
          input.style.borderColor = null;
          parent.querySelector('.modal-input-alert').style.display = 'none';
        }

        break;

      default:
        break;
    }
  }

  if ((termsCheck === null || termsCheck === void 0 ? void 0 : termsCheck.checked) == false) {
    contactMeModal.querySelector('button').setAttribute('disabled', 'true');
  }

  toggleForm(true, schedulefield);

  var _validateSchedule = validateSchedule(),
      _validateSchedule2 = _slicedToArray(_validateSchedule, 2),
      inschedule = _validateSchedule2[0],
      message = _validateSchedule2[1];

  if (!inschedule) {
    toggleForm(false, schedulefield, message);
  }
} // Validación del Formulario al cambiar


function formValidation() {
  var contactMeModal = document.querySelector('#contactModal');
  var termsCheck = document.querySelector('#contactMeTerms');
  contactMeModal.querySelector('button').removeAttribute('disabled');
  formfields.forEach(function (f) {
    var _f$field33, _f$field34;

    var input = document.querySelector("#contactMe".concat(((_f$field33 = f.field) === null || _f$field33 === void 0 ? void 0 : _f$field33.charAt(0).toUpperCase()) + ((_f$field34 = f.field) === null || _f$field34 === void 0 ? void 0 : _f$field34.slice(1))));

    if (f.field == 'classification') {
      var _f$field35, _f$field36;

      input = document.querySelector("#contactMe".concat(((_f$field35 = f.field) === null || _f$field35 === void 0 ? void 0 : _f$field35.charAt(0).toUpperCase()) + ((_f$field36 = f.field) === null || _f$field36 === void 0 ? void 0 : _f$field36.slice(1)) + maxclassificationlevel));
    }

    var re = new RegExp("^".concat(f.inputvalidation, "$"));

    if (f.required && input.value == "") {
      contactMeModal.querySelector('button').setAttribute('disabled', 'true');
    }

    switch (f.type) {
      case 'SIMPLE':
        var isintl = input.parentElement.classList.contains('iti');
        var parent = isintl ? input.parentElement.parentElement : input.parentElement;

        if (f.field == 'document' || f.field == 'documentnumber') {
          re = new RegExp("".concat(documentValidation()));
        }

        if (isintl && input.value != "" && !window.intlTelInputGlobals.getInstance(input).isValidNumber()) {
          input.style.borderColor = 'red';
          parent.querySelector('.modal-input-alert').style.display = 'block';
          contactMeModal.querySelector('button').setAttribute('disabled', 'true');
        } else if (!isintl && input.value != "" && !re.test(input.value)) {
          input.style.borderColor = 'red';
          parent.querySelector('.modal-input-alert').style.display = 'block';
          contactMeModal.querySelector('button').setAttribute('disabled', 'true');
        } else {
          input.style.borderColor = null;
          parent.querySelector('.modal-input-alert').style.display = 'none';
        }

        break;

      default:
        break;
    }
  });

  if ((termsCheck === null || termsCheck === void 0 ? void 0 : termsCheck.checked) == false) {
    contactMeModal.querySelector('button').setAttribute('disabled', 'true');
  }

  toggleForm(true, schedulefield);

  var _validateSchedule3 = validateSchedule(),
      _validateSchedule4 = _slicedToArray(_validateSchedule3, 2),
      inschedule = _validateSchedule4[0],
      message = _validateSchedule4[1];

  if (!inschedule) {
    toggleForm(false, schedulefield, message);
  }
} // Función para mostrar y ocultar el formulario


function toggleUserModal() {
  var smoochDOM = window.frames['web-messenger-container'].contentDocument;
  var contactmodal = document.querySelector('#contactModal');
  var speechbubble = document.querySelector('.speech-bubble-div');

  if (contactmodal.style.display == 'block') {
    var _smoochDOM$querySelec21, _smoochDOM$querySelec22;

    (_smoochDOM$querySelec21 = smoochDOM.querySelector('#messenger-button')) === null || _smoochDOM$querySelec21 === void 0 ? void 0 : (_smoochDOM$querySelec22 = _smoochDOM$querySelec21.querySelector('img')) === null || _smoochDOM$querySelec22 === void 0 ? void 0 : _smoochDOM$querySelec22.setAttribute('src', zyxmeconfig.stringButtonIconUrl);

    if (contactmodal) {
      contactmodal.style.opacity = '0';
    }

    if (speechbubble) {
      speechbubble.style.display = 'block';
    }

    setTimeout(function () {
      if (contactmodal) {
        contactmodal.style.display = 'none';
      }

      if (speechbubble) {
        speechbubble.style.opacity = '1';
      }
    }, 200);
  } else {
    var _smoochDOM$querySelec23, _smoochDOM$querySelec24;

    var buttonURL = zyxmeconfig.stringCancelIconUrl != '' ? zyxmeconfig.stringCancelIconUrl : zyxmeconfig.stringButtonIconUrl;
    (_smoochDOM$querySelec23 = smoochDOM.querySelector('#messenger-button')) === null || _smoochDOM$querySelec23 === void 0 ? void 0 : (_smoochDOM$querySelec24 = _smoochDOM$querySelec23.querySelector('img')) === null || _smoochDOM$querySelec24 === void 0 ? void 0 : _smoochDOM$querySelec24.setAttribute('src', buttonURL);

    if (contactmodal) {
      contactmodal.style.display = 'block';
    }

    if (speechbubble) {
      speechbubble.style.opacity = '0';
    }

    setTimeout(function () {
      if (contactmodal) {
        contactmodal.style.opacity = '1';
      }

      if (speechbubble) {
        speechbubble.style.display = 'none';
      }
    }, 200);
  }
} // Función para mostrar y ocultar el formulario al hacer click fuera del modal


window.onclick = function (event) {
  var _window$frames$webMe;

  var smoochDOM = (_window$frames$webMe = window.frames['web-messenger-container']) === null || _window$frames$webMe === void 0 ? void 0 : _window$frames$webMe.contentDocument;

  if (smoochDOM != null) {
    var contactmodal = document.querySelector('#contactModal');
    var speechbubble = document.querySelector('.speech-bubble-div');

    if (zyxmeconfig.formCloseClickout && event.target == contactmodal) {
      var _smoochDOM$querySelec25;

      var _smoochDOM = window.frames['web-messenger-container'].contentDocument;
      (_smoochDOM$querySelec25 = _smoochDOM.querySelector('#messenger-button').querySelector('img')) === null || _smoochDOM$querySelec25 === void 0 ? void 0 : _smoochDOM$querySelec25.setAttribute('src', zyxmeconfig.stringButtonIconUrl);

      if (contactmodal) {
        contactmodal.style.opacity = '0';
      }

      if (speechbubble) {
        speechbubble.style.display = 'block';
      }

      setTimeout(function () {
        if (contactmodal) {
          contactmodal.style.display = 'none';
        }

        if (speechbubble) {
          speechbubble.style.opacity = '1';
        }
      }, 200);
    }
  }
}; // Función para mostrar y ocultar el modal de términos y condiciones


function toggleTermsModal() {
  var _document$querySelect2;

  if (((_document$querySelect2 = document.querySelector('#contactTermsModal')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.style.display) == 'block') {
    document.querySelector('#contactTermsModal').style.display = 'none';
  } else {
    document.querySelector('#contactTermsModal').style.display = 'block';
  }
} // Funcion para obtener la data del formulario


function getFormDataField() {
  var fields = [];
  formfields.forEach(function (f) {
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
    } else if (f.field == 'phone') {
      var _f$field37, _f$field38;

      fields.push({
        "Label": f.label,
        "Name": f.field,
        "Type": "text",
        "Text": window.intlTelInputGlobals.getInstance(document.querySelector("#contactMe".concat(((_f$field37 = f.field) === null || _f$field37 === void 0 ? void 0 : _f$field37.charAt(0).toUpperCase()) + ((_f$field38 = f.field) === null || _f$field38 === void 0 ? void 0 : _f$field38.slice(1))))).getNumber().split('+')[1]
      });
    } else {
      var _document$querySelect3, _f$field39, _f$field40;

      fields.push({
        "Label": f.label,
        "Name": f.field,
        "Type": "text",
        "Text": ((_document$querySelect3 = document.querySelector("#contactMe".concat(((_f$field39 = f.field) === null || _f$field39 === void 0 ? void 0 : _f$field39.charAt(0).toUpperCase()) + ((_f$field40 = f.field) === null || _f$field40 === void 0 ? void 0 : _f$field40.slice(1))))) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.value) || ''
      });
    }
  });

  if (zyxmeconfig.useTermsAndConditions) {
    fields.push({
      "Label": "Términos",
      "Name": "termsandconditions",
      "Type": "text",
      "Text": new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 23).replace('T', ' ')
    });
  }

  return fields;
} // Función que retorna la data a enviar al hook


function buildHookDataRequest() {
  var _document$querySelect4;

  var fields = getFormDataField();
  var formdata = {};
  fields.forEach(function (x) {
    {
      formdata[x.Name] = x.Text || x.Email;
    }
  });
  var extraData = JSON.parse(localStorage.getItem("SmoochExtraData")) || {};
  extraData.formdata = formdata; // extraData.refererurl = window.location.href;

  extraData.platform = platform || '';
  extraData.smoochsessionid = GetStorageData('smoochsessionid');

  if (usegroups || useclassifications) {
    extraData.usergroup = getUserGroupValue();
  }

  extraData.enquiries = (_document$querySelect4 = document.querySelector('#contactMeEnquiries')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.value;

  if (zyxmeconfig.scriptvariable != null) {
    extraData.scriptvariable = zyxmeconfig.scriptvariable; // Variable seteada desde el script para que llegue a chatflow
  }

  var newAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
  var data = {
    "Trigger": "message:appUser",
    "AppUser": {
      "_id": newAppUserId
    },
    "App": {
      "_id": zyxmeconfig.smoochAppId
    },
    "Messages": [{
      "Source": {
        "Type": "web"
      },
      "Fields": fields,
      "Type": "formResponse",
      "Metadata": {
        "ExtraData": JSON.stringify(extraData),
        "Url": window.location.href
      }
    }],
    "FromCompany": zyxmeconfig.company,
    "FormName": document.querySelector('#contactMeName') != null ? document.querySelector('#contactMeName').value : ''
  };
  return data;
}

function getClassificationDescription() {
  var _clalevel1$find, _clalevel2$find, _clalevel3$find;

  var cladesc = '';

  if (useclassifications) {
    var _document$querySelect5;

    var claid = (_document$querySelect5 = document.querySelector("#contactMeClassification".concat(maxclassificationlevel))) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.value;

    switch (maxclassificationlevel) {
      case 1:
        cladesc = (_clalevel1$find = clalevel1.find(function (cla) {
          return cla.classificationid == claid;
        })) === null || _clalevel1$find === void 0 ? void 0 : _clalevel1$find.path;
        break;

      case 2:
        cladesc = (_clalevel2$find = clalevel2.find(function (cla) {
          return cla.classificationid == claid;
        })) === null || _clalevel2$find === void 0 ? void 0 : _clalevel2$find.path;
        break;

      case 3:
        cladesc = (_clalevel3$find = clalevel3.find(function (cla) {
          return cla.classificationid == claid;
        })) === null || _clalevel3$find === void 0 ? void 0 : _clalevel3$find.path;
        break;
    }
  }

  return cladesc;
}

function getUserGroupValue() {
  var usergroup = null;

  if (useclassifications) {
    var _classifications$find, _usergroups$find;

    var usergroupid = (_classifications$find = classifications.find(function (c) {
      var _document$querySelect6;

      return c.classificationid == ((_document$querySelect6 = document.querySelector('#contactMeClassification' + maxclassificationlevel)) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.value);
    })) === null || _classifications$find === void 0 ? void 0 : _classifications$find.usergroup;
    usergroup = ((_usergroups$find = usergroups.find(function (u) {
      return u.domainid == usergroupid;
    })) === null || _usergroups$find === void 0 ? void 0 : _usergroups$find.domainvalue) || '';
  }

  if (usegroups) {
    var _document$querySelect7;

    usergroup = (_document$querySelect7 = document.querySelector('#contactMeUsergroup')) === null || _document$querySelect7 === void 0 ? void 0 : _document$querySelect7.value;
  }

  return usergroup;
} // Ejecución de Enviar data del Formulario


function dropFakeChat() {
  formValidation();
  var smoochDOM = window.frames['web-messenger-container'].contentDocument;
  var contactMeModal = document.querySelector('#contactModal');

  if (!contactMeModal.querySelector('button')["disabled"]) {
    contactMeModal.querySelector('button').setAttribute('disabled', 'true');
    var usergroup = getUserGroupValue();

    if (usegroups || useclassifications) {
      if (usegroupslimit) {
        validateUserLimit(usergroup);
      } else {
        if (useJWTlogin) {
          sendHookRequestWithJWT();
        } else {
          sendHookRequestWithoutJWT();
        }
      }
    } else {
      if (useJWTlogin) {
        sendHookRequestWithJWT();
      } else {
        sendHookRequestWithoutJWT();
      }
    }
  }
}

function validateUserLimit(usergroup) {
  var contactMeModal = document.querySelector('#contactModal');
  fetch(zyxmeconfig.webchatscriptUrl + '/group/' + zyxmeconfig.smoochAppId + '/' + usergroup).then(function (response) {
    response.json().then(function (res) {
      if (res.result.access) {
        if (useJWTlogin) {
          sendHookRequestWithJWT();
        } else {
          sendHookRequestWithoutJWT();
        }
      } else {
        contactMeModal.querySelector('button').removeAttribute('disabled');
        var msg = res.result.msg;
        msg = msg.replace('{{limit}}-{{position}}', res.result.limit - res.result.position);
        msg = msg.replace('{{position}}-{{limit}}', res.result.position - res.result.limit);
        msg = msg.replace('{{limit}}', res.result.limit);
        msg = msg.replace('{{position}}', res.result.position);
        alert(msg);
      }
    });
  })["catch"](function (error) {
    contactMeModal.querySelector('button').removeAttribute('disabled');
  });
} // Función para actualizar la data del usuario luego del StartConversation


function SmoochUpdateUser() {
  var _document$querySelect8, _document$querySelect9;

  Smooch.updateUser({
    givenName: ((_document$querySelect8 = document.querySelector('#contactMeName')) === null || _document$querySelect8 === void 0 ? void 0 : _document$querySelect8.value) || ((_document$querySelect9 = document.querySelector('#contactMeFirstname')) === null || _document$querySelect9 === void 0 ? void 0 : _document$querySelect9.value),
    surname: '',
    email: '',
    properties: {
      'justGotUpdated': true
    }
  });
} // Function fecth al hook


function sendHookRequest(data) {
  fetch(zyxmeconfig.webhookUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function () {
    var contactMeModal = document.querySelector('#contactModal');

    if ((usegroups || useclassifications) && usequeue) {
      // Flag para crear el interval que consulta el queue position
      SetStorageData('queueposition', ""); // fetch para obtener el conversationid

      var smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.newAppUserId');
      setTimeout(function () {
        fetch(zyxmeconfig.webchatscriptUrl + '/conversation/' + zyxmeconfig.smoochAppId + '/' + smoochAppUserId).then(function (res1) {
          res1.json().then(function (res2) {
            var _smoochDOM$querySelec26;

            if (res2 !== null && res2 !== void 0 && res2._success) {
              var _res2$result, _res2$result2;

              SetStorageData('conversationid', res2 === null || res2 === void 0 ? void 0 : (_res2$result = res2.result) === null || _res2$result === void 0 ? void 0 : _res2$result.conversationid);
              SetStorageData('lastusertype', res2 === null || res2 === void 0 ? void 0 : (_res2$result2 = res2.result) === null || _res2$result2 === void 0 ? void 0 : _res2$result2.lastusertype);
            }

            var smoochDOM = window.frames['web-messenger-container'].contentDocument;
            (_smoochDOM$querySelec26 = smoochDOM.querySelector('#messenger-button').querySelector('img')) === null || _smoochDOM$querySelec26 === void 0 ? void 0 : _smoochDOM$querySelec26.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
            var contactmodal = document.querySelector('#contactModal');

            if (contactmodal) {
              contactmodal.style.display = 'none';
            }

            try {
              document.querySelector('#fakeChatDiv').remove();
            } catch (error) {}

            contactMeModal.querySelector('button').removeAttribute('disabled');
            Smooch.open();
          });
        });
      }, 3000);
    } else {
      var _smoochDOM$querySelec27;

      var smoochDOM = window.frames['web-messenger-container'].contentDocument;
      (_smoochDOM$querySelec27 = smoochDOM.querySelector('#messenger-button').querySelector('img')) === null || _smoochDOM$querySelec27 === void 0 ? void 0 : _smoochDOM$querySelec27.setAttribute('src', zyxmeconfig.stringButtonIconUrl);
      var contactmodal = document.querySelector('#contactModal');

      if (contactmodal) {
        contactmodal.style.display = 'none';
      }

      try {
        document.querySelector('#fakeChatDiv').remove();
      } catch (error) {}

      contactMeModal.querySelector('button').removeAttribute('disabled');
      Smooch.open();
    }
  })["catch"](function (error) {
    contactMeModal.querySelector('button').removeAttribute('disabled');
  });
}

function showQueuePosition() {
  var smoochDOM = window.frames['web-messenger-container'].contentDocument;
  var queuemessageDiv = smoochDOM.querySelector('#queue-message');

  if (queuemessageDiv) {
    queuemessageDiv.innerHTML = '';
    queuemessageDiv.style.display = 'block';
    queuePositionRefresh();
  }
}

function queuePositionRefresh() {
  var conversationid = GetStorageData('conversationid');

  if (usegroups || useclassifications) {
    getConversationPosition();

    try {
      clearInterval(window.zyxmefakesocket);
    } catch (e) {}

    window.zyxmefakesocket = setInterval(function () {
      getConversationPosition();
    }, queuerefreshdelay);
  }
}

function getConversationPosition() {
  var conversationid = GetStorageData('conversationid');

  if (conversationid != null) {
    fetch(zyxmeconfig.webchatscriptUrl + '/conversation/position/' + zyxmeconfig.smoochAppId + '/' + conversationid).then(function (res3) {
      res3.json().then(function (res4) {
        if (res4._success) {
          var _res4$result3, _window$frames$webMe2;

          var position = 1;
          var waitingtime = '00:00';

          if (res4.result != null) {
            var _res4$result, _res4$result2;

            position = (_res4$result = res4.result) === null || _res4$result === void 0 ? void 0 : _res4$result.queueposition;
            waitingtime = (_res4$result2 = res4.result) === null || _res4$result2 === void 0 ? void 0 : _res4$result2.waitingtime;
          } else {
            position = 1;
            waitingtime = '00:00';

            try {
              clearInterval(window.zyxmefakesocket);
            } catch (e) {}
          }

          SetStorageData('queueposition', (_res4$result3 = res4.result) === null || _res4$result3 === void 0 ? void 0 : _res4$result3.queueposition);
          var smoochDOM = (_window$frames$webMe2 = window.frames['web-messenger-container']) === null || _window$frames$webMe2 === void 0 ? void 0 : _window$frames$webMe2.contentDocument;

          if (smoochDOM != null) {
            var queuemessageDiv = smoochDOM.querySelector('#queue-message');

            if (queuemessageDiv) {
              var _zyxmeconfig3;

              var queuemessage = ((_zyxmeconfig3 = zyxmeconfig) === null || _zyxmeconfig3 === void 0 ? void 0 : _zyxmeconfig3.queuemessage) || '';
              queuemessage = queuemessage.replace('{{position}}', position);

              var _waitingtime$split = waitingtime.split(':'),
                  _waitingtime$split2 = _slicedToArray(_waitingtime$split, 2),
                  hh = _waitingtime$split2[0],
                  mi = _waitingtime$split2[1];

              queuemessage = queuemessage.replace('{{waitingtime}}', +hh * 60 + +mi);
              queuemessageDiv.innerHTML = queuemessage;
            }
          }
        }
      });
    })["catch"](function (error) {
      console.log(error);
    });
  }
} // Append App User Id


function appendNewAppUserId(key) {
  switch (key) {
    case 'DNI':
      var doctypetag = document.querySelector('#contactMeDocumenttype');
      var docnumtag = document.querySelector('#contactMeDocument');

      if (docnumtag != null) {
        return ((doctypetag === null || doctypetag === void 0 ? void 0 : doctypetag.value) || '') + ((docnumtag === null || docnumtag === void 0 ? void 0 : docnumtag.value) || '');
      }

      break;

    case 'FULLNAME':
      var nametag = document.querySelector('#contactMeName');

      if (nametag != null) {
        return (nametag === null || nametag === void 0 ? void 0 : nametag.value) || '';
      }

    case 'FIRSTNAME':
      var firstnametag = document.querySelector('#contactMeFirstname');

      if (firstnametag != null) {
        return (firstnametag === null || firstnametag === void 0 ? void 0 : firstnametag.value) || '';
      }

      break;

    case 'PHONE':
      var phonetag = document.querySelector('#contactMePhone');

      if (phonetag != null) {
        return window.intlTelInputGlobals.getInstance(phonetag).getNumber().split('+')[1] || '';
      }

      break;

    case 'CLIENTNUMBER':
      var clientnumbertag = document.querySelector('#contactMeClientnumber');

      if (clientnumbertag != null) {
        return (clientnumbertag === null || clientnumbertag === void 0 ? void 0 : clientnumbertag.value) || '';
      }

      break;

    default:
      return '';
  }

  return '';
} // Nuevo App User Id


function createNewAppUserId(oldUserId) {
  var newAppUserId = oldUserId;
  var appendAppUserId = appendNewAppUserId(zyxmeconfig.userkey) != '' ? '_' + appendNewAppUserId(zyxmeconfig.userkey) : '';

  if (zyxmeconfig.userkey != '' && appendAppUserId != '') {
    newAppUserId = newAppUserId + "_WEBM" + appendAppUserId;
  }

  SetStorageData(zyxmeconfig.integrationId + '.newAppUserId', newAppUserId);
  return newAppUserId;
} // HookRequest con JWT


function sendHookRequestWithJWT() {
  var data = buildHookDataRequest();
  var jwtData = {
    "appid": zyxmeconfig.smoochAppId,
    "userdate": sessionStorage["currentDateGetTime"] || new Date().getTime(),
    "userkey": appendNewAppUserId(zyxmeconfig.userkey)
  };
  fetch("".concat(zyxmeconfig.webchatscriptUrl, "/pool"), {
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
          var smoochUserId = "".concat(response["corpid"], "_").concat(response["orgid"], "_").concat(response["communicationchannelid"], "_").concat(zyxmeconfig.smoochAppId, "_").concat(response["smoochsessionid"]);
          Smooch.login(smoochUserId, response["jwt"]).then(function () {
            var currentUser = Smooch.getUser();
            SetStorageData(zyxmeconfig.integrationId + '.smoochUserId', smoochUserId);
            SetStorageData(zyxmeconfig.integrationId + '.smoochAppUserId', '' + response["appUserId"]);
            SetStorageData(zyxmeconfig.integrationId + '.smoochJWT', response["jwt"]);
            Smooch.startConversation().then(function () {
              var smoochAppUserId = GetStorageData(zyxmeconfig.integrationId + '.appUserId') || GetStorageData(zyxmeconfig.integrationId + '.smoochAppUserId');
              var dataNewConversation = buildHookDataRequest();
              var newAppUserId = createNewAppUserId(currentUser._id);
              dataNewConversation["AppUser"]["_id"] = newAppUserId;
              sendHookRequest(dataNewConversation);
            });
          });
        } else {
          console.log(response);
        }
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // HookRequest sin JWT


function sendHookRequestWithoutJWT() {
  var data = buildHookDataRequest();
  Smooch.startConversation().then(function () {
    var newAppUserId = createNewAppUserId(GetStorageData(zyxmeconfig.integrationId + ".appUserId"));
    data["AppUser"]["_id"] = newAppUserId;
    SmoochUpdateUser();
    sendHookRequest(data);
  });
} // Request para obtener data del IP


function getExtraData(callback) {
  var clientExtraData;

  try {
    fetch('https://www.cloudflare.com/cdn-cgi/trace').then(function (response) {
      response.text().then(function (response) {
        var res = response.split("\n");
        var extradata = "{";

        for (var i = 0; i < res.length - 1; i++) {
          var key = res[i].split("=")[0];
          var value = res[i].split("=")[1];
          extradata += "\"".concat(key, "\":\"").concat(value, "\",");
        }

        extradata = extradata.substring(0, extradata.length - 1);
        extradata += "}";
        localStorage.setItem('SmoochExtraData', extradata);
        callback();
      });
    })["catch"](function (error) {
      callback();
    });
  } catch (error) {
    callback();
  }
} // Función para mostrar y ocultar el formulario


function closeUserModal() {
  return _closeUserModal.apply(this, arguments);
} // Función para mostrar y ocultar el formulario


function _closeUserModal() {
  _closeUserModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var smoochDOM, contactmodal, speechbubble, _smoochDOM$querySelec28, _smoochDOM$querySelec29;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            smoochDOM = window.frames['web-messenger-container'].contentDocument;
            contactmodal = document.querySelector('#contactModal');
            speechbubble = document.querySelector('.speech-bubble-div');

            if (!((contactmodal === null || contactmodal === void 0 ? void 0 : contactmodal.style.display) == 'block')) {
              _context.next = 11;
              break;
            }

            (_smoochDOM$querySelec28 = smoochDOM.querySelector('#messenger-button')) === null || _smoochDOM$querySelec28 === void 0 ? void 0 : (_smoochDOM$querySelec29 = _smoochDOM$querySelec28.querySelector('img')) === null || _smoochDOM$querySelec29 === void 0 ? void 0 : _smoochDOM$querySelec29.setAttribute('src', zyxmeconfig.stringButtonIconUrl);

            if (contactmodal) {
              contactmodal.style.opacity = '0';
            }

            if (speechbubble) {
              speechbubble.style.display = 'block';
            }

            _context.next = 9;
            return timeout(200);

          case 9:
            if (contactmodal) {
              contactmodal.style.display = 'none';
            }

            if (speechbubble) {
              speechbubble.style.opacity = '1';
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _closeUserModal.apply(this, arguments);
}

function openUserModal() {
  return _openUserModal.apply(this, arguments);
}

function _openUserModal() {
  _openUserModal = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var smoochDOM, contactmodal, speechbubble, _smoochDOM$querySelec30, buttonURL;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(GetStorageData(zyxmeconfig.integrationId + '.clientId') != null)) {
              _context2.next = 4;
              break;
            }

            Smooch.open();
            _context2.next = 16;
            break;

          case 4:
            smoochDOM = window.frames['web-messenger-container'].contentDocument;
            contactmodal = document.querySelector('#contactModal');
            speechbubble = document.querySelector('.speech-bubble-div');

            if (contactmodal.style.display == 'block') {
              _context2.next = 16;
              break;
            }

            buttonURL = zyxmeconfig.stringCancelIconUrl != '' ? zyxmeconfig.stringCancelIconUrl : zyxmeconfig.stringButtonIconUrl;
            (_smoochDOM$querySelec30 = smoochDOM.querySelector('#messenger-button').querySelector('img')) === null || _smoochDOM$querySelec30 === void 0 ? void 0 : _smoochDOM$querySelec30.setAttribute('src', buttonURL);

            if (contactmodal) {
              contactmodal.style.display = 'block';
            }

            if (speechbubble) {
              speechbubble.style.opacity = '0';
            }

            _context2.next = 14;
            return timeout(200);

          case 14:
            if (contactmodal) {
              contactmodal.style.opacity = '1';
            }

            if (speechbubble) {
              speechbubble.style.display = 'none';
            }

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _openUserModal.apply(this, arguments);
}