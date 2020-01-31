from django.db import models
from user.models import CustomUser
# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=15)
    user_id = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    time = models.DateTimeField(auto_now=True)
    content = models.TextField()

    def __str__(self):
        return self.title
        

class Comment(models.Model):
    article_id = models.ForeignKey(Article, on_delete=models.CASCADE, related_name="comments")
    author = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    text = models.TextField()
    def __str__(self):
        return self.text
    