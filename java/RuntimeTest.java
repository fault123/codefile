import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class RuntimeTest {
    public static void main(String[] args) throws ClassNotFoundException, NoSuchMethodException, IllegalAccessException,
            InvocationTargetException, InstantiationException, IOException {
        Class runtimeClass1 = Class.forName("java.lang.Runtime");// �൱�� import
        Constructor constructor = runtimeClass1.getDeclaredConstructor();// �൱�ڱ�д�޲ι�����
        constructor.setAccessible(true);// ȡ��private������
        Object runtimeInstance = constructor.newInstance();// �����޲ι������Ժ�����new��һ������
        Method method = runtimeClass1.getMethod("exec", String.class);// ��д��ķ���
        Process process = (Process) method.invoke(runtimeInstance, "calc");// ��������ķ���
        // ���������ǻ��ԵĽ��
        InputStream inputStream = process.getInputStream();
        InputStreamReader inputStreamReader = new InputStreamReader(inputStream);
        BufferedReader inputBufferedReader = new BufferedReader(inputStreamReader);
        StringBuilder stringBuilder = new StringBuilder();
        String line = null;
        while ((line = inputBufferedReader.readLine()) != null) {
            stringBuilder.append(line);
            System.out.println(line);
        }
        inputBufferedReader.close();
        inputStreamReader.close();
        inputStream.close();
    }
}
