from django.test import TestCase

# Create your tests here.
# store/tests.py
import pytest
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from .models import Category, Product, Order

@pytest.mark.django_db
def test_create_category():
    client = APIClient()
    response = client.post('/api/categories/', {'name': 'Electronics', 'description': 'Electronic items'})
    assert response.status_code == 201
    assert response.data['name'] == 'Electronics'

@pytest.mark.django_db
def test_create_product():
    category = Category.objects.create(name='Books', description='Various books')
    client = APIClient()
    response = client.post('/api/products/', {
        'name': 'Book 1', 
        'description': 'A science book', 
        'price': 9.99, 
        'category': category.id, 
        'stock': 10
    })
    assert response.status_code == 201
    assert response.data['name'] == 'Book 1'

@pytest.mark.django_db
def test_create_order_with_insufficient_stock():
    user = User.objects.create_user(username='testuser', password='testpass')
    category = Category.objects.create(name='Books', description='Various books')
    product = Product.objects.create(name='Book 1', description='A science book', price=9.99, category=category, stock=0)

    client = APIClient()
    client.force_authenticate(user=user)
    response = client.post('/api/orders/', {'products': [product.id]})
    assert response.status_code == 400
    assert "out of stock" in response.data['detail']
