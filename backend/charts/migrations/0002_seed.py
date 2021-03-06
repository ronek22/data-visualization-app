# Generated by Django 3.1.6 on 2021-02-15 17:18
import csv
import os

from django.db import migrations, transaction

from conf import settings


def parse_float(x: str) -> float:
    try:
        result = float(x.replace(',', '.'))
    except ValueError:
        result = None
    return result


@transaction.atomic
def csv_loader(apps, filename, table_name):
    Chart = apps.get_model("charts", 'Chart')
    ChartEntry = apps.get_model("charts", "ChartEntry")

    with open(os.path.join(settings.MEDIA_ROOT, 'seed', filename)) as file:
        reader = csv.reader(file, delimiter=';')
        next(reader)

        chart = Chart(name=table_name)
        chart.save()
        entries = []

        for row in reader:
            label = row.pop(0)
            row = list(map(parse_float, row))
            entries.append(ChartEntry(
                x=label,
                y1=row[0],
                y2=row[1],
                y3=row[2],
                y4=row[3],
                y5=row[4]
            ))

        chart.entries.set(entries, bulk=False)


def load_data(apps, schema_editor):
    files = [('dane_A.csv', 'A'), ('dane_B.csv', 'B')]
    for filename, table_name in files:
        csv_loader(apps, filename, table_name)


def reverse_function(apps, schema_editor):
    Chart = apps.get_model("charts", 'Chart')

    Chart.objects.all().delete()


class Migration(migrations.Migration):
    dependencies = [
        ('charts', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(load_data, reverse_function)
    ]
