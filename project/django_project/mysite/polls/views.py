from django.http import HttpResponse

def index(request):
    return HttpResponse("hello world, learning django")

def SignUp(request):
    name = request.data['name']
    email = request.data['email']
    User.objects.create(name,email)
    user.save()
    return HttpResponse("usr is signup successfully")