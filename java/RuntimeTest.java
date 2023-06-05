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
        Class runtimeClass1 = Class.forName("java.lang.Runtime");// 相当于 import
        Constructor constructor = runtimeClass1.getDeclaredConstructor();// 相当于编写无参构造类
        constructor.setAccessible(true);// 取消private的限制
        Object runtimeInstance = constructor.newInstance();// 有了无参构造类以后，我们new了一个对象
        Method method = runtimeClass1.getMethod("exec", String.class);// 编写类的方法
        Process process = (Process) method.invoke(runtimeInstance, "calc");// 调用了类的方法
        // 接下来就是回显的结果
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
