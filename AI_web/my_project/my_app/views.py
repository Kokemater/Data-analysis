from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime

def index(request):
    return render(request, 'my_app/index.html')

def ejecutar_codigo(request):
    # Generar los números del 1 al 1000
    numeros = list(range(1, 1001))
    
    # Convertir la lista de números a un string separado por comas o saltos de línea
    numeros_str = ", ".join(map(str, numeros))
    
    # Enviar los números como respuesta
    return HttpResponse(numeros_str)

def comprobar_numero(request):
    if request.method == 'POST':
        numero = int(request.POST.get('numero', 0))
        if numero > 11:
            resultado = "El número es mayor que 11."
        else:
            resultado = "El número no es mayor que 11."
        return render(request, 'my_app/index.html', {'resultado': resultado})
    else:
        return render(request, 'my_app/index.html')

def obtener_hora(request):
    if request.method == 'POST':
        now = datetime.now().strftime('%H:%M:%S')
        return render(request, 'my_app/index.html', {'hora': now})
    return render(request, 'my_app/index.html')