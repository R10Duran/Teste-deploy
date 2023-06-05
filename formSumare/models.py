# criar a estrutura do banco de dados
from formSumare import database, login_manager
from datetime import datetime
from flask_login import UserMixin


@login_manager.user_loader
def load_usuario(id_usuario):
    return Usuario.query.get(int(id_usuario))


class Usuario(database.Model, UserMixin):
    __table_args__ = {'extend_existing': True}
    id = database.Column(database.Integer, primary_key=True)
    username = database.Column(database.String, nullable=False)
    email = database.Column(database.String, nullable=False, unique=True)
    senha = database.Column(database.String, nullable=False)
    fotos = database.relationship("Foto", backref="usuario", lazy=True)


class Foto(database.Model):
    __table_args__ = {'extend_existing': True}
    id = database.Column(database.Integer, primary_key=True)
    imagem = database.Column(database.String, default="default.png")
    data_criacao = database.Column(database.DateTime, nullable=False, default=datetime.utcnow())
    id_usuario = database.Column(database.Integer, database.ForeignKey('usuario.id'), nullable=False)


class Alunos_egressos(database.Model):
    __table_args__ = {'extend_existing': True}
    id = database.Column(database.Integer, primary_key=True)
    nome = database.Column(database.String, nullable=False)
    cpf = database.Column(database.String, nullable=False)
    ra = database.Column(database.Integer, default='Não Informado')
    celular = database.Column(database.String, nullable=False)
    email = database.Column(database.String, nullable=False)
    curso = database.Column(database.String, nullable=False)
    ano_conclusao = database.Column(database.Integer, nullable=False)
    trabalha_na_area = database.Column(database.String, nullable=False)
    curso_facilitou = database.Column(database.String, nullable=False)
    estimulo_profissional = database.Column(database.String, nullable=False)
    promoveu_conhecimento = database.Column(database.String, nullable=False)
    pos_graduacao = database.Column(database.String, nullable=False)
    pos_graduacao_resposta = database.Column(database.String, default='Não Informado')
    interesse_pos_graduacao = database.Column(database.String, nullable=False)
    segunda_graduacao = database.Column(database.String, nullable=False)
    segunda_graduacao_resposta = database.Column(database.String, default='Não Informado')
    importancia = database.Column(database.String, nullable=False)
    recomenda = database.Column(database.String, nullable=False)
    receber_informacoes = database.Column(database.String, nullable=False)
    data_envio = database.Column(database.DateTime, nullable=False, default=datetime.utcnow)