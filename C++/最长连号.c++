#include<cstdio>
#include<iostream>
using namespace std;
int main(){
    int a,d[1001],j=0,max=0;
    scanf("%d",&a);
    for(int i=0;i<a;i++){
        scanf("%d",&d[i]);
    }
    for(int i=0;i<a;i++){
        if(d[i+1]-d[i]==1){
            j++;
        }else j=0;
        if(j>max){
            max=j;
        }

    }
    cout<<++max;
}