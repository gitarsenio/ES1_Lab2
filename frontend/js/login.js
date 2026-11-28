const SESSION_KEY = 'caderneta-digital-session';

const form = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const rememberInput = document.querySelector('#remember');
const togglePasswordBtn = document.querySelector('#toggle-password');
const forgotPasswordBtn = document.querySelector('#forgot-password');
const submitButton = document.querySelector('#submit-button');
const messageBox = document.querySelector('#login-message');

// Se já existir sessão activa, segue directamente para o painel.
if (localStorage.getItem(SESSION_KEY) || sessionStorage.getItem(SESSION_KEY)) {
  window.location.replace('index.html');
}

function showMessage(text, isError = false) {
  messageBox.textContent = text;
  messageBox.hidden = false;
  messageBox.classList.toggle('error', isError);
}

togglePasswordBtn?.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePasswordBtn.textContent = isPassword ? 'Ocultar' : 'Mostrar';
  togglePasswordBtn.setAttribute(
    'aria-label',
    isPassword ? 'Ocultar palavra-passe' : 'Mostrar palavra-passe',
  );
});

forgotPasswordBtn?.addEventListener('click', () => {
  showMessage('Contacte o administrador do sistema para recuperar o acesso.');
});

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  messageBox.hidden = true;

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showMessage('Preencha o e-mail e a palavra-passe.', true);
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'A validar...';

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, remember: rememberInput.checked }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Não foi possível iniciar sessão.');
    }

    const storage = rememberInput.checked ? localStorage : sessionStorage;
    storage.setItem(SESSION_KEY, JSON.stringify(data.user));
    showMessage(data.message || 'Autenticação efectuada com sucesso.');

    window.location.href = 'index.html';
  } catch (error) {
    showMessage(
      error instanceof Error ? error.message : 'Erro de ligação ao servidor.',
      true,
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Entrar na caderneta →';
  }
});
