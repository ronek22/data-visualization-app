from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from charts.models import Chart
from charts.serializers import ChartSerializer, SimpleChartSerializer


class ChartListView(generics.ListAPIView):
    queryset = Chart.objects.all()
    serializer_class = SimpleChartSerializer


class ChartRetrieveView(generics.RetrieveAPIView):
    queryset = Chart.objects.all()
    serializer_class = ChartSerializer
    lookup_field = "name"
