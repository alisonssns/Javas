import java.util.Scanner;
class VerificadorNumeroPrimo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número inteiro positivo: ");

        int numero = scanner.nextInt();

        if (ehPrimo(numero)) {
            System.out.println(numero + " é um número primo.");
        } else {
            System.out.println(numero + " não é um número primo.");
        }

        scanner.close();
    }

    private static boolean ehPrimo(int numero) {
    for (int j = 2; j < numero; j++) {
        int teste = (numero % j);
        if (teste == 0)
            return false;   
    }
    return true;
}
    }
