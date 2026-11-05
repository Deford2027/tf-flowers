# tf-flowers – новый лендинг TargetFactory «Маркетинг для цветочных магазинов»

- Новая версия по макету Figma: https://korolevuiux-glitch.github.io/tema-mail-tf-flowers-v2/ (исходник – tema-mail/tf-flowers) (noindex). Клиент – Денис Коротаев, targetfactory.ru.
- Главная – по прототипу flowers v2 (deford.ru/prototypes/flowers-v2/versiya-2/) блок в блок; страницы why-us, prices, reviews, breakdowns.
- Дизайн – с лендинга deford.ru/flowers (репо deford-studio): компоненты скопированы, пути с префиксом /tf-flowers/.
- Задание и вопросы Денису – docs/ZADANIE.md. Цифры только подтверждённые, без длинного тире «—».
- Сборка: `npm i && npm run build` (Node из ~/.local/node/bin). Пуш в main – выкладка на Pages.
- Макет в Figma (29.10.2026): https://www.figma.com/design/xiCcUceHSqkiG26eZzDFS3 – страница «Дизайн» (5 страниц сайта 1440 и те же 5 страниц мобилкой 390 – справа, «… – 390»), «Сетка» (ч/б прототип обеих версий: 12 колонок на десктопе, 4 на мобилке). Снят со сборки сайта; после правок сайта макет сам не обновляется.
- 05.11.2026: главная обновлена по Figma, страница «Page 6», фрейм «Главная» 88:3 (только десктоп 1440, мобилка – по аналогии). Новые блоки: боли (картинки снизу), кейсы-слайдер, «Почему мы» (WhyFirst home), этапы с кнопками, бонусы (возвращены), «Сайты» + магазины одной секцией (ShopCases variant="sites"), «Остался вопрос?». Стили – конец styles/flowers-figma.css. Подключён шрифт Inter Tight (Google Fonts).
