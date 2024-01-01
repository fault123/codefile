import java.util.HashMap;
import java.util.Map;

public class Mapp {
    public static void main(String[] args) {
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("aaa", 1);
        hashMap.put("bbb", 2);
        hashMap.put("ccc", 3);
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            String key = entry.getKey();
            Integer value = entry.getValue();
            System.out.println(key + "=" + value);
        }
    }
}
