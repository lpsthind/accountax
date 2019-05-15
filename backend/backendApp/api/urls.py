# from backendApp.api import views
# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', views.ITClientViewSet, basename='itclient')
# urlpatterns = router.urls


############################################################################
######################## URLS FOR GENERIC VIEWS ############################
############################################################################
from django.urls import path, include
from backendApp.api.views import (
    ITClientListView,
    ITClientListViewFilter,
    ITClientDetailView,
    ITClientCreateView,
    ITClientUpdateView,
    ITClientDeleteView,
    UpdateUser,
)

urlpatterns = [
    path('',ITClientListView.as_view(),name="listview"),
    path('query/',ITClientListViewFilter.as_view(),name="listviewfilter"),
    path('uupdate/',UpdateUser,name="updateUser"),
    path('<pk>/',ITClientDetailView.as_view(),name="detailsview"),
    path('create/',ITClientCreateView.as_view(),name="createview"),
    path('<pk>/update/',ITClientUpdateView.as_view(),name="updateview"),
    path('<pk>/delete/',ITClientDeleteView.as_view(),name="deleteview"),
]
