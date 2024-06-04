print ("trying classic hi world")
"""for()"""
#for(){}
print('--- ---')
#print(9 + '2')""" data tpe operation """
print('for(i = 0; i < 2; i++){return}')
print('program finished')
print( 9 + 9)
print('9' + '9')
print(9, '9')#operador concatenador
print(9 + int('9'))
print(str(9) + '9')

#MULTIPLE LINES COMMENT
""" 

str() convierte a string
int() convierte a integer
bool() convierte a booleano
float() convierte a flotante

list() convierte a arreglo

"""
#ONE LINE COMMENT

print("oigresrol20@gmail.com\n\tasd")#srt
    ##f-string
    
nombre = "Mario"
edad = 24
print(f"hola comision, mi nombre es {nombre} y tengo {edad} años")

mensaje = f"Hi comision, My name is {nombre} Im {edad} años"
print(mensaje)

#DECLARAR - INICIALIZAR - REASIGNAR
#CONSTATNTE --> Variable con identificador en mayuscula
PI = 3.14

#PI = 90 esto no deberia pasar 

# = es el operador de asignacion
print(PI)
correo = "oigresrol20@gmail.com"#declarar e inicializar una variable

correo = True #reasignando
print(correo)
print(type(correo))
#----
#edad = int(input("Ingrese edad: "))

print(f"El año que viene voy a cumpli {edad +1} años")

print(11-2) #operacion modulo 1

"""
operadores realcionales (contenido) resultado un bool --> True False
> mayor que
< menor que
etc...
"""
print(78 > 2)#true
print("Hi" > "hi")#false

#Logicos: and, or, not

print(9 - 2 > 10 or True)#true

print(not False)#true

"""
age = 15
if age >= 18:
    #se ejecuta este bloque si da verdadero sino no ejecuta nada y continua abajo
    print("Allowed")
print("finde la clase")
"""
age = 15
if age >= 18:
    #se ejecuta este bloque si da verdadero sino no ejecuta nada y continua abajo
    print("Allowed")
else:
    print("not allowed")