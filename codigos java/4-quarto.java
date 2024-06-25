import java.util.Scanner;
class quarto{
    public static void main(String[] foda){

        try (Scanner escolha = new Scanner(System.in)) {
            System.out.println("Digite '1' para converter de celsius para Kelvin");
            System.out.println("Digite '2' para converter de celsius para Fahrenheit");
            int num = escolha.nextInt();
            if (num == 1){
                try (Scanner celsius = new Scanner(System.in)) {
                    System.out.println("Digite um valor em celsius ser convertido em Kelvin");
                    double cel = celsius.nextDouble();
                    double kel = (cel + 273.15);
                    System.out.println(cel+ "ºC resultam em " +kel+"ºK");
                }
            }else{
                try (Scanner celsius = new Scanner(System.in)) {
                    System.out.println("Digite um valor em celsius ser convertido em Fahrenheit");
                    double cel = celsius.nextDouble();
                    double Fahin = (cel*1.8);
                    double Fahresult = (Fahin + 32);
                    System.out.println(cel+ "ºC resultam em " +Fahresult+"ºF");
                }
            }
        }
    }
}