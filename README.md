

## О проекте

Проект выполнен с на laravel и React
Версия PHP 8.1
СУБД SQLITE версии 3

## Настройка 

Для включения расширения sqlite в PHP в файле конфигурации php.ini  необходимо:
-раскомментировать extension=pdo_sqlite
-раскомментировать extension=sqlite3

## Настройка

Скачиваем проект

    git clone https://github.com/Yushkevich-A-A/diploma_react_laravel

    cd diploma_react_laravel

Устанавливаем все зависимости composer и npm

    composer install

    npm install

Переименовываем .env.example в .env и генерируем ключ базы данных командой

    php artisan key:generate


## Настройка базы данных

Переключаем laravel на работу с sqlite в файле .env нужно: 

-указать тип DB_CONNECTION=sqlite
-в папке datebase создать файл с расширением .sqlite
-указать абсолютный путь к файлу .sqlite


После установки всех зависимостей, необходимо запустить миграции с заранее подготовленными начальными данными

    php artisan migrate --seed

для запуска проекта выполняем команду 

    php artisan serve


## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
