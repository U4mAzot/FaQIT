const searchInput = document.getElementById('search');
const categoriesEl = document.getElementById('categories');
const articlesEl = document.getElementById('articles');
const counterEl = document.getElementById('counter');
const emptyEl = document.getElementById('empty');

let activeCategory = 'Wszystkie';

// Usuwa polskie znaki i wielkość liter, żeby "haslo" znajdowało "Hasło"
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function matches(article, query) {
  if (!query) return true;
  const haystack = normalize([article.title, ...article.tags, ...article.steps].join(' '));
  return normalize(query)
    .split(/\s+/)
    .filter(Boolean)
    .every(word => haystack.includes(word));
}

function renderCategories() {
  const categories = ['Wszystkie', ...new Set(ARTICLES.map(a => a.category))];
  categoriesEl.innerHTML = '';

  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.className = category === activeCategory ? 'active' : '';
    button.addEventListener('click', () => {
      activeCategory = category;
      renderCategories();
      renderArticles();
    });
    categoriesEl.appendChild(button);
  });
}

function createArticle(article) {
  const details = document.createElement('details');
  details.className = 'article';

  const summary = document.createElement('summary');
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = article.category;
  summary.append(badge, article.title);

  const list = document.createElement('ol');
  article.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    list.appendChild(li);
  });

  details.append(summary, list);

  if (article.tip) {
    const tip = document.createElement('p');
    tip.className = 'tip';
    tip.textContent = 'Wskazówka: ' + article.tip;
    details.appendChild(tip);
  }

  return details;
}

function renderArticles() {
  const query = searchInput.value.trim();
  const visible = ARTICLES.filter(article =>
    (activeCategory === 'Wszystkie' || article.category === activeCategory) && matches(article, query)
  );

  articlesEl.innerHTML = '';
  visible.forEach(article => articlesEl.appendChild(createArticle(article)));

  // przy wyszukiwaniu jednego wyniku od razu go rozwijamy
  if (query && visible.length === 1) {
    articlesEl.firstChild.open = true;
  }

  counterEl.textContent = `Znaleziono artykułów: ${visible.length}`;
  emptyEl.hidden = visible.length > 0;
}

searchInput.addEventListener('input', renderArticles);

renderCategories();
renderArticles();
