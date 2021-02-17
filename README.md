# Data Visualization App
### Recruitment task

Before run production ready `docker-compose.yml`, create `.env` file in `./backend/` directory

Environment file should contain two keys:
```editorconfig
SECRET_KEY=<SECRET_KEY> # You can use get_random_secret_key() from django.core.management.utils
DEBUG=0
```

It doesn't matter if you run production or development docker-compose
You have to migrate the database, and create user with following commands

```editorconfig
# FOR PRODUCTION -> docker-compose <cmd>
# FOR DEVELOPMENT -> docker-compose -f docker-compose.dev.yml <cmd>
# RUN THIS AFTER YOU CREATE AND START ALL CONTAINERS 

docker-compose run backend python manage.py migrate
docker-compose run backend python maange.py createsuperuser

```