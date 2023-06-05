
import org.apache.commons.collections.functors.InvokerTransformer;

public class demo01 {
    public static void main(String[] args) throws Exception {
        Runtime runtime = Runtime.getRuntime();
        new InvokerTransformer("exec", new Class[] { String.class }, new Object[] { "calc" }).transform(runtime);
    }
}
