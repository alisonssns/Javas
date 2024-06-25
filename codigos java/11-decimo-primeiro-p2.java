import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

class RoletaRussa_pt2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> lista = new ArrayList<>();

        lista.add(1);
        lista.add(2);
        lista.add(3);
        lista.add(4);
        lista.add(5);
        lista.add(6);

        Random roleta = new Random();
        int barril = roleta.nextInt(lista.size()) + 1;

        boolean jogoAtivo = true;

        System.out.println("Aperte ENTER para começar a roleta russa");
        scanner.nextLine();

        try {
            while (jogoAtivo) {
                while(lista.size() > 1 ) {
                    System.out.println("Escolha um dos seguintes números:");
                    System.out.println(lista);
                    int escolha = scanner.nextInt();

                    if (escolha >= 1 && escolha <= lista.size()) {
                        if (escolha == barril) {
                            System.out.println("Morreu");
                            jogoAtivo = false;
                            break;
                        } else {
                            System.out.println("Cartucho vazio");
                            lista.remove(escolha - 1);
                        }
                    } else {
                        System.out.println("Número inválido");
                    }
                }
            }
        } finally {
            scanner.close();
        }

        System.out.println("");
        System.out.println("Fim de jogo");
    }
}
