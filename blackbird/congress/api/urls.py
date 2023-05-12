from rest_framework.routers import DefaultRouter
from congress.api.congress.query.base import CongressViewSet

app_name = "congress"

router = DefaultRouter()
router.register(r'congress', CongressViewSet, basename='congress')

urlpatterns = router.urls
