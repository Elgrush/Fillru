from apscheduler.schedulers.background import BackgroundScheduler
from .jobs import schedule_api


def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(schedule_api, 'interval', minutes=10)
    scheduler.start()
