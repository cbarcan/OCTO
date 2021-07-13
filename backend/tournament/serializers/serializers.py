from rest_framework import serializers
from tournament.models import Tournament


class ListTournamentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tournament
        fields = '__all__'


class CreateTournamentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tournament
        fields = '__all__'
        read_only_field = ['captain']
