from django.db import models

# Create your models here.

class Trains(models.Model) :
    trainID = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 100)
    horaire = models.CharField(max_length = 2000)
    Depart = models.CharField(max_length = 1000)
    Arrive = models.CharField(max_length = 1000)
    Temps = models.IntegerField()


# Les commande à écrire des la base de donnée sont :
# python manage.py shell | Pour y entrer
# from train.models import Trains 
# Trains.objects.all() | Pour regarder se qui est enregister
# onzeT = Trains(remplir les info par rapport à la classe ci-dessus)
# onzeT.save() | Pour sauvegarder les infos dans la base de donnée
# exit() | Pour sortir