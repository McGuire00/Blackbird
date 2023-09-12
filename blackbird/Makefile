# Django commands
runserver:
	python manage.py runserver

migrate:
	python manage.py migrate


shell:
	python manage.py shell

test:
	python manage.py test

# Docker commands
build:
	docker build -t django-backend .

up:
	docker compose up -d

down:
	docker compose down

clean:
	find . -type f -name "*.pyc" -delete
	docker compose -f docker-compose.yml down --rmi local --remove-orphans

.PHONY: runserver migrate createsuperuser shell lint test build up down clean help
