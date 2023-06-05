# criar as rotas do nosso site (os links)
from flask import render_template, url_for, redirect
from formSumare import app, database, bcrypt
from formSumare.models import Usuario, Foto, Alunos_egressos
from flask_login import login_required, login_user, logout_user, current_user
from formSumare.forms import FormLogin, FormCriarConta, FormFoto, EgressosForm
from werkzeug.utils import secure_filename
import os

@app.route("/", methods=["GET", "POST"])
def homepage():
    form_login = FormLogin()
    if form_login.validate_on_submit():
        usuario = Usuario.query.filter_by(email=form_login.email.data).first()
        if usuario and bcrypt.check_password_hash(usuario.senha, form_login.senha.data):
            login_user(usuario)
            return redirect(url_for("perfil", id_usuario=usuario.id))
    return render_template("homepage.html", form=form_login)


@app.route("/criarconta", methods=["GET", "POST"])
def criar_conta():
    form_criarconta = FormCriarConta()
    if form_criarconta.validate_on_submit():
        senha = bcrypt.generate_password_hash(form_criarconta.senha.data)
        usuario = Usuario(username=form_criarconta.username.data,
                          senha=senha, email=form_criarconta.email.data)
        database.session.add(usuario)
        database.session.commit()
        login_user(usuario, remember=True)
        return redirect(url_for("perfil", id_usuario=usuario.id))
    return render_template("criarconta.html", form=form_criarconta)


@app.route("/perfil/<id_usuario>", methods=["GET", "POST"])
@login_required
def perfil(id_usuario):
    egressos = Alunos_egressos.query.all()
    if int(id_usuario) == int(current_user.id):
        # o usuario ta vendo o perfil dele
        form_foto = FormFoto()
        if form_foto.validate_on_submit():
            arquivo = form_foto.foto.data
            nome_seguro = secure_filename(arquivo.filename)
            # salvar o arquivo dentro da pasta certa
            caminho = os.path.join(os.path.abspath(os.path.dirname(__file__)),
                                   app.config["UPLOAD_FOLDER"],
                                   nome_seguro)
            arquivo.save(caminho)
            # criar a foto no banco com o item "imagem" sendo o nome do arqivo
            foto = Foto(imagem=nome_seguro, id_usuario=current_user.id)
            database.session.add(foto)
            database.session.commit()
        return render_template("perfil.html", usuario=current_user, egressos=egressos, form=form_foto)
    else:
        usuario = Usuario.query.get(int(id_usuario))
        return render_template("perfil.html", usuario=usuario, form=None)


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("homepage"))


@app.route("/feed")
@login_required
def feed():
    fotos = Foto.query.order_by(Foto.data_criacao.desc()).all()
    return render_template("feed.html", fotos=fotos)

@app.route("/egressos", methods=['GET', 'POST'])
def egressos():
    form = EgressosForm()
    if form.validate_on_submit():
        # Se o formulário for válido, salva os dados na tabela de Egressos
        egressos = Alunos_egressos(nome=form.nome.data, cpf=form.cpf.data, ra=form.ra.data, celular=form.celular.data,
                           email=form.email.data, curso=form.curso.data, ano_conclusao=form.ano_conclusao.data,
                           trabalha_na_area=form.trabalha_na_area.data, curso_facilitou=form.curso_facilitou.data,
                           estimulo_profissional=form.estimulo_profissional.data, promoveu_conhecimento=form.promoveu_conhecimento.data,
                           pos_graduacao=form.pos_graduacao.data, pos_graduacao_resposta=form.pos_graduacao_resposta.data,
                           interesse_pos_graduacao=form.interesse_pos_graduacao.data,
                           segunda_graduacao=form.segunda_graduacao.data, segunda_graduacao_resposta=form.segunda_graduacao_resposta.data, importancia=form.importancia.data,
                           recomenda=form.recomenda.data, receber_informacoes=form.receber_informacoes.data)
        database.session.add(egressos)
        database.session.commit()
        return render_template('sucesso-envio-formulario.html', form=form)
    return render_template('egressos.html', form=form)
