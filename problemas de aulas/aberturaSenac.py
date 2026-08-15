#Seja bem vindo ao curso full stack SENAC 27/07/2026

from datetime import datetime

# Captura a data e hora atual do sistema
agora = datetime.now()

# Formatações diferentes para exibição
data_formatada = agora.strftime("%d/%m/%Y")
hora_formatada = agora.strftime("%H:%M:%S")
data_hora_completa = agora.strftime("%d/%m/%Y %H:%M:%S")

# Exibe no terminal
print(f"📅 Data: {data_formatada}")
print(f"⏰ Hora: {hora_formatada}")
print(f"📋 Data e Hora: {data_hora_completa}")