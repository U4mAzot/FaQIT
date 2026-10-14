// Artykuły bazy wiedzy - aby dodać nowy, dopisz obiekt do tablicy.
const ARTICLES = [
  {
    category: 'Konto i hasło',
    title: 'Nie pamiętam hasła / konto zostało zablokowane',
    tags: ['hasło', 'login', 'zablokowane', 'reset', 'logowanie'],
    steps: [
      'Upewnij się, że nie masz włączonego Caps Lock i że wybrany jest właściwy język klawiatury (PL).',
      'Po 5 błędnych próbach konto blokuje się na 15 minut - odczekaj i spróbuj ponownie.',
      'Skorzystaj z samodzielnego resetu hasła: kliknij „Nie pamiętam hasła” na ekranie logowania.',
      'Jeśli to nie pomoże, zadzwoń do helpdesku - po weryfikacji tożsamości otrzymasz hasło tymczasowe.'
    ],
    tip: 'Helpdesk nigdy nie poprosi Cię o podanie hasła przez telefon ani e-mail.'
  },
  {
    category: 'Konto i hasło',
    title: 'Jak zmienić hasło?',
    tags: ['hasło', 'zmiana', 'ctrl alt del'],
    steps: [
      'Naciśnij Ctrl + Alt + Delete.',
      'Wybierz „Zmień hasło”.',
      'Podaj stare hasło, a następnie dwa razy nowe.',
      'Nowe hasło: min. 12 znaków, wielka i mała litera, cyfra oraz znak specjalny.'
    ],
    tip: 'Dobre hasło łatwo zapamiętać jako zdanie, np. „KawaO7RanoTo3Podstawa!”.'
  },
  {
    category: 'Drukarki',
    title: 'Drukarka nie drukuje',
    tags: ['drukarka', 'druk', 'wydruk', 'kolejka', 'offline'],
    steps: [
      'Sprawdź, czy drukarka jest włączona, ma papier i nie wyświetla błędu (np. zacięcie papieru).',
      'Otwórz Ustawienia → Bluetooth i urządzenia → Drukarki i skanery i sprawdź, czy drukarka nie ma statusu „Offline”.',
      'Otwórz kolejkę wydruku i anuluj zawieszone dokumenty.',
      'Uruchom ponownie komputer i drukarkę.',
      'Upewnij się, że drukujesz na właściwą drukarkę (ustaw ją jako domyślną).'
    ],
    tip: 'Jeśli drukarka sieciowa nie działa u kilku osób naraz, zgłoś to od razu - to awaria drukarki, nie komputera.'
  },
  {
    category: 'Drukarki',
    title: 'Jak dodać drukarkę sieciową?',
    tags: ['drukarka', 'dodać', 'instalacja', 'sieciowa'],
    steps: [
      'Otwórz Ustawienia → Bluetooth i urządzenia → Drukarki i skanery.',
      'Kliknij „Dodaj urządzenie” i poczekaj, aż system wyszuka drukarki.',
      'Wybierz drukarkę z listy (nazwa jest na naklejce na drukarce, np. PRN-BIURO-2P).',
      'Jeśli jej nie ma, kliknij „Dodaj ręcznie” i wpisz adres: \\\\serwer-druku\\NAZWA-DRUKARKI.'
    ]
  },
  {
    category: 'Internet i sieć',
    title: 'Nie działa internet',
    tags: ['internet', 'sieć', 'wifi', 'kabel', 'brak połączenia'],
    steps: [
      'Sprawdź ikonę sieci w prawym dolnym rogu - czy jesteś połączony z Wi-Fi lub kablem?',
      'Sprawdź, czy nie jest włączony tryb samolotowy.',
      'Jeśli używasz kabla - sprawdź, czy jest dobrze wpięty (dioda przy porcie powinna świecić).',
      'Odłącz się od Wi-Fi i połącz ponownie.',
      'Uruchom ponownie komputer.',
      'Sprawdź, czy internet działa u osoby obok - jeśli nie, to awaria sieci i trzeba ją zgłosić.'
    ]
  },
  {
    category: 'Internet i sieć',
    title: 'VPN nie łączy się (praca zdalna)',
    tags: ['vpn', 'praca zdalna', 'home office', 'połączenie'],
    steps: [
      'Sprawdź, czy masz działający internet w domu (otwórz dowolną stronę).',
      'Zamknij klienta VPN całkowicie (także z zasobnika obok zegara) i uruchom ponownie.',
      'Upewnij się, że wpisujesz login bez domeny i aktualne hasło.',
      'Sprawdź, czy kod z aplikacji uwierzytelniającej (MFA) nie wygasł.',
      'Jeśli łączysz się z hotelowego lub publicznego Wi-Fi, spróbuj udostępnić internet z telefonu.'
    ]
  },
  {
    category: 'Komputer',
    title: 'Komputer działa bardzo wolno',
    tags: ['wolny', 'wolno', 'zawiesza', 'laguje', 'wydajność', 'restart'],
    steps: [
      'Uruchom komputer ponownie - wiele problemów znika po restarcie (zwykłe „zamknij” przy szybkim uruchamianiu nie czyści pamięci).',
      'Otwórz Menedżer zadań (Ctrl + Shift + Esc) i sprawdź, który program zużywa najwięcej CPU lub pamięci.',
      'Zamknij niepotrzebne karty w przeglądarce - każda zajmuje pamięć.',
      'Sprawdź wolne miejsce na dysku C: (powinno być min. 10%).',
      'Pozwól zainstalować się aktualizacjom Windows i uruchom komputer ponownie.'
    ]
  },
  {
    category: 'Komputer',
    title: 'Drugi monitor nie wyświetla obrazu',
    tags: ['monitor', 'ekran', 'hdmi', 'stacja dokująca', 'obraz'],
    steps: [
      'Sprawdź, czy monitor jest włączony i czy kabel jest wpięty z obu stron.',
      'Naciśnij Windows + P i wybierz „Rozszerz”.',
      'Sprawdź źródło sygnału w menu monitora (HDMI / DisplayPort).',
      'Jeśli używasz stacji dokującej - odłącz laptopa od stacji i podłącz ponownie.'
    ]
  },
  {
    category: 'Poczta i Teams',
    title: 'Outlook nie wysyła lub nie odbiera wiadomości',
    tags: ['outlook', 'poczta', 'email', 'mail', 'skrzynka'],
    steps: [
      'Sprawdź na dole okna, czy Outlook nie jest w trybie „Pracuj w trybie offline” (karta Wysyłanie/odbieranie).',
      'Sprawdź folder „Skrzynka nadawcza” - jeśli wiadomość tam utknęła, może mieć zbyt duży załącznik (limit 25 MB).',
      'Sprawdź, czy skrzynka nie jest pełna (Plik → Narzędzia → Oczyszczanie skrzynki).',
      'Zamknij Outlooka i uruchom go ponownie.',
      'Sprawdź, czy poczta działa w przeglądarce na outlook.office.com - jeśli tak, problem jest w aplikacji.'
    ]
  },
  {
    category: 'Poczta i Teams',
    title: 'Teams - inni mnie nie słyszą lub nie widzą',
    tags: ['teams', 'mikrofon', 'kamera', 'słuchawki', 'spotkanie', 'dźwięk'],
    steps: [
      'Sprawdź, czy mikrofon nie jest wyciszony w Teams i fizycznie na słuchawkach.',
      'W Teams kliknij ... → Ustawienia → Urządzenia i wybierz właściwy mikrofon, głośnik i kamerę.',
      'Zrób „Połączenie testowe” w tych samych ustawieniach.',
      'Sprawdź Ustawienia Windows → Prywatność → Mikrofon/Kamera, czy aplikacje mają dostęp.',
      'Odłącz i podłącz ponownie słuchawki, a następnie uruchom Teams ponownie.'
    ]
  },
  {
    category: 'Bezpieczeństwo',
    title: 'Dostałem podejrzanego maila (phishing)',
    tags: ['phishing', 'spam', 'wirus', 'podejrzany', 'link', 'bezpieczeństwo'],
    steps: [
      'Nie klikaj w linki i nie otwieraj załączników.',
      'Sprawdź adres nadawcy - oszuści podszywają się pod znane firmy (np. micros0ft-support.com).',
      'Uważaj na presję czasu: „Twoje konto zostanie zablokowane w ciągu 24h!”.',
      'Zgłoś wiadomość przyciskiem „Zgłoś” w Outlooku lub przekaż ją na helpdesk@firma.pl.',
      'Jeśli już kliknąłeś link lub podałeś hasło - natychmiast zadzwoń do helpdesku i zmień hasło.'
    ],
    tip: 'Szybkie zgłoszenie to nic wstydliwego - pozwala ochronić całą firmę.'
  },
  {
    category: 'Pliki',
    title: 'Usunąłem ważny plik - jak go odzyskać?',
    tags: ['plik', 'usunięty', 'odzyskać', 'kosz', 'onedrive', 'wersje'],
    steps: [
      'Sprawdź Kosz na pulpicie - kliknij plik prawym przyciskiem i wybierz „Przywróć”.',
      'Jeśli plik był w OneDrive/SharePoint - wejdź na stronę OneDrive, otwórz „Kosz” i przywróć plik (do 93 dni).',
      'Aby cofnąć zmiany w pliku: kliknij go prawym przyciskiem → „Historia wersji”.',
      'Pliki z dysku sieciowego może przywrócić helpdesk z kopii zapasowej - podaj nazwę i lokalizację pliku.'
    ]
  }
];
