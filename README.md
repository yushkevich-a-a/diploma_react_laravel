

## О проекте и версиях

Проект выполнен с на laravel и React
Версия PHP 8.1
СУБД SQLITE версии 3


## Настройки

### Настройка php

Для включения расширения sqlite в PHP в файле конфигурации php.ini  необходимо:
-раскомментировать extension=pdo_sqlite
-раскомментировать extension=sqlite3

### Установка и предварительная настройка проекта

Скачиваем проект

    git clone https://github.com/Yushkevich-A-A/diploma_react_laravel

    cd diploma_react_laravel

Устанавливаем все зависимости composer и npm

    composer install

    npm install

Переименовываем .env.example в .env и генерируем ключ базы данных командой

    php artisan key:generate


### Настройка базы данных

Переключаем laravel на работу с sqlite в файле .env нужно: 

*указать тип DB_CONNECTION=sqlite
*в папке datebase создать файл с расширением .sqlite
*указать абсолютный путь к файлу .sqlite (в windows необходимо экранировать обратный слеш)

### Настройка проекта

После установки всех зависимостей и настройки БД, необходимо запустить миграции с заранее подготовленными начальными данными

    php artisan migrate --seed

настройте ссылку на хранение qr-кодов 

    php artisan storage:link

Проект готов к работе

### Запуск

для запуска проекта на localhost вводим команду

    php artisan serve

настроено 2 модуля приложения:
модуль администратора(/admin) создан тестовый админ (логин: e@e.ru пароль: 12345)
если админ не авторизирован происходит перенаправление на страницу авторизации
модуль пользователя(/client)
если в url не указан модуль, происходит автоматическое перенаправление на модуль клиента

## Структура 

В приложении используется стандартная структура папок и файлов приложения laravel.

Front-end часть разработана с использованием методологии Atomic design.

В приложении созданы следующие сущности:
Film - сущность фильма. Контроллер этой сущности отдает весь список созданных фильмов, создает новый фильм, показывает информацию по конкретному фильму, удаляет указанный фильм. (при удалении конкретного фильма удаляется соответствующий этому фильму сеанс)
Hall - сущность зал. Контроллер этой сущности отдает весь список созданных заллов, создает новый зал и проверяет есть ли совпаление имен существующих заллов с создаваемым, обновляет информацию по ценам на места в зале, показывает информацию по конкретному залу, удаляет указанный зал. (при удалении конкретного зала удаляется соответствующий этому залу сеанс)
Seat - сущность места. Контроллер этой сущности отдает весь список созданных мест относящийся к конкретному залу, создает заданное колличество мест для конкретного зала с указанием типа места и его статуса (активен/неактивен). удаляет все места относящиеся к удаляемому залу.
Session - сущность сессии. Контроллер этой сущности отдает весь список сессий относящийся к определенному залу, создает новую сессию и проверяет нет ли пересечений с существующими сессиями. удаляется сессию при удалении фильма или при удалении зала.
Order - сущность заказа. Принимает информацию от пользователя о сформированном заказе, генерирует qr-код и отдает код пользователю в виде картинки, также создает билет для каждого занятого места.
User - сущность пользователя(администратора зала). Администратор один тестовый, создается при первоначальной миграции БД. Создание нового администратора, изменение текущего и удаление в рамках данного задания не предусмотрено. 

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
