# criar os formularios do nosso site
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, FileField, SelectField, IntegerField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError, Optional
from formSumare.models import Usuario


class FormLogin(FlaskForm):
    email = StringField("E-mail", validators=[DataRequired(), Email()])
    senha = PasswordField("Senha", validators=[DataRequired()])
    botao_confirmacao = SubmitField("Fazer Login")


class FormCriarConta(FlaskForm):
    email = StringField("E-mail", validators=[DataRequired(), Email()])
    username = StringField("Nome de usuário", validators=[DataRequired()])
    senha = PasswordField("Senha", validators=[DataRequired(), Length(6, 20)])
    confirmacao_senha = PasswordField("Confirmação de Senha", validators=[DataRequired(), EqualTo("senha")])
    botao_confirmacao = SubmitField("Criar Conta")

    def validate_email(self, email):
        usuario = Usuario.query.filter_by(email=email.data).first()
        if usuario:
            return ValidationError("E-mail já cadastrado, faça login para continuar")


class FormFoto(FlaskForm):
    foto = FileField("Foto", validators=[DataRequired()])
    botao_confirmacao = SubmitField("Enviar")


class EgressosForm(FlaskForm):
    nome = StringField('Nome *', validators=[DataRequired()])
    cpf = StringField('CPF *', validators=[DataRequired()])
    ra = StringField('RA', validators=[Optional()])
    celular = StringField('Celular *', validators=[DataRequired()])
    email = StringField('E-mail *', validators=[DataRequired(), Email()])
    curso = SelectField('Curso concluído no Centro Universitário Sumaré *', choices=[('','Selecione o curso'),
          ('ADMINISTRAÇÃO', 'Administração'),
          ('ANÁLISE E DESENVOLVIMENTO DE SISTEMAS', 'Análise e Desenvolvimento de Sistemas'),
          ('ARQUITETURA E URBANISMO', 'Arquitetura e Urbanismo'),
          ('BANCO DE DADOS', 'Banco de Dados'),
          ('BIOMEDICINA', 'Biomedicina'),
          ('CIÊNCIAS CONTÁBEIS', 'Ciências Contábeis'),
          ('CIÊNCIAS DA COMPUTAÇÃO', 'Ciências da Computação'),
          ('CIÊNCIAS ECONÔMICAS', 'Ciências Econômicas'),
          ('COMUNICAÇÃO INSTITUCIONAL','Comunicação Institucional'),
          ('DESIGN DE MODA', 'Design de Moda'),
          ('DIREITO', 'Direito'),
          ('EDUCAÇÃO FÍSICA', 'Educação Física'),
          ('ENGENHARIA CIVIL', 'Engenharia Civil'),
          ('ENGENHARIA DE PRODUÇÃO', 'Engenharia de Produção'),
          ('ENGENHARIA ELÉTRICA', 'Engenharia Elétrica'),
          ('ENGENHARIA MECÂNICA', 'Engenharia Mecânica'),
          ('ESTÉTICA E COSMÉTICA', 'Estética e Cosmética'),
          ('EVENTOS', 'Eventos'),
          ('FARMÁCIA', 'Farmácia'),
          ('FISIOTERAPIA', 'Fisioterapia'),
          ('GASTRONOMIA', 'Gastronomia'),
          ('GEOGRAFIA', 'Geografia'),
          ('GESTÃO AMBIENTAL', 'Gestão Ambiental'),
          ('GESTÃO COMERCIAL', 'Gestão Comercial'),
          ('GESTÃO DA TECNOLOGIA DA INFORMAÇÃO', 'Gestão da Tecnologia da Informação'),
          ('GESTÃO DE RECURSOS HUMANOS', 'Gestão de Recursos Humanos'),
          ('GESTÃO DE SEGURANÇA PRIVADA', 'Gestão de Segurança Privada'),
          ('GESTÃO FINANCEIRA', 'Gestão Financeira'),
          ('GESTÃO HOSPITALAR', 'Gestão Hospitalar'),
          ('GESTÃO PÚBLICA', 'Gestão Pública'),
          ('HISTÓRIA', 'História'),
          ('JORNALISMO', 'Jornalismo'),
          ('LETRAS - INGLÊS', 'Letras - Inglês'),
          ('LETRAS - PORTUGUÊS', 'Letras - Português'),
          ('LOGÍSTICA', 'Logística'),
          ('MARKETING', 'Marketing'),
          ('MATEMÁTICA', 'Matemática'),
          ('NUTRIÇÃO', 'Nutrição'),
          ('PEDAGOGIA', 'Pedagogia'),
          ('PROCESSOS GERENCIAIS', 'Processos Gerenciais'),
          ('PSICOLOGIA', 'Psicologia'),
          ('PSICOPEDAGOGIA', 'Psicopedagogia'),
          ('PUBLICIDADE E PROPAGANDA', 'Publicidade e Propaganda'),
          ('RADIOLOGIA', 'Radiologia'),
          ('REDES DE COMPUTADORES', 'Redes de Computadores'),
          ('SANEAMENTO AMBIENTAL', 'Saneamento Ambiental'),
          ('SECRETARIADO EXECUTIVO BILÍNGUE - PORTUGUÊS/INGLÊS', 'Secretariado Executivo Bilíngue - Português/Inglês'),
          ('SERVIÇO SOCIAL', 'Serviço Social'),
          ('SISTEMAS DE INFORMAÇÃO', 'Sistemas de Informação'),
          ('SISTEMAS PARA INTERNET', 'Sistemas para Internet')], validators=[DataRequired()])
    ano_conclusao = SelectField('Ano de Conclusão *', choices=[('', 'Selecione o ano'),
          ('2022', '2022'),
          ('2021', '2021'),
          ('2020', '2020'),
          ('2019', '2019'),
          ('2018', '2018'),
          ('2017', '2017'),
          ('2016', '2016'),
          ('2015', '2015'),
          ('2014', '2014'),
          ('2013', '2013'),
          ('2012', '2012'),
          ('2011', '2011'),
          ('2010', '2010'),
          ('2009', '2009'),
          ('2008', '2008'),
          ('2007', '2007'),
          ('2006', '2006'),
          ('2005', '2005'),
          ('2004', '2004')], validators=[DataRequired()])
    trabalha_na_area = SelectField('Trabalha na área em que se formou? *', choices=[('','Selecione'), ('sim', 'Sim'), ('nao', 'Não')], validators=[DataRequired()])
    curso_facilitou = SelectField('O curso facilitou a sua inclusão como agente do desenvolvimento da sociedade onde você vive e/ou atua? *', choices=[('','Selecione'), ('pouco', 'Pouco'), ('muito', 'Muito')], validators=[DataRequired()])
    estimulo_profissional = SelectField('Durante seu estudo, você foi estimulado para o aperfeiçoamento contínuo cultural e profissional? *', choices=[('', 'Selecione'), ('pouco', 'Pouco'), ('muito', 'Muito')], validators=[DataRequired()])
    promoveu_conhecimento = SelectField('As diversas disciplinas e eventos acadêmicos do curso promoveram, em você, o conhecimento, as análises críticas e alternativas de soluções dos problemas atuais da sociedade? *', choices=[('', 'Selecione'), ('pouco', 'Pouco'), ('muito', 'Muito')], validators=[DataRequired()])
    pos_graduacao = SelectField('Após sua formação no Centro Universitário Sumaré, você chegou a concluir algum curso de Pós-Graduação? *', choices=[('','Selecione'), ('nao', 'Não'), ('sim', 'Sim')], validators=[DataRequired()])
    pos_graduacao_resposta = StringField('Caso sim, em qual Instituição realizou o curso?', validators=[Optional()])
    interesse_pos_graduacao = SelectField('Você teria interesse por um curso de Pós-Graduação no Centro Universitário Sumaré? *', choices=[('','Selecione'), ('sim', 'Sim'), ('nao', 'Não')], validators=[DataRequired()])
    segunda_graduacao = SelectField('E, uma Segunda Graduação neste Centro Universitário Sumaré, você teria interesse? *', choices=[('','Selecione'), ('nao', 'Não'), ('sim', 'Sim')], validators=[DataRequired()])
    segunda_graduacao_resposta = StringField('Caso sim, qual o curso?', validators=[Optional()])
    importancia = SelectField('Qual a importância do Centro Universitário Sumaré na sua trajetória profissional? *', choices=[('','Selecione'), ('muito importante', 'Muito Importante'), ('pouco importante', 'Pouco Importante'), ('nada importante','Nada Importante')], validators=[DataRequired()])
    recomenda = SelectField('Você recomenda a terceiros o Centro Universitário Sumaré? *', choices=[('','Selecione'), ('sim', 'Sim'), ('nao', 'Não')], validators=[DataRequired()])
    receber_informacoes = SelectField('Gostaria de receber informações sobre as atividades desenvolvidas pelo Centro Univeristário Sumaré? *', choices=[('','Selecione'), ('sim', 'Sim'), ('nao', 'Não')], validators=[DataRequired()])
