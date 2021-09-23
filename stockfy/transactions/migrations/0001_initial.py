# Generated by Django 3.2.7 on 2021-09-23 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock_quote', models.CharField(max_length=15)),
                ('price', models.DecimalField(decimal_places=15, max_digits=30)),
                ('qty', models.DecimalField(decimal_places=15, max_digits=30)),
                ('operation', models.CharField(max_length=4)),
                ('currency', models.CharField(max_length=10)),
                ('date_transaction', models.DateTimeField()),
                ('date_creation', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]