from django.urls import path

from tournament.views import ListTournamentView, CreateTournamentView, RetrieveUpdateDestroyTournamentView

urlpatterns = [
    # list all tournaments
    path('list/', ListTournamentView.as_view()),

    # create tournament
    path('new/', CreateTournamentView),

    # Retrieve Update Destroy one tournament
    path('<int:pk>/', RetrieveUpdateDestroyTournamentView.as_view()),
]
