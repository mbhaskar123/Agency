from django.shortcuts import render
from django.http import HttpResponseRedirect # redirect the page after submit
from django.contrib import messages # return messages
from django.core.mail import EmailMultiAlternatives # required to send emails
from django. template import loader # render templates on mail body
from App.models import Registered_email # information from models.py
# function to render home page
def home(request):
    return render(request,'home.html')
# function to render opportunities page
def opportunities(request):
    return render(request,'opportunities.html')
# function to render frontend form
def email_frontend(request):
    if request.method == "POST":
        # check if mail exists in database
        email=request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"we already have your resume in our database")
            return HttpResponseRedirect('/opportunities')
        else:
            name=request.POST.get('name')
            age=request.POST.get('age')
            email=request.POST.get('email')
            phone=request.POST.get('phone')
            address=request.POST.get('address')
            experience=request.POST.get('experience')
            skills=request.POST.get('skills')
            # Registered inside database
            contact=Registered_email()
            contact.email=email
            contact.save()

            template=loader.get_template('resume_form.txt')
            context = {
                'name':name,
                'age':age,
                'email':email,
                'phone':phone,
                'address':address,
                'experience':experience,
                'skills':skills,          
                }
            message=template.render(context)
            email=EmailMultiAlternatives(
                "Frontend - Candidate",message,
                "Frontend Opportunity",
                ['mbhaskar0210@gmail.com']
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
            message.success(request,'Frontend resume sent successfully !')
            return HttpResponseRedirect('/')
# function to render backend form
def email_backend(request):
    if request.method == "POST":
        # check if mail exists in database
        email=request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"we already have your resume in our database")
            return HttpResponseRedirect('/opportunities')
        else:
            name=request.POST.get('name')
            age=request.POST.get('age')
            email=request.POST.get('email')
            phone=request.POST.get('phone')
            address=request.POST.get('address')
            experience=request.POST.get('experience')
            skills=request.POST.get('skills')
            # Registered inside database
            contact=Registered_email()
            contact.email=email
            contact.save()

            template=loader.get_template('resume_form.txt')
            context = {
                'name':name,
                'age':age,
                'email':email,
                'phone':phone,
                'address':address,
                'experience':experience,
                'skills':skills,          
                }
            message=template.render(context)
            email=EmailMultiAlternatives(
                "Back - Candidate",message,
                "Back Opportunity",
                ['mbhaskar0210@gmail.com']
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
            message.success(request,'Backend resume sent successfully !')
            return HttpResponseRedirect('/')
# function to render fullstack form
def email_fullstack(request):
    if request.method == "POST":
        # check if mail exists in database
        email=request.POST['email']
        if Registered_email.objects.filter(email=email).exists():
            messages.error(request,"we already have your resume in our database")
            return HttpResponseRedirect('/opportunities')
        else:
            name=request.POST.get('name')
            age=request.POST.get('age')
            email=request.POST.get('email')
            phone=request.POST.get('phone')
            address=request.POST.get('address')
            experience=request.POST.get('experience')
            skills=request.POST.get('skills')
            # Registered inside database
            contact=Registered_email()
            contact.email=email
            contact.save()

            template=loader.get_template('resume_form.txt')
            context = {
                'name':name,
                'age':age,
                'email':email,
                'phone':phone,
                'address':address,
                'experience':experience,
                'skills':skills,          
                }
            message=template.render(context)
            email=EmailMultiAlternatives(
                "Fullstack - Candidate",message,
                "Fullstack Opportunity",
                ['mbhaskar0210@gmail.com']
            )
            email.content_subtype = 'html'
            file = request.FILES['file']
            email.attach(file.name,file.read(),file.content_type)
            email.send()
            message.success(request,'Fullstack resume sent successfully !')
            return HttpResponseRedirect('/')

