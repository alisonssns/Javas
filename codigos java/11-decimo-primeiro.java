import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

class RoletaRussa {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<String> lista = new ArrayList<>();

        lista.add("1");
        lista.add("2");
        lista.add("3");
        lista.add("4");
        lista.add("5");
        lista.add("6");

        boolean jogoAtivo = true;

        System.out.println("Aperte ENTER para começar a roleta russa");
        scanner.nextLine();

        while (jogoAtivo) {
            Random roleta = new Random();
            int barril = roleta.nextInt(6) + 1;

            for (int i = 1; i <= 6; i++) {
                System.out.println("Testar a sorte:");
                scanner.nextLine();
                if (barril == i) {
                    for (int j = 3; j >= 1; j--) {
                        System.out.println(j);
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    System.out.println("");
                    System.out.println("Morreu");
                    jogoAtivo = false;
                    break;
                } else {
                    for (int j = 3; j >= 1; j--) {
                        System.out.println(j);
                        try {
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    System.out.println("");
                    System.out.println(i + "º cartucho vazio");
                }
            }
        }
        scanner.close();
        System.out.println("");
        System.out.println("Fim de jogo");
    }
}
