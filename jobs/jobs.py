from django.conf import settings


from main import sync_data_with_my_storeroom


def schedule_api():
    sync_data_with_my_storeroom()
    print("Databases synchronised")
