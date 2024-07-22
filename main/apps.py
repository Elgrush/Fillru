from django.apps import AppConfig


class MainConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'main'

    def ready(self):
        from jobs import updater
        from main import sync_data_with_my_storeroom
        sync_data_with_my_storeroom()
        updater.start()
