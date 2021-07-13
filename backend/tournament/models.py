from django.db import models
from django.contrib.auth import get_user_model

from team.models import Team

User = get_user_model()


def user_directory_path(instance, filename):
    # image stored MEDIA_ROOT/user_id/filename
    return f'{instance.id}/{filename}'


class Tournament(models.Model):
    name = models.CharField(max_length=40, unique=True)
    description = models.TextField()
    location = models.CharField()
    format = models.CharField()
    private = models.BooleanField(default=False)
    team_type = models.TextChoices('team_type', 'Player Team')
    status = models.TextChoices('status', 'planned active finished')
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    sport = models.TextChoices('sport', 'football tennis pingpong')
    settings = models.TextField()
    organizer = models.ForeignKey(to=User, related_name='my_tournaments', on_delete=models.CASCADE, blank=True,
                                  null=True)
    participants = models.ManyToManyField(to=User, related_name='part_in_tournaments', blank=True)
    teams = models.ManyToManyField(to=Team, related_name='tournaments', blank=True)
