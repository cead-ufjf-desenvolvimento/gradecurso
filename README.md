# CEAD | Assistente de Criação de Grades de Curso

Sistema para formatação de grades dos cursos EAD da UFJF no formato
utilizado no site do CEAD|UFJF.

É possível fazer a criação de grades através de um assistente
virtual em tempo real ou pelo envio de um arquivo Excel
pré-formatado e disponibilizado pela página.

## Configuração

Instalação dos módulos necessários:
```bash
    pip install requirements.requirements.txt
```

Instalação do wkhtmltopdf
```bash
    apt install wkhtmltopdf
```

Criação da pasta **scripts** na raiz do projeto e inserção do arquivo **config.json** (solicitar).

```bash
    python manage.py runserver [port]
```

### Index
![App Screenshot](gradeApp/static/screenshots/screenshot1.png)

### Assistente
![App Screenshot](gradeApp/static/screenshots/screenshot2.png)

### Arquivo
![App Screenshot](gradeApp/static/screenshots/screenshot3.png)