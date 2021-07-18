from rest_framework import serializers

from bracket.models import Bracket
from round.serializers import RoundSerializer


class BracketSerializer(serializers.ModelSerializer):

    rounds = RoundSerializer(many=True, read_only=True)

    class Meta:
        model = Bracket
        fields = ["id", "tournament", "rounds"]
        read_only_fields = ["rounds"]
