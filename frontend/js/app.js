const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('[data-theme-label]');
const themeIcon = document.querySelector('[data-theme-icon]');
const THEME_STORAGE_KEY = 'caderneta-digital-theme';

function applyTheme(theme) {
  const selectedTheme = theme === 'dark' ? 'dark' : 'light';
  const isDark = selectedTheme === 'dark';

  document.documentElement.dataset.theme = selectedTheme;

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo escuro');
  }

  if (themeLabel) themeLabel.textContent = isDark ? 'Modo claro' : 'Modo escuro';
  if (themeIcon) themeIcon.textContent = isDark ? '☀' : '☾';
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.warn('Não foi possível guardar a preferência de tema neste navegador:', error);
  }
}

function initialiseTheme() {
  let savedTheme = document.documentElement.dataset.theme || 'light';

  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') savedTheme = storedTheme;
  } catch (error) {
    console.warn('Não foi possível ler a preferência de tema neste navegador:', error);
  }

  applyTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });
}

const apiStatus = document.querySelector('#api-status');
const databaseStatus = document.querySelector('#database-status');
const statusMessage = document.querySelector('#status-message');
const refreshButton = document.querySelector('#refresh-status');

function updateLabel(element, text, state) {
  if (!element) return;
  element.textContent = text;
  element.classList.remove('status-pending', 'status-ok', 'status-error');
  element.classList.add(state);
}

async function checkServices() {
  if (!apiStatus || !databaseStatus || !statusMessage || !refreshButton) return;

  updateLabel(apiStatus, 'A verificar...', 'status-pending');
  updateLabel(databaseStatus, 'A verificar...', 'status-pending');
  statusMessage.textContent = 'A verificar a disponibilidade dos serviços.';
  refreshButton.disabled = true;

  try {
    const response = await fetch('/api/health', {
      headers: { Accept: 'application/json' },
    });
    const result = await response.json();

    updateLabel(apiStatus, response.ok || response.status === 503 ? 'Online' : 'Indisponível',
      response.ok || response.status === 503 ? 'status-ok' : 'status-error');

    if (result.database?.status === 'connected') {
      updateLabel(databaseStatus, 'Ligada', 'status-ok');
      statusMessage.textContent = `Ligação confirmada à base de dados ${result.database.name}.`;
    } else {
      updateLabel(databaseStatus, 'Sem ligação', 'status-error');
      statusMessage.textContent = result.message ?? 'A API respondeu, mas a base de dados não está acessível.';
    }
  } catch (error) {
    updateLabel(apiStatus, 'Indisponível', 'status-error');
    updateLabel(databaseStatus, 'Não verificada', 'status-pending');
    statusMessage.textContent = 'Não foi possível contactar a API. Confirme se o servidor está em execução.';
    console.error('Falha ao consultar o estado dos serviços:', error);
  } finally {
    refreshButton.disabled = false;
  }
}

function setupTableFilters() {
  const searchInputs = document.querySelectorAll('[data-search-input]');

  searchInputs.forEach((input) => {
    const group = input.dataset.searchInput;
    const filter = document.querySelector(`[data-filter-select="${group}"]`);
    const rows = document.querySelectorAll(`[data-search-item="${group}"]`);
    const emptyState = document.querySelector(`#${group}-empty`);

    function applyFilters() {
      const searchTerm = input.value.trim().toLocaleLowerCase('pt-PT');
      const selectedValue = filter?.value ?? 'all';
      let visibleCount = 0;

      rows.forEach((row) => {
        const matchesSearch = row.textContent.toLocaleLowerCase('pt-PT').includes(searchTerm);
        const matchesFilter = selectedValue === 'all' || row.dataset.filterValue === selectedValue;
        const visible = matchesSearch && matchesFilter;
        row.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (emptyState) emptyState.classList.toggle('visible', visibleCount === 0);
    }

    input.addEventListener('input', applyFilters);
    filter?.addEventListener('change', applyFilters);
    applyFilters();
  });
}

initialiseTheme();
refreshButton?.addEventListener('click', checkServices);
setupTableFilters();
if (refreshButton) checkServices();
