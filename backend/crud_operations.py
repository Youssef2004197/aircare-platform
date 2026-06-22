import psycopg2

def get_connection():
    return psycopg2.connect(
        host="localhost",
        database="aircare_dev",
        user="postgres",
        password="aircareplatformdev",
        port="5432"
    )

def create_user(username, email):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = "INSERT INTO users (username, email) VALUES (%s, %s);"
        cursor.execute(query, (username, email))
        conn.commit()
        print(f" [+] User '{username}' created successfully!")
    except Exception as error:
        print(f" [!] Error in create_user: {error}")
        conn.rollback()
    finally:
        cursor.close()
        conn.close()

def read_users():
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = "SELECT id, username, email, created_at FROM users;"
        cursor.execute(query)
        users = cursor.fetchall()
        
        print("\n--- Users List in Database ---")
        for user in users:
            print(f"ID: {user[0]} | Username: {user[1]} | Email: {user[2]} | Created At: {user[3]}")
        print("-------------------------------\n")
    except Exception as error:
        print(f" [!] Error in read_users: {error}")
    finally:
        cursor.close()
        conn.close()

def update_user_email(username, new_email):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = "UPDATE users SET email = %s WHERE username = %s;"
        cursor.execute(query, (new_email, username))
        conn.commit()
        print(f" [+] User '{username}' email updated to '{new_email}' successfully!")
    except Exception as error:
        print(f" [!] Error in update_user_email: {error}")
        conn.rollback()
    finally:
        cursor.close()
        conn.close()

def delete_user(username):
    conn = get_connection()
    cursor = conn.cursor()
    try:
        query = "DELETE FROM users WHERE username = %s;"
        cursor.execute(query, (username,))
        conn.commit()
        print(f" [-] User '{username}' deleted successfully!")
    except Exception as error:
        print(f" [!] Error in delete_user: {error}")
        conn.rollback()
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    print("Testing Update and Delete operations...")
    
    update_user_email("anis_test", "anis_updated@aircare.com")
    read_users()
    
    delete_user("skander_dev")
    read_users()