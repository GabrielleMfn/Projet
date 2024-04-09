from django.http import HttpResponse
from django.shortcuts import render
from train.models import Trains

# Create your views here.

# from train.models import Trains

def accueil (request) : 
    
    return render(request, "train/accueil.html")


def detail (request, trainsID):
    ListeTrains = Trains.objects.get(trainID = trainsID)
    premierTrain = ListeTrains
    return render (request, "train/detail.html", {
        "title" : premierTrain.title,
        "horaire" : premierTrain.horaire,
        "Depart" : premierTrain.Depart,
        "Arrive" : premierTrain.Arrive,
        "Temps" : premierTrain.Temps,
        "nextID" : int(trainsID) + 1,
    })

def liste (request) :
    TouslesTrains = Trains.objects.all()
    # Pour récuperer tous les infos de la base de donnée
    return render(request, "train/liste.html", {
        "ListeTrains" : TouslesTrains,
    })