from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, CreateAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
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
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(organizer=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyTournamentView(RetrieveUpdateDestroyAPIView):
    queryset = Tournament.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = ListTournamentSerializer
    lookup_field = 'pk'


class JoinTournamentView(UpdateAPIView):
    queryset = Tournament.objects.all()
    serializer_class = ListTournamentSerializer
    # permission_classes =

    def post(self, request, *args, **kwargs):
        tournament = self.get_object()
        user = self.request.user

        if user not in tournament.participants.all():
            tournament.participants.add(user)
            return Response({'success': 'joined'}, status=status.HTTP_200_OK)
        else:
            tournament.participants.remoce(user)
            return Response({'success': 'quit'}, status=status.HTTP_200_OK)
