from rest_framework.routers import DefaultRouter
from bills.api.bills.query.base import BillViewSet

app_name = "bills"

router = DefaultRouter()
router.register(r'bills', BillViewSet, basename='bill')

urlpatterns = router.urls
