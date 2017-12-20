from django.conf.urls import include,url

from .views import HomePageView, county_datasets,point_datasets

urlpatterns = [
	url(r'^$', HomePageView.as_view(), name = 'home'),
	url(r'^County_data/$', county_datasets, name = 'County'),
	url(r'^Incidence_data/$', point_datasets, name = 'Incidences'),


]
