"""
WSGI config for kolibri project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.11/howto/deployment/wsgi/
"""
import os
import time

from django.core.wsgi import get_wsgi_application
from django.db.utils import OperationalError

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE", "kolibri.deployment.default.settings.base"
)

application = None
tries_remaining = 6
interval = 10
while not application and tries_remaining:
    try:
        application = get_wsgi_application()
    except OperationalError:
        # An OperationalError happens when sqlite vacuum is being
        # executed. the db is locked
        print(
            "Database assumed to be undergoing a VACUUM, retrying again in {} seconds...".format(
                interval
            )
        )
        tries_remaining -= 1
        time.sleep(interval)

if not application:
    print(
        "Could not start Kolibri with {} retries. Trying one last time".format(
            tries_remaining
        )
    )
    application = get_wsgi_application()
