from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from match.serializers import MatchSerializer
from standing.models import Standing


class ListStandingView(ListAPIView):
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Standing.objects.filter(tournament=self.kwargs['pk'])
