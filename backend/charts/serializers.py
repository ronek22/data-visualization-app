from rest_framework import serializers

from charts.models import Chart, ChartEntry


class ChartEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = ChartEntry
        exclude = ('id', 'chart')


class ChartSerializer(serializers.ModelSerializer):
    entries = ChartEntrySerializer(many=True)

    class Meta:
        model = Chart
        fields = ('entries',)


class SimpleChartSerializer(serializers.HyperlinkedModelSerializer):
    details = serializers.HyperlinkedIdentityField(
        view_name='chart-detail',
        lookup_field='name'
    )

    class Meta:
        model = Chart
        fields = ('name', 'details',)
