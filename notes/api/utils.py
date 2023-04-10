from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer

def getAllNotes(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

def getNoteDetail(request, pk):
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def createNote(request):
    body = request.data.get('body')
    note = Note.objects.create(body=body)
    serializer = NoteSerializer(note, many=False)

    return Response(serializer.data)

def updateNote(request, pk):
    note = Note.objects.get(id=pk)
    data = request.data
    note.body = data.get('body')
    note.save()
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

def deleteNode(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted')
