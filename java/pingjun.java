import java.util.Scanner;

public class pingjun {
    public static void main(String[] args) {
        int cin = 0;
        int all = 0;
        Scanner in = new Scanner(System.in);
        cin = in.nextInt();
        while (cin != -1) {
            all += cin;
            cin = in.nextInt();
        }
        System.out.println(all);

    }
}
