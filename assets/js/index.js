let btn = document.querySelector('.falar');

// Função para capturar o que foi escrito;

btn.addEventListener('click', () => {
  let texto = document.querySelector("input[type='text']").value;
  let voz = new SpeechSynthesisUtterance(texto);

  // Configurar o áudio agora;

  voz.lang = 'pt-BR';
  voz.pitch = 1;
  voz.volume = 5;
  voz.rate = 1;

  // Verificar a permissão para reproduzir áudio

  if ('speechSynthesis' in window && window.speechSynthesis.speak) {
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    } else {
      window.speechSynthesis.speak(voz);
    }
  } else {
    console.log('O navegador não suporta a síntese de fala.');
  }
});
