from rest_framework.routers import DefaultRouter
from politicians.api.presidents.query.base import PresidentViewSet
from politicians.api.senators.query.base import SenatorViewSet
from politicians.api.representatives.query.base import RepresentativeViewSet

app_name = "politicians"

router = DefaultRouter()
router.register(r'presidents', PresidentViewSet, basename='president')
router.register(r'senators', SenatorViewSet, basename='senator')
router.register(r'representatives', RepresentativeViewSet, basename='representative')

urlpatterns = router.urls
