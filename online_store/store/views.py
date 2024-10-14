from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Category, Product, Order
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        products_data = request.data.get('products')
        products = Product.objects.filter(id__in=products_data)
        total_amount = sum(product.price for product in products)

        for product in products:
            if product.stock <= 0:
                return Response(
                    {"detail": f"Product '{product.name}' is out of stock"},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        order = Order.objects.create(
            user=request.user,
            total_amount=total_amount,
        )
        order.products.set(products)
        order.save()

        for product in products:
            product.stock -= 1  # Decrease stock by 1 for each product ordered
            product.save()

        serializer = self.get_serializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
