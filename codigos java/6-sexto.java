import java.util.Random;
import java.util.Scanner;
class sexto {

    public static int metodo1() {
        Random misterio = new Random();
        return misterio.nextInt(10) + 1;
    }

    public static void main(String[] dois){
        int numero = metodo1();
        Scanner escolha = new Scanner(System.in);
        System.out.println("Teste sua sorte, escolha um numéro de 1 a 10");
        int resposta = escolha.nextInt();
        if (resposta == numero){
            System.out.println("Parabéns você acertou!");
        }else{
            System.out.println("Que pena, você errou! O número era "+numero);
            escolha.close();
        }
    } 
}
