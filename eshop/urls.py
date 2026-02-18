from django.urls import path
from eshop import views, views_react
from django.urls import path, include
from .serializers import ProductSerializer
from rest_framework.routers import DefaultRouter
from rest_framework import serializers
from .views_react import ProductViewSet


router = DefaultRouter()
router.register(r'Product', ProductViewSet)

urlpatterns = [
    path('', ProductViewSet.as_view({'get':'list'}), name='product_list'),
    path('get/<int:pk>/', views.product_details, name='product_details'),
    # Modifier un avis
    path('review/<int:pk>/edit/', views.review_edit, name='review_edit'),
    # Supprimer un avis
    path('review/<int:pk>/delete/', views.review_delete, name='review_delete'),
    path("ajax_search", views.product_search, name="ajax_search"),
    path('api/', include(router.urls)),
]