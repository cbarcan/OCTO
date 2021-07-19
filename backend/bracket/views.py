from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from bracket.models import Bracket
from bracket.serializers import BracketSerializer


class ListBracketView(ListAPIView):
    serializer_class = BracketSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        tournament_id = self.kwargs["id"]
        return Bracket.objects.filter(tournament=tournament_id)
