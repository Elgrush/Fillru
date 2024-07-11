import io


from django.db import models, connection
from django.core.management import call_command


# Services table models.

def reset_id():
    # Get SQL commands from sqlsequencereset
    output = io.StringIO()
    call_command('sqlsequencereset', "main", stdout=output, no_color=True)
    sql = output.getvalue()

    with connection.cursor() as cursor:
        cursor.execute(sql)

    output.close()


class ServiceType(models.Model):
    id = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=256)


class ServiceElement(models.Model):
    serviceType = models.ForeignKey(ServiceType, on_delete=models.CASCADE)
    name = models.CharField(max_length=256)
    price = models.IntegerField()

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['serviceType', 'name'], name='unique_services_by_type')
        ]
