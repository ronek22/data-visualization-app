from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
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

    @method_decorator(cache_page(60*60))
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
