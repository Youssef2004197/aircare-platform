import psycopg2

try:
    connection = psycopg2.connect(
        host="localhost",          
        database="aircare_dev",    
        user="postgres",           
        password="aircareplatformdev", 
        port="5432"                
    )

   
    cursor = connection.cursor()
    

    cursor.execute("SELECT version();")
    db_version = cursor.fetchone()
    
    print("\n--- Connexion réussie à PostgreSQL ! ---")
    print(f"Version de la base de données : {db_version[0]}\n")

    # 4. Sakkr el connexion
    cursor.close()
    connection.close()

except Exception as error:
    print(f"Erreur lors de la connexion à la base de données : {error}")