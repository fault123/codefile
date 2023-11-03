// #include<stdio.h>

// int main()
// {
// 	int a = 0;
// 	int b = 0;
// 	int c = 0;
// 	int d = 0;
// 	scanf("%d %d %d %d", &a,&b,&c,&d);
// 	if (b <= d)
// 	{
// 		int num1 = c - a;
// 		int num2 = d - b;
// 		printf("%d %d", num1, num2);
// 	}
// 	else
// 	{
// 		int num3 = b + d;

// 		if (num3 < 60)
// 		{
// 			int num4 = c - a;
// 			int num5 = b + d;
// 			printf("%d %d", num4, num5);
// 		}
// 		else
// 		{
// 			int num6 = c - a + 1;
// 			int num7 = 60 - b + d;
// 			printf("%d %d", num6, num7);
// 			return 0;
// 		}
// 	}
// }
// # include<stdio.h>
// int main()
// {
//     int a;
//     int b;
//     int c;
//     scanf("%d %d %d",&a,&b,&c);
//     if (a+b>c,a+c>b,b+c>a)
//     {
//         printf("1");
//     }
//     else
//     {
//         printf("0");
//     }
//     return 0;
// }
//判断能否构成一个三角形
// int main(){
// 	int a = 1;
// 	int b = 1;
// 	int c = 1;
// 	if(b,a,c){
// 		printf("1");
// 	}else{
// 		printf("0");
// 	}
// }

// #include <stdio.h>
// int add(int a, int b, int c)
// {
// 	int d;
// 	d=a+b+c;
// 	return d ;
// }
// int main()
// {
// 	int x, y, z, sum;
// 	printf("Input three integers:");
// 	scanf (" %d, %d, %d",&x, &y, &z);
// 	sum=add(x, y, z);
// 	printf("sum=%d\n", sum);
// 	return 0;
// }

// #include<stdio.h>
// int main()
// {
// unsigned int a,b,c,d,e,f;
// a = 876543210;
// b = 876543210;
// c = 876543210;
// d = 876543210;
// e = 876543210;
// f = a + b + c + d + e;
// printf("a + b + c + d + e = %u",f);
// return 0;
// }
#include<stdio.h>
int main(){
    float a;
    double b;
    a=123456.789e4;
    b=123456.789e4;
    printf("%f %f",a,b);
}