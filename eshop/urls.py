from django.urls import path
from eshop import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'actors', )

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('get/<int:pk>/', views.product_details, name='product_details'),
    # Modifier un avis
    path('review/<int:pk>/edit/', views.review_edit, name='review_edit'),
    # Supprimer un avis
    path('review/<int:pk>/delete/', views.review_delete, name='review_delete'),
    path("ajax_search", views.product_search, name="ajax_search"),
    path('api/', include(router.urls)),
]