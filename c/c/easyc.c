// #include<stdio.h>
// int main(){
//     char b[]="d`vxbQd";
//     for(int i = 0;i<7;i++){
//         b[i]=b[i]^2;
//         b[i]--;
//         printf("%c",b[i]);
//     }
// }
#include<stdio.h>
int main(){

    scanf("%s", Str1);
  for ( int i = '\0'; ; ++i )
  {
    v4 = &Str1[strlen(Str1)];
    if ( i >= v4 - Str1 )
      break;
    ++Str1[i];
  }
}