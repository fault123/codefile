#include<stdio.h>
int main(){
    printf("***************************************************************************\n");
    printf("Enter the number corresponding to the desired pay rate or action:\n");
    printf("1) $8.75/hr                           2) $9.33/hr\n");
    printf("3) $10.00/hr                          4) $11.20/hr\n");
    printf("5)quit\n");
    printf("***************************************************************************\n");
    int Option=0;
    int hours=0;
    int TrueHour=0;
    double Result=0;
    printf("Please choose your mode of salary\n");
    scanf("%d",&Option);

    if(Option>=1&&Option<=4){
        printf("Input your working hours\n");
        scanf("%d",&hours);
        if(hours>40) TrueHour=hours*1.5;
        else TrueHour=hours; 
        switch(Option){
            case 1:Result=8.75*TrueHour;break;
            case 2:Result=9.33*TrueHour;break;
            case 3:Result=10.00*TrueHour;break;
            case 4:Result=11.20*TrueHour;break;
        }
        printf("Your salary is %f",Result);
        return 0;
    }
    else if(Option==5){
        return 0;
    }
    else{
        printf("Please input the right option code\n");
    }          

}





















 