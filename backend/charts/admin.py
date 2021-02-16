from django.contrib import admin

from charts.models import Chart, ChartEntry


class ChartEntryInline(admin.TabularInline):
    model = ChartEntry


@admin.register(Chart)
class ChartAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [ChartEntryInline]


