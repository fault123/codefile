
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
                System.out.println("偏大");
                n += 1;
            } else if (cai < ran) {
                System.out.println("偏小");
                n += 1;
            } else {
                System.out.println("猜对了，一共猜了" + n + "次");
            }
        } while (cai != ran);
    }
}