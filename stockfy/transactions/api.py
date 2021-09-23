from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer

#Transaction Viewset
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TransactionSerializer