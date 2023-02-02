#include<cstdio>
#include<iostream>
using namespace std;
int main(){
    int a,d[101],i=0;
    scanf("%d",&d[i]);
    do{
        cin>>d[i+1];
        i++;
    }while(d[i]!=0);
    for(int k=i-1;k>=0;k--){
        printf("%d ",d[k]);
    }
}

