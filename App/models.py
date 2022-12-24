from django.db import models

# PREVENT DUPLCIATE EMAIL ADDRESS.
class Registered_email(models.Model):
    email=models.CharField(max_length=40)

    def __str__(self):
        return self.email