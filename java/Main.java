// public class Main {
//     // public static void main(String[] args) {
//     // Person p = new Person();
//     // int n = 15; // n的值为15
//     // p.setAge(n); // 传入n的值
//     // System.out.println(p.getAge()); // 15
//     // n = 20; // n的值改为20
//     // System.out.println(p.getAge()); // 15还是20?
//     // }
//     // }

//     // class Person {
//     // private int age;

//     // public int getAge() {
//     // return this.age;
//     // }

//     // public void setAge(int age) {
//     // this.age = age;
//     // }
//     // public static void main(String[] args) {
//     // Person p = new Person();
//     // String[] fullname = new String[] { "Homer", "Simpson" };
//     // p.setName(fullname); // 传入fullname数组
//     // System.out.println(p.getName()); // "Homer Simpson"
//     // fullname[0] = "Bart"; // fullname数组的第一个元素修改为"Bart"
//     // System.out.println(p.getName()); // "Homer Simpson"还是"Bart Simpson"?
//     // }
//     // }

//     // class Person {
//     // private String[] name;

//     // public String getName() {
//     // return this.name[0] + " " + this.name[1];
//     // }

//     // public void setName(String[] name) {
//     // this.name = name;
//     // }

//     // }
//     public static void main(String[] args) {
//         Person p = new Person();
//         String bob = "Bob";
//         p.setName(bob); // 传入bob变量
//         System.out.println(p.getName()); // "Bob"
//         bob = "Alice"; // bob改名为Alice
//         System.out.println(p.getName()); // "Bob"还是"Alice"?
//     }
// }

// class Person {
//     private String name;

//     public String getName() {
//         return this.name;
//     }

//     public void setName(String name) {
//         this.name = name;
//     }
// }
// public class Main {
//     public static void main(String[] args) {
//         String[] fields = { "name", "position", "salary" };
//         String table = "employee";
//         String insert = buildInsertSql(table, fields);
//         System.out.println(insert);
//         String s = "INSERT INTO employee (name, position, salary) VALUES (?, ?, ?)";
//         System.out.println(s.equals(insert) ? "测试成功" : "测试失败");
//     }

//     static String buildInsertSql(String table, String[] fields) {
//         StringBuilder in = new StringBuilder();
//         in.insert(0, table);
//         in.insert(0,"INSERT INTO");

//         return in.toString();
//     }
// }
// public class Main {
// public static void main(String[] args) {
// StringBuilder sb = new StringBuilder(1024);
// sb.append("Mr ")
// .append("Bob")
// .append("!")
// .insert(0, "Hello, ");
// System.out.println(sb.toString());
// }
// }
public class Main {
    public static void main(String[] args) {
        printClassInfo("".getClass());
        printClassInfo(Runnable.class);
        printClassInfo(java.time.Month.class);
        printClassInfo(String[].class);
        printClassInfo(int.class);
    }

    static void printClassInfo(Class cls) {
        System.out.println("Class name: " + cls.getName());
        System.out.println("Simple name: " + cls.getSimpleName());
        if (cls.getPackage() != null) {
            System.out.println("Package name: " + cls.getPackage().getName());
        }
        System.out.println("is interface: " + cls.isInterface());
        System.out.println("is enum: " + cls.isEnum());
        System.out.println("is array: " + cls.isArray());
        System.out.println("is primitive: " + cls.isPrimitive());
    }
}