#include<stdio.h>
#include"test.h"
static void test_printf(){
    printf("test_printf\n");
}
void test(){
    static int time=0;
    time++;
    printf("time=%d",time);
    // test_printf();
}