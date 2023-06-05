import java.util.Scanner;

public class gongyueshu {
    /**
     * @param args
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a;
        int b;
        int m;
        int n;
        String l = "aaa";
        a = in.nextInt();
        b = in.nextInt();
        m = a;
        n = b;
        while (b != 0) {
            int result = a % b;
            a = b;
            b = result;
        }
        System.out.println("ÊÇ" + a);
    }
}
