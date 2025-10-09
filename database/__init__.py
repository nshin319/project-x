import sqlite3
from config import DB_FILE

# Create database
#Attendance_record

'''
データベースファイルに接続
カーソルオブジェクトを作成：SQL文をDBに送るためのカーソルを作成
SQL命令の実行準備
'''

def init_db():
    connect_db = sqlite3.connect(DB_FILE)
    db_crsor = connect_db.cursor()
    db_crsor.execute('''
        CREATE TABLE IF NOT EXISTS attendance_records(
        record_id    INT PRIMARY KEY,
        work_date	DATE,
        clock_in	DATETIME,
        clock_out	DATETIME,
        work_time	INT,
        created_at	DATETIME,
        updated_at	DATETIME
        )
''')
    
if __name__ == "__main__":
    init_db()
    