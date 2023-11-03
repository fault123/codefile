//#include<stdio.h>
// int main()
// {
//   int v0; // ebx
//   char buf[16]; // [rsp+0h] [rbp-50h] BYREF
//   char v3[64]; // [rsp+10h] [rbp-40h] BYREF

//   srand('9');
//   puts("you should prove that you love pwn,so input your name:");
//   read(0, buf, 0x10uLL);
//   v0 = atoi(buf);
//   if ( v0 == rand() )
//   {
//     puts("ok,you have a little cognition about pwn,so what will you do next?");
//     read(0, v3, 0x100uLL);
//   }
//   else
//   {
//     puts("sorry,you are not a real pwnner");
//   }
//   return 0LL;
// }
#include<stdio.h>
int main(){
    char a[]= "Shino&Photon";
    int c;
    c=(int)a;
    printf("%d",c);
}