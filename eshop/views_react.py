# eshop/api_views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from rest_framework import serializers
from .serializers import ProductSerializer
from rest_framework import viewsets


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

