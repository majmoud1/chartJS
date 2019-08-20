import pandas as pd

""" Fonction permettant de lire le fichier CSV """
def lectureFichier():
    fichier = pd.read_csv('table_vente_jumia.csv', sep=',', header=None)
    produits = []
    for j in range(1, 12):
        # print(fichier[0][j])
        p = {'produit': fichier[0][j]}
        for i in range(1, 14):
            p.__setitem__(fichier[i][0], fichier[i][j])
        produits.append(p)
    return produits
