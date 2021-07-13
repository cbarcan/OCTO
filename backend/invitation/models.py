from django.db import models

from tournament.models import Tournament


class Invitation(models.Model):
    email = models.EmailField()
    status = models.TextChoices('status', 'open accepted declined')