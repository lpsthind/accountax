# from rest_framework import viewsets
# from backendApp.models import ITClient
# from backendApp.api.serializers import ITClientSerializer



# class ITClientViewSet(viewsets.ModelViewSet):
#     """
#     A viewset for viewing and editing user instances.
#     """
#     serializer_class = ITClientSerializer
#     queryset = ITClient.objects.all()


##########################################################################
# Generic Views
##########################################################################
from django.db.models import Q
from backendApp.models import ITClient
from django.http import JsonResponse
from backendApp.api.serializers import ITClientSerializer , ITClientSerializerFilter
from rest_framework.generics import (
                                    ListAPIView,
                                    RetrieveAPIView,
                                    CreateAPIView,
                                    UpdateAPIView,
                                    DestroyAPIView,
                                    GenericAPIView
                                    )

# Create your views here.
class ITClientListView(ListAPIView):
    queryset = ITClient.objects.all().order_by("fname")[:200]
    serializer_class = ITClientSerializer

class ITClientListViewFilter(ListAPIView):
    serializer_class = ITClientSerializerFilter

    def get_queryset(self):
        if self.request.method == 'GET':
            queryset = ITClient.objects.all()
            param = self.request.GET.get('q', None)
            n = self.request.GET.get('n', 10)
            t = self.request.GET.get('t', 'p')
            if param is not None and t == "p":
                queryset = queryset.filter(pan__startswith=param.upper()).order_by("pan")[:int(n)]
            elif param is not None and t == "n":
                queryset = queryset.filter(match__startswith=param).order_by("fname")[:int(n)]
            elif param is not None and t == "a":
                queryset = queryset.filter(fullname__icontains=param)[:int(n)]
            return queryset


class ITClientDetailView(RetrieveAPIView,GenericAPIView):
    model = ITClient
    serializer_class = ITClientSerializer
    # mo = self.kawargs
    def get_queryset(self):
        queryset = ITClient.objects.all()
        new_client = self.kwargs[self.lookup_url_kwarg or self.lookup_field]
        prev_client = self.request.GET.get('p', None)
        activeUser = self.request.GET.get('u', None)
        # print(f"New:{new_client} || Prev:{prev_client} || User: {activeUser}")
        if not prev_client == None:
            ITClient.objects.filter(id=prev_client).update(activeUser=None)
        if not new_client == None:
            ITClient.objects.filter(id=new_client).update(activeUser=activeUser)
        return queryset


class ITClientCreateView(CreateAPIView):
    queryset = ITClient.objects.all()
    serializer_class = ITClientSerializer

class ITClientUpdateView(UpdateAPIView):
    queryset = ITClient.objects.all()
    serializer_class = ITClientSerializer

class ITClientDeleteView(DestroyAPIView):
    queryset = ITClient.objects.all()
    serializer_class = ITClientSerializer

def UpdateUser(request):
    if request.method == "GET":
        activeUser = request.GET.get('u', None)
        if not activeUser == None:
            ITClient.objects.filter(activeUser=activeUser).update(activeUser=None)
            return JsonResponse({'status':'success'})
