from django.urls import path

from tournament.views import ListCreateTournamentView, RetrieveUpdateDestroyTournamentView

urlpatterns = [
    # list all tournaments
    path('list/', ListCreateTournamentView.as_view()),

    # Retrieve Update Destroy one tournament
    path('<int:pk>/', RetrieveUpdateDestroyTournamentView.as_view()),
]
