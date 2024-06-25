import java.util.Scanner;
class oitavo{
    public static void main(String[] agrs){
        Scanner numero = new Scanner(System.in);
        System.out.println("Digite um numero: ");
        int num = numero.nextInt();
        double teste = (num%2);
        if (teste == 0) {
            System.out.println("Este número é par");
        }else{
            System.out.println("Este número é impar");
        }
        numero.close();
    }
}
