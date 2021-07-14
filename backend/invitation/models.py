from django.db import models


class Invitation(models.Model):
    email = models.EmailField()
    status = models.TextChoices('status', 'open accepted declined')
