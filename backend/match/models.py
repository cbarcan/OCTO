from django.contrib.auth import get_user_model
from django.db import models

from round.models import Round
from team.models import Team

User = get_user_model()


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


class Match(models.Model):
    result = models.CharField(max_length=100)
    comment = models.CharField(max_length=100)
    image = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    players = models.ManyToManyField(to=User, related_name='matches')
    teams = models.ManyToManyField(to=Team, related_name='matches')
    round = models.ForeignKey(to=Round, related_name='matches', on_delete=models.CASCADE)
