from django.contrib.auth import get_user_model
from django.db import models

from team.models import Team
from tournament.models import Tournament

User = get_user_model()


class Standing(models.Model):
    user = models.OneToOneField(to=User, related_name='standing', on_delete=models.SET_NULL, null=True)
    team = models.OneToOneField(to=Team, related_name='standing', on_delete=models.SET_NULL, null=True)
    tournament = models.ForeignKey(to=Tournament, related_name='standings', on_delete=models.CASCADE)
    matches_played = models.PositiveIntegerField(default=0, blank=True)
    wins = models.PositiveIntegerField(default=0, blank=True)
    draws = models.PositiveIntegerField(default=0, blank=True)
    loses = models.PositiveIntegerField(default=0, blank=True)
    score_for = models.PositiveIntegerField(default=0, blank=True)
    score_against = models.PositiveIntegerField(default=0, blank=True)
    score_diff = models.PositiveIntegerField(default=0, blank=True)
    points = models.PositiveIntegerField(default=0, blank=True)
