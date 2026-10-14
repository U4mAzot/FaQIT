# FaQIT - baza wiedzy dla użytkowników

Strona z instrukcjami rozwiązywania najczęstszych problemów IT, pisanymi prostym
językiem dla użytkowników nietechnicznych. Pomaga **zmniejszyć liczbę zgłoszeń**
do helpdesku, bo użytkownik może rozwiązać prosty problem samodzielnie.

## Funkcje

- Wyszukiwarka na żywo, która ignoruje polskie znaki i wielkość liter (`haslo` znajduje „Hasło”)
- Filtrowanie po kategoriach: konto i hasło, drukarki, sieć, komputer, poczta i Teams, bezpieczeństwo, pliki
- Instrukcje krok po kroku w rozwijanych sekcjach
- Wskazówki i dobre praktyki (np. jak rozpoznać phishing)
- Sekcja kontaktu z helpdeskiem, gdy instrukcja nie pomoże
- Responsywny wygląd (działa na telefonie)
- Czysty HTML, CSS i JavaScript, bez bibliotek i bez serwera

## Uruchomienie

Wystarczy otworzyć plik `index.html` w przeglądarce.

Strona może być też opublikowana na **GitHub Pages**: Settings → Pages → Deploy from branch.

## Dodawanie artykułów

Artykuły znajdują się w pliku [`articles.js`](articles.js). Nowy artykuł to jeden obiekt:

```js
{
  category: 'Drukarki',
  title: 'Drukarka nie drukuje',
  tags: ['drukarka', 'druk', 'kolejka'],
  steps: ['Krok 1...', 'Krok 2...'],
  tip: 'Opcjonalna wskazówka.'
}
```

## Struktura

```
FaQIT/
├── index.html    # struktura strony
├── style.css     # wygląd
├── articles.js   # treść bazy wiedzy
└── script.js     # wyszukiwarka i filtrowanie
```

## Wykorzystane umiejętności

- Tworzenie dokumentacji dla użytkownika końcowego (tłumaczenie problemów technicznych prostym językiem)
- Znajomość najczęstszych zgłoszeń helpdesku i ich rozwiązań (1. linia wsparcia)
- HTML, CSS, JavaScript (DOM, filtrowanie, normalizacja tekstu)
