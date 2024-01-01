#include<cstdio>
#include<iostream>
using namespace std;
int main(){
    int a[1000][3],N,k=0,all=0;
    cin>>N;
    for(int i=0;i<N;i++){
        for(int j=0;j<3;j++){
            cin>>a[i][j];
        }
    }
    for(int i=0;i<N;i++){
        if(a[i][k]-a[i+1][k]>5||a[i][k]-a[i][k+1]<-5){
            k=0;
        }
        else k++;
        if(k==2){
            if(a[i][1]+a[i][2]+a[i][3]-a[i+1][1]-a[i+1][2]-a[i+1][3]<=10){
                all++;
            }
        }
    }
    cout<<all;
}
