Projet Django 2025-26 Osman hsnv

Un site qui regroupe divers article, avec des commentaire pouvant etre laisser par les utilisateur via a un formulaire sur le site.
Le crud est realiser sur la table de reviews


RESSOURCE :
Tout les détailles produits present sur ce site ont été récuperer depuis Digitec.ch et Galaxus.ch
Pour le deployement et la creation du projet : https://tutorial.djangogirls.org/en/django/




AIDE MEMOIRE :
Forcer le remplacement du git sur pythonAnywhere : pa_autoconfigure_django.py --python=3.10 https://github.com/esig-ge/lien-github-cible --nuke
Creation de nouvelle administrateur : python manage.py createsuperuser


ERREUR :
Soucis de déployement sur python.anywhere, j'ai rencontré une erreur d'import. Pour régler cela, il faut ajout la ligne "from typing_extensions import Required, NotRequired" tout en haut de models.py (cela va poser soucis en local : suffit de mettre ce bout en commentaire)
