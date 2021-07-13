from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from tournament.models import Tournament
from tournament.serializers.serializers import CreateTournamentSerializer, ListTournamentSerializer

User = get_user_model()


class ListCreateTournamentView(ListCreateAPIView):
    # permission_classes = []
    queryset = Tournament.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateTournamentSerializer
        return ListTournamentSerializer

    def perform_create(self, serializer):
        serializer.save(organizer=self.request.user)


class RetrieveUpdateDestroyTournamentView(RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    # permission_classes = []
    serializer_class = ListTournamentSerializer
    lookup_field = 'pk'
