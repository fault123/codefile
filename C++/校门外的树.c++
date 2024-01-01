#include<cstdio>
#include<iostream>
using namespace std;
int all,m,start,over,sum=0,last;
int main(){
    cin>>all;
    all=all+1;
    cin>>m;
    for(int i=0;i<m;i++){
        scanf("%d %d",&start,&over);
    }

    last=all-sum;
    printf("%d",last);
}