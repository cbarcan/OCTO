from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView
from rest_framework.response import Response

from tournament.models import Tournament
from tournament.serializers.serializers import CreateTournamentSerializer, ListTournamentSerializer

User = get_user_model()


class ListTournamentView(ListAPIView):
    # permission_classes = []
    queryset = Tournament.objects.all()
    serializer_class = ListTournamentSerializer


class CreateTournamentView(CreateAPIView):
    serializer_class = CreateTournamentSerializer
    # permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(organizer=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyTournamentView(RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    # permission_classes = []
    serializer_class = ListTournamentSerializer
    lookup_field = 'pk'
