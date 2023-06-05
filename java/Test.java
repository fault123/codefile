
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
//         System.out.println(property);// 打印出主机系统类型
//         if (property.contains("Windows")) {
//             cmd = cmd1;
//         } else {
//             cmd = cmd2;
//         }

//         Process process = Runtime.getRuntime().exec(cmd);// 执行cmd
//         InputStream inputStream = process.getInputStream();

//         InputStreamReader inputStreamReader = new InputStreamReader(inputStream);// 从输入流中读入缓冲区
//         BufferedReader inputBufferedReader = new BufferedReader(inputStreamReader);// 从缓冲区中读出
//         StringBuilder stringBuilder = new StringBuilder();// 开辟空间存储
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
