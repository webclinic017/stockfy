from django.db import models

class Transaction(models.Model):
    stock_quote = models.CharField(max_length=15)
    price = models.DecimalField(max_digits=30, decimal_places=15)
    qty = models.DecimalField(max_digits=30, decimal_places=15)
    operation = models.CharField(max_length=4)
    currency = models.CharField(max_length=10)
    date_transaction = models.DateTimeField()
    date_creation = models.DateTimeField(auto_now_add=True)


