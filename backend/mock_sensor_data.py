import psycopg2
import random
import time
from datetime import datetime

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="aircare_dev",
        user="postgres",
        password="aircareplatformdev",
        port="5432"
    )

def setup_mock_device(device_name, location, owner_id):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = """
        INSERT INTO devices (device_name, location, owner_id)
        VALUES (%s, %s, %s)
        RETURNING id;
        """
        cursor.execute(query, (device_name, location, owner_id))
        device_id = cursor.fetchone()[0]
        conn.commit()
        print(f" [+] Device '{device_name}' [ID: {device_id}] is ready.")
        return device_id
    except Exception as error:
        print(f" [!] Error setting up device: {error}")
        conn.rollback()
        return None
    finally:
        cursor.close()
        conn.close()

def generate_mock_readings(device_id, count=5):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = """
        INSERT INTO readings (device_id, temperature, humidity, air_quality_index, timestamp)
        VALUES (%s, %s, %s, %s, %s);
        """
        
        print(f"\n Generating {count} mock air quality readings...")
        for i in range(count):
            temperature = round(random.uniform(18.0, 35.0), 2)
            humidity = round(random.uniform(30.0, 70.0), 2)
            air_quality_index = round(random.uniform(10.0, 150.0), 2)
            timestamp = datetime.now()

            cursor.execute(query, (device_id, temperature, humidity, air_quality_index, timestamp))
            print(f"  -> Inserted: Temp: {temperature}°C | Humidity: {humidity}% | AQI: {air_quality_index}")
            
            time.sleep(1)
            
        conn.commit()
        print(" [+] All mock readings inserted successfully!")
    except Exception as error:
        print(f" [!] Error inserting readings: {error}")
        conn.rollback()
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    device_id = setup_mock_device("Living Room Sensor", "Tunis", 2)
    
    if device_id:
        generate_mock_readings(device_id, count=5)