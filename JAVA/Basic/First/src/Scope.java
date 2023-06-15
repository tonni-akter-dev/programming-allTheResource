public class Scope {

  /* static int x = 11;
  private int y = 33;
  public void method1(int x) {
    Scope s = new Scope();
    this.x = 23;
    y = 44;
    System.out.println(Scope.x);
    System.out.println(s.x);
    System.out.println(s.y);
    System.out.println(y);
  }

  public static void main(String arg[]) {
    Scope s = new Scope();
    s.method1(5);
  } */

  //   data types in java
  /* there are two types of data in java
   * Primitive Data Type: such as boolean, char, int, short, byte, long, float, and double
   * Non-Primitive Data Type or Object Data type: such as String, Array, etc.
   */
  public static void main(String[] args) {
    boolean b = true;
    boolean c = false;
    if (b == true) {
      System.out.println("b for banana and this is true" + b);
    } else {
      System.out.println("c for cocacola and this is true" + c);
    }
  }
}
