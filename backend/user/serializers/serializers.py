from rest_framework import serializers

from team.serializers.serializers import ListTeamSerializer
from tournament.serializers.serializers import ListTournamentSerializer
from user.models import User


class UserBracketSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "location", "avatar"]


class ListUserSerializer(serializers.ModelSerializer):
    captain_of_teams = ListTeamSerializer(many=True)
    teams = ListTeamSerializer(many=True)
    part_in_tournaments = ListTournamentSerializer(many=True)
    my_tournaments = ListTournamentSerializer(many=True)

    class Meta:
        model = User
        fields = ["id", "email", "username", "first_name", "last_name", "company", "location", "avatar", "banner",
                  "captain_of_teams", "teams", "my_tournaments", "part_in_tournaments"]
        read_only_fields = ["id"]
