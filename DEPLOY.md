# 🚀 Инструкция по деплою на GitHub Pages

## Подготовка репозитория

1. **Создайте репозиторий на GitHub:**
   - Перейдите на [github.com](https://github.com)
   - Нажмите "New repository"
   - Название: `healkap` (или любое другое)
   - Сделайте репозиторий публичным
   - НЕ добавляйте README, .gitignore или лицензию (они уже есть)

2. **Загрузите код в репозиторий:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/healkap.git
   git push -u origin main
   ```

## Настройка GitHub Pages

1. **Включите GitHub Pages:**
   - Перейдите в Settings → Pages
   - Source: выберите "GitHub Actions"
   - Сохраните настройки

2. **Проверьте workflow:**
   - Файл `.github/workflows/deploy.yml` уже настроен
   - При каждом push в ветку `main` сайт автоматически обновится

## Проверка деплоя

1. **Дождитесь завершения Actions:**
   - Перейдите в Actions в вашем репозитории
   - Дождитесь успешного завершения workflow

2. **Откройте сайт:**
   - URL будет: `https://YOUR_USERNAME.github.io/healkap/`
   - Или найдите ссылку в Settings → Pages

## Локальная проверка

Для проверки локально:

```bash
# Сборка проекта
npm run build

# Запуск статического сервера (опционально)
npx serve out
```

## Структура файлов для деплоя

```
.github/
└── workflows/
    └── deploy.yml          # GitHub Actions workflow
out/                        # Статические файлы (создается при сборке)
├── index.html
├── _next/
├── images/
└── ...
```

## Возможные проблемы

1. **Сайт не обновляется:**
   - Проверьте, что workflow выполнился успешно
   - Убедитесь, что в Settings → Pages выбран источник "GitHub Actions"

2. **Ошибки сборки:**
   - Проверьте логи в Actions
   - Убедитесь, что все зависимости установлены

3. **Изображения не загружаются:**
   - Проверьте пути к изображениям
   - Убедитесь, что basePath настроен правильно

## Обновление сайта

Для обновления сайта просто сделайте push в ветку `main`:

```bash
git add .
git commit -m "Update site"
git push origin main
```

Сайт автоматически обновится через несколько минут.
