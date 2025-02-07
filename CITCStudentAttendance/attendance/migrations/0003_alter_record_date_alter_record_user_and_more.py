# Generated by Django 5.1.6 on 2025-02-07 03:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0002_date_record_description_alter_record_timein_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='record',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='attendance.user'),
        ),
        migrations.AlterField(
            model_name='user',
            name='idNumber',
            field=models.CharField(max_length=30),
        ),
    ]
