from standing.models import Standing
from standing.serializers import StandingSerializer


# flake8: noqa: C901
def create_standing(serializer):
    participants = []
    for i in range(0, serializer.data["no_of_players"]):
        participants.append({"first_name": "Player", "last_name": i + 1})
    if serializer.data["format"] == "RR":
        for i in range(0, len(participants)):
            standing_data = {"tournament": serializer.data["id"], "mock_user": participants[i]}
            standing_serializer = StandingSerializer(data=standing_data)
            standing_serializer.is_valid(raise_exception=True)
            standing_serializer.save()


# flake8: noqa: C901
def recreate_standing(tournament, request, kwargs):
    participants = tournament.participants.all()
    if request.data["status"] == "OG":
        if tournament.format == "RR":
            standing = Standing.objects.filter(tournament=kwargs["pk"])
            standing.delete()
            for i in range(0, len(participants)):
                standing_data = {"tournament": tournament.id}
                standing_serializer = StandingSerializer(data=standing_data)
                standing_serializer.is_valid(raise_exception=True)
                standing_serializer.save(user=participants[i])
