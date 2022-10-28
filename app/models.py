from django.db import models
from django.core.validators import MaxValueValidator

class ai_analysis_log(models.Model):
    id = models.BigAutoField( 
            validators=[MaxValueValidator(99999999999)],
            primary_key=True 
        )
    image_path = models.CharField(
            max_length=255,
            null=True,
            blank=True
        )
    success = models.CharField(
            max_length=255, 
            null=True, 
            blank=True
        )
    message = models.CharField(
            max_length=255, 
            null=True, 
            blank=True
        )
    # classは変数に使用できないためclass_numとしています
    class_num = models.BigIntegerField(
            validators=[MaxValueValidator(99999999999)],
            null=True, 
            blank=True
        )
    confidence = models.DecimalField(
            max_digits=5, 
            decimal_places=4, 
            null=True, 
            blank=True
        )
    request_timestamp = models.IntegerField(
            null=True, 
            blank=True
        )
    response_timestamp = models.IntegerField(
            null=True, 
            blank=True
        )
    
    def __str__(self):
        return self.image_path
    
    

    
    
