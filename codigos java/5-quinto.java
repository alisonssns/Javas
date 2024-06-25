import java.util.Scanner;
class Quinto {
    public static void main(String[] args) {
        Scanner fator = new Scanner(System.in);
        
        System.out.println("Digite um valor:");
        int val = fator.nextInt();
        
        int fatorial = 1;

        while (val > 0) {
            fatorial *= val;
            val--;
        }

        System.out.println("O fatorial é: " + fatorial);

        fator.close();
    }
}
