# Generated by Django 5.1.1 on 2024-11-27 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appMain', '0007_category_remove_products_productcategories_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='productCategories',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.AddField(
            model_name='products',
            name='productCategories',
            field=models.JSONField(blank=True, default=list, null=True),
        ),
    ]
