from django.core.mail import send_mail
from rest_framework.generics import CreateAPIView

from invitation.models import Invitation
from project.settings import DEFAULT_FROM_EMAIL
from tournament.models import Tournament


class CreateInvitationView(CreateAPIView):

    queryset = Invitation.objects.all
    # serializer_class =
    lookup_url_kwarg = 'tournament_id'
    lookup_url_kwarg = 'id'
    # permission_classes =

    def perform_create(self, serializer):

        tour = Tournament.objects.get(id=self.kwargs['tournament_id'])
        serializer.save(
            email=self.request.data['email'],
            tournament=tour,
        )
        send_mail(
            'You have been invited to a tournament on Octo!',
            f'{tour.organizer} has invited you to join. Click on this link to participate in your upcoming challenge'
            f'https://octo.propulsion-learn.ch/join/',
            DEFAULT_FROM_EMAIL,
            [self.request.data['email']],
            fail_silently=False,
        )

