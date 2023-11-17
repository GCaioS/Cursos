users = {"caio.teste@gmail.com":"caio123",
        "teste.novo@gmail.com": "senha123"}

balance = 1000
extract = balance
deposit = 0
withdraw_value = 0
withdraw_limit = 3

menu = f"""





================ MENU ================

[1] SAQUE
[2] DEPOSITO
[3] EXTRADO
[4] SAIR

======================================





"""

def validar_usuario():

    while True:
        e_mail = input("Digite seu e-mail:...\n")
        if e_mail in users:
            senha = input("Digite sua senha:...\n")
            
            if senha == users[e_mail]:
                print("Acesso permitido")
                return False
            else:
                print("Senha incorreta, tente novamente.")
        else:
            print("Usuário não encontrado, tente novamente.")

def saque():
    global withdraw_limit
    global withdraw_value
    global balance

    if int(select) == 1:       
            if withdraw_limit != 0:
                print(f"""\n""")                                                            #SAQUE
                withdraw_value = int(input("Digite o valor a ser sacado\n"))
                balance-=withdraw_value
                print(f"\nForam sacados R${withdraw_value:.2f} de sua conta")
                withdraw_limit = withdraw_limit - 1
                print(f"limite disponíveis {withdraw_limit}")
            
            else:
                 print("Você atingiu seu limite de saque tente novamente amanhã")

def deposito():
    global withdraw_limit
    global withdraw_value
    global balance
    global select
    global deposit
    
    if int(select) == 2:                                                          #DEPOSITO
        deposit = int(input("Digite o valor a ser depositado:\n"))
        balance+= deposit
        print(f"\nForam depositados {deposit:.2f} em sua conta.")

def extrato():
    global withdraw_limit
    global withdraw_value
    global balance
    global select
    global deposit

    if int(select) == 3:                                                          #EXTRATO
        print(f"\nO saldo atual é de RS{balance:.2f}")

def erro():
    global withdraw_limit
    global withdraw_value
    global balance
    global select
    global deposit
    
    if int(select) not in [1, 2, 3, 4]:
        print("Opção invalida, selecione uma das opções a baixo.")

def sair():
    global withdraw_limit
    global withdraw_value
    global balance
    global select
    global deposit

    if int(select) == 4:                                                          #SAIR
        print("Saindo...")

        exit()

def escolha():
    global select 
    select = input("Escolha uma das opções acima:...\n")

validar_usuario()

while True:
    print(menu)
    escolha()
    saque()
    deposito()
    extrato()
    erro()
    sair()