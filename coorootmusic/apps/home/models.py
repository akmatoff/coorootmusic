from django.db import models

# Create your models here.
class About(models.Model):
    about_title = models.CharField('About Name', max_length = 200)
    about_text = models.TextField('About Text')

    def __str__(self):
        return self.about_title

    def __str__(self):
        return self.about_text
    