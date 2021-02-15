# Generated by Django 3.1.6 on 2021-02-15 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='ChartEntry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('x', models.CharField(max_length=30)),
                ('y1', models.FloatField(null=True)),
                ('y2', models.FloatField(null=True)),
                ('y3', models.FloatField(null=True)),
                ('y4', models.FloatField(null=True)),
                ('y5', models.FloatField(null=True)),
                ('chart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entries', to='charts.chart')),
            ],
        ),
    ]