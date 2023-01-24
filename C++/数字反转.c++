#include<cstdio>
#include<iostream>
using namespace std;
int main(){
    int N,d[12],k=0,j=0,M,i=-1,o=0;
    cin>>N;
    if(N<0){
        M=-N;
    }
    else M=N;
    if(N==0){
        printf("0");
    }
    for(int i=1;i<M;i*=10){
        d[k]=M/i%10;
        k++;
    }
    do{
        ++i;
    }while(d[i]==0);
    if(i!=0){
        j=i;
    }
    else j=0;

    if(N>0){
        for(j;j<k;j++){
            printf("%d",d[j]);
            
        }
    }
    else if(N<0){
        printf("-");
        for(j;j<k;j++){
            printf("%d",d[j]);
        }
    }
}