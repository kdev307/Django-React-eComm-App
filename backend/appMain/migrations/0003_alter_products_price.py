# Generated by Django 5.1.1 on 2024-11-01 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appMain', '0002_alter_products_productcategory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]
