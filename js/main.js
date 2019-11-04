/* Função para copiar texto para área de colagem
const copyToClipboard = str => {
     const el = document.createElement('textarea');
     el.value = "teste@teste.com";
     el.setAttribute('readonly', '');
     el.style.position = 'absolute';
     el.style.left = '-9999px';
     document.body.appendChild(el);
     el.select();
     document.execCommand('copy');
     document.body.removeChild(el);
};*/