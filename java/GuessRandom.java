
import java.util.Random;
import java.util.Scanner;

public class GuessRandom {
    public static void main(String[] args) {
        int ran;
        int cai;
        int n = 0;
        Scanner in = new Scanner(System.in);
        Random ra = new Random();
        ran = ra.nextInt(100);
        do {
            cai = in.nextInt();
            if (cai > ran) {
                System.out.println("ƫ��");
                n += 1;
            } else if (cai < ran) {
                System.out.println("ƫС");
                n += 1;
            } else {
                System.out.println("�¶��ˣ�һ������" + n + "��");
            }
        } while (cai != ran);
    }
}