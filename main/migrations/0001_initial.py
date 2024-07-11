# Generated by Django 5.0.6 on 2024-07-11 14:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceType',
            fields=[
                ('id', models.BigIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='ServiceElement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('serviceType', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.servicetype')),
            ],
        ),
        migrations.AddConstraint(
            model_name='serviceelement',
            constraint=models.UniqueConstraint(fields=('serviceType', 'name'), name='unique_services_by_type'),
        ),
    ]
