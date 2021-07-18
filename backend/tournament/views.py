from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from bracket.serializers import BracketSerializer
from match.serializers import MatchSerializer
from round.serializers import RoundSerializer
from tournament.models import Tournament
from tournament.serializers.serializers import CreateTournamentSerializer, ListTournamentSerializer

User = get_user_model()


def participants_shuffle(array):
    new_array = [array[0], *array[2:], array[1]]
    return new_array


class ListTournamentView(ListAPIView):
    # permission_classes = []
    queryset = Tournament.objects.all()
    serializer_class = ListTournamentSerializer


class CreateTournamentView(CreateAPIView):
    serializer_class = CreateTournamentSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(organizer=request.user)
        bracket_data = {"tournament": serializer.data["id"]}
        bracket_serializer = BracketSerializer(data=bracket_data)
        bracket_serializer.is_valid(raise_exception=True)
        bracket_serializer.save()
        participants = []
        for i in range(0, serializer.data["no_of_players"]):
            participants.append({"first_name": "Player", "last_name": i + 1})
        if serializer.data["format"] == "RR":
            if (serializer.data["no_of_players"] % 2) == 0:
                for i in range(0, serializer.data["no_of_players"] - 1):
                    round_data = {"bracket": bracket_serializer.data}
                    round_serializer = RoundSerializer(data=round_data)
                    round_serializer.is_valid(raise_exception=True)
                    round_serializer.save(bracket_id=bracket_serializer.data["id"])
                    for j in range(0, int(len(participants) / 2)):
                        match_data = {"round": round_serializer.data["id"],
                                      "mock_players": [participants[j], participants[len(participants) - 1 - j]]}
                        match_serializer = MatchSerializer(data=match_data)
                        match_serializer.is_valid(raise_exception=True)
                        match_serializer.save()
                    participants = participants_shuffle(participants)
            else:
                participants.append({"first_name": "BYE", "last_name": ""})
                for i in range(0, serializer.data["no_of_players"]):
                    round_data = {"bracket": bracket_serializer.data}
                    round_serializer = RoundSerializer(data=round_data)
                    round_serializer.is_valid(raise_exception=True)
                    round_serializer.save(bracket_id=bracket_serializer.data["id"])
                    for j in range(0, int(len(participants) / 2)):
                        match_data = {"round": round_serializer.data["id"],
                                      "mock_players": [participants[j], participants[len(participants) - 1 - j]]}
                        match_serializer = MatchSerializer(data=match_data)
                        match_serializer.is_valid(raise_exception=True)
                        match_serializer.save()
                    participants = participants_shuffle(participants)

        return Response(serializer.data)


class RetrieveUpdateDestroyTournamentView(RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ListTournamentSerializer
    lookup_field = 'pk'
