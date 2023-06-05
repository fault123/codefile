#include<stdio.h>
#include "test.h"
//#define VERSION_PRE 1
#define VERSION_GOLD 1
#define A (3+1)
char a;
short b;
int c;

// float tmp=37.5;
// char *mac="192.169.31.84";


// char mac_array[4]={};

unsigned char time_buffer[4]={0x5F,0xcB,0x0F,0x4F};
unsigned int time;
unsigned int u8232b(unsigned char *buffer){
    return(((((((unsigned int)buffer[0])<<8)|buffer[1])<<8)|buffer[2])<<8)|buffer[3];//时间戳十六进制转换函数
}

#define PCHAR1 char *
typedef char * PCHAR2;
PCHAR1 c1,c2;
//c1是char* c2是char
PCHAR2 c3,c4;
//c3,c4都是char*,typedef是直接引入新别名


//常用宏定义
typedef unsigned char uint8;
typedef unsigned short unit16;
typedef unsigned int uint32;


// #define NET_INIT 1
// #define NET_CONNECT_ING 2
// #define NET_CONNECT_SUCCESS 3
// #define NET_CONECT_FAIL 4

typedef enum{
    NET_INIT=0,
    NET_CONNECTING,
    NET_CONNECT_SUCCESS,
    NET_CONNECT_FAIL,
    NET_CONNECT_ERROR,
}E_NET_STATUS;//智能音箱网络状态结构体定义

void main(){
    // time=u8232b(time_buffer);
    // printf("time=%ld s\n",time);
    E_NET_STATUS net_status;
    // if(net_status==NET_INIT){

    // }
    // else if(net_status==NET_CONNECTING){

    // }
    // else if(net_status==NET_CONNECT_SUCCESS){

    // }
    // else if(net_status==NET_CONNECT_ERROR){

    // }
    // else if(net_status==NET_CONNECT_FAIL){

    // }直线判断遍历
    // switch(net_status){
    //     case NET_INIT:

    //         break;
    //     case NET_CONNECTING:

    //         break;
    //     case NET_CONNECT_SUCCESS:

    //         break;
    //     case NET_CONNECT_ERROR:

    //         break;
    //     case NET_CONNECT_FAIL://or default

    //         break;
    // }//扁平遍历
    // int status;
    // typedef enum{
    //     true=1,
    //     false=0
    // }bool;
    // while(status){
    //     printf("");
    // }
    // for(;status==true;){

    // }
    // int wifi_array[20]={1,2,3,4,5};
    // int index=0;
    // while(index<sizeof(wifi_array)){
    //     printf("%d\n",wifi_array[index]);
    //     index++;
    // }
    // for(int index=0;index<sizeof(wifi_array);index++){
    //     printf("%d\n",wifi_array[index]);
    // }
    // test();
    // test();
    // test();
    // test();
    // printf("all=%d",10*A);//define后的字符出现运算符优先级对它不加括号
    // #ifdef VERSION_PRE
    // printf("THIS IS A Pre Version");
    // #elif VERSION_GOLD
    // printf("THIS IS Gold Version");
    // #endif

    
}