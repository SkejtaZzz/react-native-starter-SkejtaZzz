# Field Notes

**Prosta aplikacja mobilna do tworzenia notatek z zdjęciami**, wykorzystująca natywną funkcję aparatu i integrację z API.

---

## 📱 Funkcje
- **Tworzenie notatek** z tytułem, opisem i zdjęciem (użycie natywnej kamery).
- **Lista notatek** z miniaturkami zdjęć.
- **Szczegóły notatki** z pełnym podglądem zdjęcia.
- **Zapis notatek** do publicznego API (JSONPlaceholder).
- **Obsługa błędów**: brak uprawnień do kamery, brak notatek.

---

## 🛠 Technologie
- **React Native** + **Expo**
- **Natywna funkcja**: `expo-camera` (robienie zdjęć)
- **API**: JSONPlaceholder (zapis notatek)
- **Stan aplikacji**: Kontekst (`NotesContext`)

---

## 📱 Jak uruchomić?

### Wymagania
- Node.js (v16+)
- Expo CLI (`npm install -g expo-cli`)
- Urządzenie z systemem Android/iOS lub emulator

### Instalacja
1. Sklonuj repozytorium:
   ```bash
   git clone <adres-repozytorium>
   cd FieldNotes
2. Zainstaluj zależności:
   ```bash
   npm install
3. Uruchom projekt:
   ```bash
   npx expo start
4. Skanuj kod QR w aplikacji Expo Go lub uruchom na emulatorze.
---
📸 Jak przetestować?

1. Dodawanie notatki
Kliknij "Dodaj nową notatkę" na ekranie startowym.
Zrób zdjęcie przyciskiem "Zrób zdjęcie".
Wpisz tytuł i opis, następnie zapisz notatkę.

2. Lista notatek
Przejdź do "Moje notatki", aby zobaczyć listę.
Kliknij notatkę, aby zobaczyć szczegóły.

3. Obsługa błędów
Brak uprawnień do kamery: Aplikacja poprosi o zezwolenie.
Brak notatek: Wyświetli się komunikat "Brak notatek. Dodaj pierwszą!".

---
Struktura projektu

```plaintext
FieldNotes/
├── app/
│   ├── context/          # Kontekst notatek
│   ├── notes/            # Widoki: lista, kamera, szczegóły
│   ├── services/         # Integracja z API
│   └── _layout.tsx       # Nawigacja
├── assets/               # Ikony, grafiki
└── README.md             # Ten plik
```
---
```plaintext
🎯 Definition of Done
✅ 3-4 widoki (lista, szczegóły, kamera, start).
✅ Natywna funkcja (kamera).
✅ Integracja z API (zapis notatek).
✅ Czytelny UI + dostępność.
✅ Obsługa błędów (brak uprawnień, brak notatek).
```
---
![bc1addb7-aef9-4899-b515-886f19e189a8](https://github.com/user-attachments/assets/52d6d3e6-cf63-4765-9ad8-9d404034dee6)
![bbf633fd-c687-435a-b844-e158bf0e4f33](https://github.com/user-attachments/assets/ebdfddbb-ffa5-45d5-b977-4a678e8aae59)
![8f26e50d-6aaa-400d-9f94-0e6281f850cd](https://github.com/user-attachments/assets/f999ec85-1f17-4e9f-814d-e3870b937a56)
![6a17609a-14d0-4aa1-b9b2-7461b61fdb70](https://github.com/user-attachments/assets/0ebcdc13-9077-45eb-b0b9-83a05436f028)
![348d352c-01e2-4083-bfb7-80c7c98717d7](https://github.com/user-attachments/assets/55526b8f-4a37-4ea7-97f6-f4670194e6b4)
![a33f560b-6091-4bb2-95fd-0f1c7b0ae5c5](https://github.com/user-attachments/assets/610af229-a94a-4328-92d9-a8b737780f8d)


---

Autor: Dominik
Data: 17.01.2026

