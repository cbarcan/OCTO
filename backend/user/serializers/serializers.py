from rest_framework import serializers

from team.serializers.serializers import ListTeamSerializer
from tournament.serializers.serializers import ListTournamentSerializer
from user.models import User


class UserBracketSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "location", "avatar"]


class ListUserSerializer(serializers.ModelSerializer):
    teams = ListTeamSerializer(many=True)
    part_in_tournaments = ListTournamentSerializer(many=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "first_name", "last_name", "company", "location", "avatar", "teams", "part_in_tournaments"]
        read_only_fields = ["id"]
