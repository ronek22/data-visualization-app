from django.db import models


class Chart(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return self.name


class ChartEntry(models.Model):
    x = models.CharField(max_length=30)
    y1 = models.FloatField(null=True)
    y2 = models.FloatField(null=True)
    y3 = models.FloatField(null=True)
    y4 = models.FloatField(null=True)
    y5 = models.FloatField(null=True)

    chart = models.ForeignKey(Chart, on_delete=models.CASCADE, related_name="entries")

    class Meta:
        verbose_name_plural = "chart entries"

    def __str__(self):
        return self.x
