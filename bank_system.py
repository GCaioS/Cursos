
menu = f"""================ MENU ================

[1] SAQUE
[2] DEPOSITO
[3] EXTRADO
[4] SAIR

======================================"""
balance = 1000
extract = balance
deposit = 0
withdraw_value = 0

while True:
    print(menu)
    select = input("Digite a opção desejada\n")

    if int(select) == 1:
        print(f"""\n""")
        withdraw_value = int(input("Digite o valor a ser sacado\n"))
        balance-=withdraw_value
        print(f"Foram sacados R${withdraw_value:.2f} de sua conta")
        
    elif int(select) == 2:
        deposit = int(input("Digite o valor a ser depositado:\n"))
        balance+= deposit
        print(f"Foram depositados {deposit:.2f} em sua conta.")
    
    elif int(select) == 3:
        print(float(balance))
    
    elif int(select) == 4:
        print("Saindo...")
        break

    else:
        print("Opção inválida, selecione uma das opções abaixo.")