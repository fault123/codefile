#include<stdio.h>
int main(){
    printf("input 3 groups of numbers,5 double numbers per group!\n");
    int a[3][5],sum=0,all[3],m=0,max1=0,max2=0,sumall=0,data=0;
    for(int i=0;i<3;i++){
        for(int j =0;j<5;j++){
            scanf("%d",&data);
            a[i][j]=data;
            sum+=a[i][j];
        }
        all[i]=sum;
        printf("%d",all[i]/5.0);
        sum=0;
    }
    for(int i=0;i<3;i++){
        sumall+=all[i];
    }
    max1=all[0];
    for(int k = 1 ;k<3;k++){
        if(all[k]<max1){
            continue;
        }else {
            max1=all[k];
        }
    }
    max2=a[0][0];
    for(int m=0;m<3;m++){
        for(int i = 0;i<5;i++){
            if(a[m][i]>max2){
                max2=a[m][i];
            }else continue;
        }
    }
    printf("average is %d\n",sumall/5.0);
    printf("the biggest number is %d\n",max2);
    printf("the number of the biggest group is %d\n",max1);
    return 0;
}