# Apps para soportar el proceso de importación de datos historicos 
# Desarrollado por Helder Castrillón
# HISP Colombia 2016.

#descripión general.
La aplicaicón permite hacer POST,PUT,DELETE,PATCH a los siguentes recursos de la API
 - trackedentityinstance 
 - events
 - enrollments
 

 # Funcionalidades
 
 1. permite tener en pantalla los errores presentados en la importación.
 2. Permite exportar los objetos no importados al igual que la lista de errores encontrados, estos los entrega en formato json.
 3. valida si el archivo es un archivo json Valido.
 4. informa el número de registros a importar, los importados y los que presentan errores.
 5. perite iniciar la importación en la posición que se deses.
 **New
 6. Compatible con la versión 2.22, incluye la variable Strategy en las opiones de importación.
 7. Permite importar en bloque los objetos, el tamaño lo configura el usuario en la opcion (Length, Número de objeto)
 
 # recomendaciones especiales.
 
 1. si va a hacer update de enrollent ( cambiar estado de enrollment) el objeto solo debe tener el status y el uid del enrollent.
