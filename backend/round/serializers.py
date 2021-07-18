from rest_framework import serializers

from match.serializers import MatchSerializer
from round.models import Round


class RoundSerializer(serializers.ModelSerializer):

    matches = MatchSerializer(many=True, read_only=True)

    class Meta:
        model = Round
        fields = ["id", "matches"]
