
// import java.io.BufferedReader;
// import java.io.IOException;
// import java.io.InputStream;
// import java.io.InputStreamReader;

// public class Test {
//     public static void main(String[] args) throws IOException {
//         String property = System.getProperty("os.name");
//         String[] cmd1 = { "cmd", "/C", "start calc.exe" };
//         String[] cmd2 = { "/bin/sh", "-c", "ls" };
//         String[] cmd = null;
//         System.out.println(property);// ��ӡ������ϵͳ����
//         if (property.contains("Windows")) {
//             cmd = cmd1;
//         } else {
//             cmd = cmd2;
//         }

//         Process process = Runtime.getRuntime().exec(cmd);// ִ��cmd
//         InputStream inputStream = process.getInputStream();

//         InputStreamReader inputStreamReader = new InputStreamReader(inputStream);// ���������ж��뻺����
//         BufferedReader inputBufferedReader = new BufferedReader(inputStreamReader);// �ӻ������ж���
//         StringBuilder stringBuilder = new StringBuilder();// ���ٿռ�洢
//         String line = null;
//         if ((line = inputBufferedReader.readLine()) != null) {
//             stringBuilder.append(line);
//             System.out.println(line);
//         }
//         inputBufferedReader.close();
//         inputBufferedReader = null;
//         inputStreamReader.close();
//         inputStreamReader = null;
//         inputStream.close();
//         inputStream = null;
//     }
// }
public class Test {
    int test = 20;

    public static void main(String[] args) {
        int test = 20;
        System.out.println();
    }
}
