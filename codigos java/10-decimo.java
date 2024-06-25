import java.util.Scanner;
import java.util.ArrayList;

class ListaDeTarefas {

    public static void main(String[] args) {
        ArrayList<String> lista = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Olá, aqui estão algumas opções para sua lista:");

        while (true) {
            System.out.println("Digite 1 para adicionar uma tarefa à lista.");
            System.out.println("Digite 2 para remover uma tarefa da lista");
            System.out.println("Digite 3 para determinar tarefas finalizadas");
            System.out.println("Digite 4 para visualizar lista");
            System.out.println("Digite 5 para encerrar");

            int escolha = scanner.nextInt();

            if (escolha == 1) {
                while (true) {
                    System.out.println("");
                    System.out.println("Digite o nome da tarefa a ser adicionado: ");
                    String novoItem = scanner.nextLine();
                    lista.add(novoItem);

                    System.out.println("");
                    System.out.println("Se deseja adicionar mais alguma tarefa, digite 1");
                    System.out.println("Se deseja voltar ao início, digite 2");
                    int resposta = scanner.nextInt();

                    if (resposta != 1) {
                        break;
                    }
                }
            } else if (escolha == 2) {
                while (true) {
                    System.out.println("Lista atual:");
                    System.out.println("");
                    for (int i = 1; i <= lista.size(); i++) {
                        String elemento = lista.get(i - 1);
                        System.out.println(i + " - " + elemento);
                    }

                    System.out.println("Digite o número da tarefa que deseja remover:");
                    System.out.println("Digite '0' para voltar ao início");
                    int excluir = scanner.nextInt();

                    if (excluir == 0) {
                        break;
                    } else if (excluir >= 1 && excluir <= lista.size()) {
                        lista.remove(excluir - 1);
                        System.out.println("");
                        System.out.println("Tarefa removida com sucesso.");
                        System.out.println("");
                    } else {
                        System.out.println("");
                        System.out.println("Número inválido. Tente novamente.");
                        System.out.println("");
                    }
                }
            } else if (escolha == 3) {
                while (true) {
                    System.out.println("Lista atual:");
                    System.out.println("");
                    for (int i = 1; i <= lista.size(); i++) {
                        String elemento = lista.get(i - 1);
                        System.out.println(i + " - " + elemento);
                    }

                    System.out.println("Digite o número da tarefa finalizada:");
                    System.out.println("Digite '0' para voltar ao início");
                    int editar = scanner.nextInt();

                    if (editar == 0) {
                        break;
                    } else if (editar >= 1 && editar <= lista.size()) {
                        String valorAtual = lista.get(editar - 1);
                        String novoValor = valorAtual + " (FINALIZADO)";
                        lista.set(editar - 1, novoValor);
                        System.out.println("");
                        System.out.println("Tarefa finalizada!");
                        System.out.println("");
                    } else {
                        System.out.println("");
                        System.out.println("Número inválido. Tente novamente.");
                        System.out.println("");
                    }
                }
            } else if (escolha == 4) {
                System.out.println("");
                System.out.println("Aqui está sua lista: ");
                System.out.println("");
                for (int i = 1; i <= lista.size(); i++) {
                    String elemento = lista.get(i - 1);
                    System.out.println(i + " - " + elemento);
                }
                System.out.println("");
            } else if (escolha == 5) {
                System.out.println("");
                System.out.println("Finalizando programa!...");
                System.out.println("Até a próxima!");
                break;
            }
        }

        scanner.close();
    }
}
