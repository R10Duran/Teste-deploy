from formSumare import database, app
from formSumare.models import Usuario, Foto, Alunos_egressos

with app.app_context():
    database.create_all()