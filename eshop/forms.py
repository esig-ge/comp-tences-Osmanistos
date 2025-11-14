from django import forms

from .models import Review

class PostReview(forms.ModelForm):
    class Meta:
        model = Review
        fields = ('user_mail', 'review')