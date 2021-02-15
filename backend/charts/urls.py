from django.urls import path

from charts.views import ChartRetrieveView, ChartListView

urlpatterns = [
    path('', ChartListView.as_view(), name='chart-list'),
    path('<str:name>', ChartRetrieveView.as_view(), name='chart-detail')
]