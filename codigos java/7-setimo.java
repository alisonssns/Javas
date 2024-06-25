import java.util.Arrays;

class OrdenacaoCrescente {
    public static void main(String[] args) {
        String[] numeros = {"f","s","a","b","d","c","t"};

        Arrays.sort(numeros);

        System.out.println("Números em ordem crescente:");
        for (String numero : numeros) {
            System.out.print(numero + " ");
        }
    }
}
